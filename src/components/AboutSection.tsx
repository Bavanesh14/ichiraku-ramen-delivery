const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Content */}
          <div>
            <p className="text-primary font-display text-lg mb-2">私たちについて</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Since 1985, Ichiraku Ramen has been serving authentic Japanese ramen 
                to ramen lovers around the world. What started as a small stall has 
                grown into a beloved destination for those seeking the perfect bowl.
              </p>
              <p>
                Our master chef spent years perfecting our signature tonkotsu broth, 
                simmering pork bones for 18 hours to achieve that rich, creamy flavor 
                that keeps our customers coming back.
              </p>
              <p>
                Every bowl tells a story of tradition, passion, and dedication to the 
                craft of ramen-making. We invite you to experience it for yourself.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary font-display">40+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary font-display">18</p>
                <p className="text-sm text-muted-foreground">Hour Broth</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary font-display">100K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl md:text-9xl font-display font-bold text-primary/30">
                  一楽
                </span>
                <p className="text-lg text-muted-foreground mt-4 font-display">
                  Ichiraku
                </p>
              </div>
            </div>
            {/* Floating decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
