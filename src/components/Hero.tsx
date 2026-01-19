import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ramen.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious ramen bowl"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto fade-in">
          {/* Japanese text accent */}
          <p className="text-primary-foreground/80 font-display text-lg md:text-xl mb-4 tracking-widest">
            本格ラーメン
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Ichiraku
            <span className="block text-accent">Ramen</span>
          </h1>
          
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-xl mx-auto font-light">
            Experience the authentic taste of Japan. Handcrafted noodles, rich broths, 
            and flavors that transport you to the streets of Tokyo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#menu">View Our Menu</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#about">Our Story</a>
            </Button>
          </div>
        </div>

        {/* Steam animation decoration */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-8 opacity-60">
          <div className="w-2 h-16 bg-primary-foreground/30 rounded-full animate-steam" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-20 bg-primary-foreground/30 rounded-full animate-steam" style={{ animationDelay: '0.5s' }} />
          <div className="w-2 h-16 bg-primary-foreground/30 rounded-full animate-steam" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
