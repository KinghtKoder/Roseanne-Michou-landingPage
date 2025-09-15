import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" data-testid="text-footer-title">
              Dr. Roseanne Michou
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Professional dental care serving Toronto and the GTA with comprehensive services and flexible payment options.
            </p>
            <p className="text-sm opacity-75" data-testid="text-footer-mission">
              Committed to providing optimal dental care to all individuals.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span data-testid="text-footer-phone">416-231-5454</span>
              </div>
              
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div data-testid="text-footer-address">5101 Dundas St W, Unit 104</div>
                  <div data-testid="text-footer-city">Toronto, ON M9A 5G8</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span data-testid="text-footer-emergency">24/7 Emergency Line</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <span>Emergency Care</span>
              <span>Cleanings</span>
              <span>Fillings</span>
              <span>Root Canals</span>
              <span>Crowns & Bridges</span>
              <span>Dentures</span>
              <span>Whitening</span>
              <span>Family Dentistry</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75" data-testid="text-footer-copyright">
            © 2025 Dr. Roseanne Michou - Dental Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}