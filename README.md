# Square Coffee - Artisan Coffee Experience

A modern, responsive website for Square Coffee featuring a beautiful presentation of artisan coffee, menu items, services, and contact information. Built with React, TypeScript, Vite, and Tailwind CSS.

![Square Coffee](IMG-20260108-WA0004.jpg)

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Multi-language Support**: Internationalization with react-i18next
- **Modern UI/UX**: Beautiful animations using Framer Motion
- **Component Library**: Rich set of UI components built on Radix UI primitives
- **Menu System**: Dynamic menu with category filtering
- **Image Gallery**: Showcase of coffee and ambiance
- **Contact Section**: Interactive contact form and location information
- **Dark Mode Support**: Built-in theme switching capabilities
- **Cloudflare Worker Integration**: Real-time menu data fetching from cache

## Tech Stack

- **Framework**: [React](https://react.dev/) 18.3.1
- **Build Tool**: [Vite](https://vitejs.dev/) 5.4.19
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.8.3
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.4.17
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with Radix UI primitives
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM 6.30.1
- **Internationalization**: i18next + react-i18next
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization

## Project Structure

```
square-coffee/
├── public/                  # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/             # Images and media files
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── GallerySection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MenuSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── NavLink.tsx
│   │   └── ServicesSection.tsx
│   ├── hooks/              # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── i18n/               # Internationalization configuration
│   │   └── index.ts
│   ├── lib/                # Utility functions
│   │   ├── supabase.tsx
│   │   └── utils.ts
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Home page
│   │   ├── Menu.tsx        # Menu page
│   │   └── NotFound.tsx    # 404 page
│   ├── App.tsx             # Main App component
│   ├── index.css           # Global styles
│   └── main.tsx            # Entry point
├── components.json         # shadcn/ui configuration
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd square-coffee
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Configuration

### Tailwind CSS

The project uses Tailwind CSS with custom configuration in `tailwind.config.ts`. Key features include:

- Custom color palette (cream, espresso, forest, sage, warm-gray)
- Custom animations (fade-up, fade-in, slide-in, scale-in, blur-in)
- Custom font families (DM Sans, Playfair Display)
- Container configuration for responsive layouts

### Vite

Vite is configured with:
- Path aliasing (`@/` maps to `./src/`)
- React plugin for JSX/TSX transformation
- Fast HMR (Hot Module Replacement)

### Internationalization

The project supports multiple languages through i18next:
- Translation files located in `src/i18n/index.ts`
- Currently supports French and English
- Easy to extend with additional languages

### Theme Support

Dark mode support is implemented using next-themes with CSS variables defined in `src/index.css`.

## Components

### Custom Components

- **Navbar**: Navigation header with mobile menu
- **HeroSection**: Landing section with background image
- **MenuSection**: Featured menu items preview
- **GallerySection**: Photo gallery with masonry layout
- **ServicesSection**: Services and features showcase
- **ContactSection**: Contact form and information
- **Footer**: Site footer with links and social media

### UI Components (shadcn/ui)

The project includes a comprehensive set of UI components:
- Accordion, Alert Dialog, Alert
- Avatar, Aspect Ratio
- Button, Badge
- Card, Carousel, Checkbox, Collapsible
- Context Menu, Command (Combobox)
- Dialog, Dropdown Menu
- Form components (Label, Input, Textarea, Select, Switch, etc.)
- Hover Card
- Menubar
- Navigation Menu
- Popover, Progress
- Radio Group, Resizable
- Scroll Area, Select, Separator, Sheet, Skeleton, Slider, Sonner
- Table, Tabs, Textarea, Toast, Toggle, Toggle Group, Tooltip

## Menu System

The menu page (`src/pages/Menu.tsx`) features:
- Category filtering (Sweet Food, Salted Food, Drinks)
- Real-time data fetching from Cloudflare Worker cache
- Product cards with images and prices
- Loading states and error handling

### Data Source

Menu items are fetched from a Cloudflare Worker:
```
https://square-coffee-cache.squarecoffeedem.workers.dev/
```

## Styling Guide

### Colors

The project uses CSS variables for theming:
- `--background`: Main background color
- `--foreground`: Main text color
- `--primary`: Primary brand color
- `--secondary`: Secondary accent color
- `--muted`: Muted/subtle elements
- `--accent`: Accent color for highlights
- `--border`: Border color
- Custom coffee-themed colors: cream, espresso, forest, sage

### Typography

- **Display Font**: Playfair Display (for headings)
- **Body Font**: DM Sans (for body text)
- Font sizes and weights follow a consistent scale

### Animation

Custom animations available:
- `fade-up`: Fade in with upward movement
- `fade-in`: Simple opacity fade
- `slide-in-right`: Slide from right
- `slide-in-left`: Slide from left
- `scale-in`: Scale up animation
- `blur-in`: Blur to clear animation

## Deployment

### Static Hosting

The built application can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

### Build Configuration

Ensure your hosting platform is configured to:
1. Build command: `npm run build`
2. Output directory: `dist`
3. SPA fallback: Enable for client-side routing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary. All rights reserved by Square Coffee.

## Credits


- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Fonts: DM Sans & Playfair Display from Google Fonts

## Support

For support or inquiries, please contact Square Coffee through the contact form on the website.
