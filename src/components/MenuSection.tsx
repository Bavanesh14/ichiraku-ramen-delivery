import { useState } from "react";
import MenuItem from "./MenuItem";
import misoRamen from "@/assets/miso-ramen.jpg";
import shoyuRamen from "@/assets/shoyu-ramen.jpg";
import spicyRamen from "@/assets/spicy-ramen.jpg";
import heroRamen from "@/assets/hero-ramen.jpg";

type Category = "all" | "signature" | "classic" | "sides";

interface MenuItemData {
  id: string;
  name: string;
  japaneseName: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  isPopular?: boolean;
  isSpicy?: boolean;
}

const menuItems: MenuItemData[] = [
  {
    id: "tonkotsu",
    name: "Tonkotsu Ramen",
    japaneseName: "豚骨ラーメン",
    description: "Rich, creamy pork bone broth simmered for 18 hours. Topped with chashu, soft-boiled egg, nori, and green onions.",
    price: 16.99,
    image: heroRamen,
    category: "signature",
    isPopular: true,
  },
  {
    id: "miso",
    name: "Miso Ramen",
    japaneseName: "味噌ラーメン",
    description: "Hearty miso-based broth with corn, butter, bean sprouts, and tender chashu pork.",
    price: 15.99,
    image: misoRamen,
    category: "classic",
  },
  {
    id: "shoyu",
    name: "Shoyu Ramen",
    japaneseName: "醤油ラーメン",
    description: "Clear soy sauce-based broth with bamboo shoots, nori, green onions, and sliced pork.",
    price: 14.99,
    image: shoyuRamen,
    category: "classic",
  },
  {
    id: "spicy",
    name: "Spicy Tantanmen",
    japaneseName: "担々麺",
    description: "Fiery Sichuan-inspired broth with ground pork, bok choy, sesame, and chili oil.",
    price: 17.99,
    image: spicyRamen,
    category: "signature",
    isSpicy: true,
    isPopular: true,
  },
];

const categories = [
  { id: "all", name: "All Items" },
  { id: "signature", name: "Signature" },
  { id: "classic", name: "Classic" },
  { id: "sides", name: "Sides" },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems = menuItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-display text-lg mb-2">お品書き</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each bowl is crafted with care, using traditional recipes passed down through generations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as Category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Coming soon! We're adding more delicious items to this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
