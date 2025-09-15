import { Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const handleCall = () => {
    console.log("Calling dental office");
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div>
              <h1 className="text-xl font-bold text-primary" data-testid="text-practice-name">
                Dr. Roseanne Michou
              </h1>
              <p className="text-sm text-muted-foreground">Dental Centre</p>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span data-testid="text-address">5101 Dundas St W, Unit 104, Toronto</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-accent" />
                <span data-testid="text-hours">Mon-Thu: 9AM-6PM, Sat: 10AM-6PM</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleCall}
              data-testid="button-call"
              variant="default"
              className="hidden sm:flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </Button>
            
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}