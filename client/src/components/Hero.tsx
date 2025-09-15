import { Star, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/Modern_dental_office_interior_3835dbf8.png";

export default function Hero() {
  const handleBooking = () => {
    console.log("Book appointment clicked");
  };

  const handleCall = () => {
    console.log("Call now clicked");
  };

  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Professional Dental Care in 
              <motion.span 
                className="text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              > West Toronto</motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-8 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Welcome to Dr. Roseanne Michou's practice. We serve all communities in Toronto and the GTA with comprehensive dental services, accepting all dental plans including Ontario Works and ODSP.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={handleBooking}
                  data-testid="button-book-appointment"
                  className="text-lg px-8"
                >
                  Book Appointment
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleCall}
                  data-testid="button-call-hero"
                  className="text-lg px-8"
                >
                  Call Now
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="flex items-center space-x-6 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                    >
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <span data-testid="text-rating">5.0 Rating</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-accent" />
                <span data-testid="text-insurance">All Insurance Accepted</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <Card className="p-8 bg-card/95 backdrop-blur">
              <h3 className="text-2xl font-semibold mb-6 text-center">Quick Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Phone:</span>
                  <span data-testid="text-phone" className="text-primary">416-231-5454</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">Address:</span>
                  <span data-testid="text-full-address" className="text-right text-sm">
                    5101 Dundas St W, Unit 104<br />
                    Toronto, ON M9A 5G8
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">Today:</span>
                  <span data-testid="text-today-hours" className="text-accent font-medium">10:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Family Friendly</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4" />
                    <span>Licensed Professional</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}