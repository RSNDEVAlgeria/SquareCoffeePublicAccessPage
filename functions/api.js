export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const CACHE_KEY = "all_products";

  // 1. ROBUST CORS & MOBILE HEADERS
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // Or your specific domain
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Vary": "Accept", // Important for serving WebP to mobile vs JPEG to desktop
  };

  // Handle Browser Pre-flight
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // --- 2. THE PURGE (Admin Panel Sync) ---
  // Trigger: POST to /api?purge=true
  if (request.method === "POST" && url.searchParams.has("purge")) {
    try {
      // Security Check: Bearer Token
      const authHeader = request.headers.get("Authorization");
      if (!authHeader || authHeader !== `Bearer ${env.REVALIDATE_TOKEN}`) {
        return new Response(JSON.stringify({ error: "Unauthorized access" }), { 
          status: 401, headers: corsHeaders 
        });
      }

      // Fetch fresh data from Supabase
      const supabaseRes = await fetch(`${env.SUPABASE_URL}/rest/v1/products?select=*&order=id.asc`, {
        headers: {
          "apikey": env.SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${env.SUPABASE_ANON_KEY}`,
        },
      });

      if (!supabaseRes.ok) throw new Error("Could not connect to Supabase");
      
      const rawProducts = await supabaseRes.json();

      // THE CLEANER: Fixes image URLs for local proxying
      const cleanProducts = rawProducts.map((p) => {
        let path = p.image_url || "";
        const cloudinaryBase = `https://res.cloudinary.com/${env.CLOUDINARY_CLOUD_NAME}/image/upload/`;
        
        // Remove Cloudinary domain and version tags (v12345/)
        path = path.replace(cloudinaryBase, "").replace(/^v\d+\//, "");

        return {
          ...p,
          // Mobile-friendly relative path
          image_url: `/api?image=${path}`, 
        };
      });

      // Save to Cloudflare KV (The "Hot" Cache)
      await env.PRODUCT_KV.put(CACHE_KEY, JSON.stringify(cleanProducts));

      return new Response(JSON.stringify({ success: true, message: "Cache Synced", count: cleanProducts.length }), {
        status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { 
        status: 500, headers: corsHeaders 
      });
    }
  }

  // --- 3. MOBILE-OPTIMIZED IMAGE PROXY ---
  // Trigger: GET /api?image=path/to/image.jpg
  const imageId = url.searchParams.get("image");
  if (imageId) {
    const cache = caches.default;
    // f_auto: Serves WebP/AVIF to phones (huge data saver)
    // q_auto: Compresses quality for unstable 3G/4G
    const cloudinaryUrl = `https://res.cloudinary.com/${env.CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${imageId}`;

    // Check if image is already in the Cloudflare Edge Cache
    let response = await cache.match(request);

    if (!response) {
      const imgRes = await fetch(cloudinaryUrl);
      
      if (!imgRes.ok) {
        return new Response("Image not found", { status: 404 });
      }

      // Create new response to strip Cloudinary headers and add cache rules
      response = new Response(imgRes.body, {
        headers: {
          "Content-Type": imgRes.headers.get("Content-Type") || "image/jpeg",
          "Cache-Control": "public, max-age=31536000, immutable", // Cache for 1 year
          "Access-Control-Allow-Origin": "*",
        },
      });

      // Background task: Save to Cloudflare's global edge network
      context.waitUntil(cache.put(request, response.clone()));
    }
    return response;
  }

  // --- 4. DATA DELIVERY (GET /api) ---
  // Serves the pre-cleaned JSON from KV instantly
  const cachedData = await env.PRODUCT_KV.get(CACHE_KEY);
  
  if (!cachedData) {
    return new Response(JSON.stringify({ error: "No data found. Please purge." }), {
      status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }

  return new Response(cachedData, {
    headers: { ...corsHeaders, "Content-Type": "application/json" }
  });
}