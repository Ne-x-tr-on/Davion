import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

interface MarketplaceCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  category: string;
}

export const MarketplaceCard = ({
  name,
  description,
  image,
  price,
  rating,
  category,
}: MarketplaceCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-1 border-border">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-secondary text-secondary-foreground shadow-medium">
              {category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-medium text-foreground">{rating}</span>
          </div>
          <span className="text-xl font-bold text-primary">${price}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="accent" className="w-full">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
