import { Button } from "@/components/ui/button";
import { Plus, Flame } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface MenuItemProps {
  item: {
    id: string;
    name: string;
    japaneseName: string;
    description: string;
    price: number;
    image: string;
    isPopular?: boolean;
    isSpicy?: boolean;
  };
}

const MenuItem = ({ item }: MenuItemProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {item.isPopular && (
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
              Popular
            </span>
          )}
          {item.isSpicy && (
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Flame className="w-3 h-3" /> Spicy
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              {item.name}
            </h3>
            <p className="text-primary text-sm font-display">{item.japaneseName}</p>
          </div>
          <span className="text-xl font-bold text-primary whitespace-nowrap">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        <Button 
          variant="gold" 
          className="w-full" 
          onClick={handleAddToCart}
        >
          <Plus className="w-4 h-4" />
          Add to Order
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
