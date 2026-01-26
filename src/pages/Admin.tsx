// made by leyn.cx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Edit, Trash2, Upload, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Default menu items (same as in Menu.tsx)
const defaultMenuItems = [
  {
    id: 1,
    name: "Signature Latte",
    description: "Rich espresso with silky steamed milk and house-made vanilla syrup",
    price: "$5.50",
    image: "/src/assets/menu-latte.jpg",
    tag: "Bestseller",
    category: "Hot Drinks"
  },
  {
    id: 2,
    name: "Cold Brew",
    description: "Slow-steeped for 18 hours, smooth and refreshing with a hint of sweetness",
    price: "$4.50",
    image: "/src/assets/menu-coldbrew.jpg",
    tag: "Refreshing",
    category: "Cold Drinks"
  },
  {
    id: 3,
    name: "Matcha Harmony",
    description: "Ceremonial grade matcha whisked with oat milk and a touch of honey",
    price: "$6.00",
    image: "/src/assets/menu-matcha.jpg",
    tag: "Healthy",
    category: "Hot Drinks"
  },
  {
    id: 4,
    name: "Iced Caramel Macchiato",
    description: "Espresso with vanilla syrup, milk and caramel sauce over ice",
    price: "$5.75",
    image: "/src/assets/menu-latte.jpg",
    tag: "Popular",
    category: "Cold Drinks"
  },
  {
    id: 5,
    name: "Butter Croissant",
    description: "Flaky, golden layers of French-style pastry, baked fresh daily",
    price: "$4.00",
    image: "/src/assets/menu-croissant.jpg",
    tag: "Fresh Daily",
    category: "Pastries"
  },
  {
    id: 6,
    name: "Avocado Toast",
    description: "Sourdough topped with fresh avocado, cherry tomatoes, and microgreens",
    price: "$9.50",
    image: "/src/assets/menu-avocado.jpg",
    tag: "Popular",
    category: "Food"
  },
  {
    id: 7,
    name: "Cappuccino",
    description: "Classic Italian coffee with equal parts espresso, steamed milk, and foam",
    price: "$4.75",
    image: "/src/assets/menu-latte.jpg",
    tag: "Classic",
    category: "Hot Drinks"
  },
  {
    id: 8,
    name: "Mocha Frappuccino",
    description: "Blended coffee with chocolate syrup, milk, and whipped cream",
    price: "$6.25",
    image: "/src/assets/menu-coldbrew.jpg",
    tag: "Sweet",
    category: "Cold Drinks"
  },
  {
    id: 9,
    name: "Blueberry Muffin",
    description: "Moist muffin packed with fresh blueberries and topped with streusel",
    price: "$3.50",
    image: "/src/assets/menu-croissant.jpg",
    tag: "Fresh",
    category: "Pastries"
  }
];

const Admin = () => {
  const [menuItems, setMenuItems] = useState(defaultMenuItems);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    tag: "",
    category: ""
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem("adminAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    // Load menu items from localStorage
    const savedItems = localStorage.getItem("menuItems");
    if (savedItems) {
      setMenuItems(JSON.parse(savedItems));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    navigate("/");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target.result;
        if (typeof result === 'string') {
          setImagePreview(result);
          setFormData({ ...formData, image: result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      image: "",
      tag: "",
      category: ""
    });
    setImageFile(null);
    setImagePreview("");
    setEditingItem(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingItem) {
      // Update existing item
      const updatedItems = menuItems.map(item =>
        item.id === editingItem.id
          ? { ...item, ...formData, id: item.id }
          : item
      );
      setMenuItems(updatedItems);
      localStorage.setItem("menuItems", JSON.stringify(updatedItems));
    } else {
      // Add new item
      const newItem = {
        ...formData,
        id: Date.now() // Simple ID generation
      };
      const updatedItems = [...menuItems, newItem];
      setMenuItems(updatedItems);
      localStorage.setItem("menuItems", JSON.stringify(updatedItems));
    }

    setIsAddDialogOpen(false);
    resetForm();
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image,
      tag: item.tag,
      category: item.category
    });
    setImagePreview(item.image);
    setIsAddDialogOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedItems = menuItems.filter(item => item.id !== id);
      setMenuItems(updatedItems);
      localStorage.setItem("menuItems", JSON.stringify(updatedItems));
    }
  };

  const openAddDialog = () => {
    resetForm();
    setIsAddDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container-tight section-padding !py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Site
                </Link>
              </Button>
              <h1 className="text-2xl font-display font-bold">Admin Dashboard</h1>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-tight section-padding">
        {/* Add New Item Button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Menu Management</h2>
            <p className="text-muted-foreground">Add, edit, or remove menu items</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={openAddDialog}>
                <Plus className="w-4 h-4 mr-2" />
                Add New Item
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>{editingItem ? "Edit Menu Item" : "Add New Menu Item"}</DialogTitle>
                <DialogDescription>
                  Fill in the details for the menu item below.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="$0.00"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Hot Drinks">Hot Drinks</SelectItem>
                      <SelectItem value="Cold Drinks">Cold Drinks</SelectItem>
                      <SelectItem value="Pastries">Pastries</SelectItem>
                      <SelectItem value="Food">Food</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tag">Tag (optional)</Label>
                  <Input
                    id="tag"
                    value={formData.tag}
                    onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                    placeholder="e.g., Bestseller, Popular"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Image</Label>
                  <div className="space-y-2">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                    {imagePreview && (
                      <div className="relative w-full h-32 rounded-lg overflow-hidden">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button type="submit" className="flex-1">
                    {editingItem ? "Update Item" : "Add Item"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 left-2">{item.tag}</Badge>
                <Badge variant="secondary" className="absolute top-2 right-2">
                  {item.category}
                </Badge>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <span className="font-semibold text-primary">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(item)}
                    className="flex-1"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                    className="flex-1"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;