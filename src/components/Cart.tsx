import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md bg-background">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-primary" />
            Your Order
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full pt-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-foreground/70">
                Add some delicious ramen to get started!
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-auto space-y-4 pr-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-card rounded-xl p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-medium text-foreground truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-primary font-semibold">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Footer */}
              <div className="border-t border-border pt-4 mt-4 pb-6 space-y-4">
                <div className="flex items-center justify-between text-lg">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-bold text-foreground">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Taxes and delivery calculated at checkout
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
