import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarketplaceCard } from "@/components/MarketplaceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

const Marketplace = () => {
  const products = [
    {
      name: "Arduino Mega 2560",
      description: "High-performance microcontroller board for complex projects",
      image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?w=800&auto=format&fit=crop",
      price: 45.99,
      rating: 4.8,
      category: "Hardware",
    },
    {
      name: "Raspberry Pi 4 Kit",
      description: "Complete starter kit with all essential components",
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&auto=format&fit=crop",
      price: 89.99,
      rating: 4.9,
      category: "Hardware",
    },
    {
      name: "IoT Sensor Bundle",
      description: "Collection of sensors for environmental monitoring",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      price: 34.99,
      rating: 4.6,
      category: "Components",
    },
    {
      name: "3D Printer Filament Pack",
      description: "Premium quality PLA filament in multiple colors",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
      price: 29.99,
      rating: 4.7,
      category: "Materials",
    },
    {
      name: "Soldering Station Pro",
      description: "Professional temperature-controlled soldering station",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop",
      price: 79.99,
      rating: 4.8,
      category: "Tools",
    },
    {
      name: "ESP32 Development Kit",
      description: "WiFi and Bluetooth enabled microcontroller",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      price: 19.99,
      rating: 4.9,
      category: "Hardware",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Header */}
        <section className="bg-gradient-subtle py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Hardware Marketplace
              </h1>
              <p className="text-xl text-muted-foreground">
                Find the best components, tools, and materials for your next innovation
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-background sticky top-16 z-40 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 h-12"
                />
              </div>
              <Button variant="outline" className="h-12 px-6">
                <SlidersHorizontal className="mr-2 h-5 w-5" />
                Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <MarketplaceCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Marketplace;
