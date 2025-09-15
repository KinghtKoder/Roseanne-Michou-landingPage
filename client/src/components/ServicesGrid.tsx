import { 
  Zap, 
  Sparkles, 
  Wrench, 
  Heart, 
  Crown, 
  Smile,
  Shield 
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  // todo: remove mock functionality - replace with real service data
  const services = [
    {
      icon: Zap,
      title: "Emergency Treatment",
      description: "24/7 emergency dental care for urgent situations including severe tooth pain, trauma, and dental emergencies."
    },
    {
      icon: Sparkles,
      title: "Hygiene Services",
      description: "Professional dental cleanings, scaling, and preventive care to maintain optimal oral health."
    },
    {
      icon: Wrench,
      title: "Restorative Treatment",
      description: "High-quality fillings using modern materials to restore damaged teeth and prevent further decay."
    },
    {
      icon: Heart,
      title: "Endodontic Treatment",
      description: "Root canal therapy to save infected or severely damaged teeth and relieve pain."
    },
    {
      icon: Crown,
      title: "Crowns and Bridges",
      description: "Custom-made crowns and bridges to restore function and aesthetics of damaged or missing teeth."
    },
    {
      icon: Smile,
      title: "Dentures",
      description: "Comfortable, natural-looking partial and complete dentures to replace missing teeth."
    },
    {
      icon: Shield,
      title: "Teeth Whitening",
      description: "Professional whitening treatments to brighten your smile and boost your confidence."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive Dental Services
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We offer a wide range of dental treatments to meet all your oral health needs,
            from emergency care to cosmetic improvements.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-testid="grid-services">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}