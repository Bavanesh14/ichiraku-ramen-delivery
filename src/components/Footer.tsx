import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-display font-bold mb-4">
              <span className="text-accent">一楽</span> Ichiraku
            </h3>
            <p className="text-background/70 text-sm">
              Authentic Japanese ramen crafted with tradition and love since 1985.
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              Location
            </h4>
            <address className="text-background/70 text-sm not-italic">
              123 Ramen Street<br />
              Konoha Village, NK 12345<br />
              Japan
            </address>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              Hours
            </h4>
            <ul className="text-background/70 text-sm space-y-1">
              <li>Mon - Thu: 11am - 10pm</li>
              <li>Fri - Sat: 11am - 11pm</li>
              <li>Sunday: 12pm - 9pm</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              Contact
            </h4>
            <p className="text-background/70 text-sm mb-4">
              (555) 123-RAMEN<br />
              hello@ichiraku.com
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} Ichiraku Ramen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
