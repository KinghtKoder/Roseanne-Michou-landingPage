import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  const handleServiceClick = () => {
    console.log(`${title} service clicked`);
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Card 
        className="hover-elevate cursor-pointer transition-all duration-300"
        onClick={handleServiceClick}
        data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <CardContent className="p-6 text-center">
          <div className="mb-4 flex justify-center">
            <motion.div 
              className="p-3 rounded-full bg-accent/10"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="h-8 w-8 text-accent" />
            </motion.div>
          </div>
        
          <h3 className="text-lg font-semibold mb-2" data-testid={`text-service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h3>
        
          <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-service-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}