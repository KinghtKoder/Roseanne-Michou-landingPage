import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Reviews() {
  // todo: remove mock functionality - replace with real review data
  const reviews = [
    {
      name: "Mary M.",
      rating: 5,
      text: "Excellent dentist who really cares. Always pleasant and her work is exceptional!",
      timeAgo: "6 years ago"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "Dr. Michou and her staff are wonderful. Very professional and caring approach to dental care.",
      timeAgo: "3 years ago"
    },
    {
      name: "Robert K.",
      rating: 5,
      text: "Best dental experience I've had. Clean office, friendly staff, and pain-free procedures.",
      timeAgo: "1 year ago"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What Our Patients Say
          </motion.h2>
          
          <motion.div 
            className="flex items-center justify-center space-x-2 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </div>
            <span className="text-lg font-semibold" data-testid="text-overall-rating">5.0</span>
            <span className="text-muted-foreground">Based on patient reviews</span>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto" data-testid="grid-reviews">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 100, rotateY: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card 
                className="hover-elevate"
                data-testid={`card-review-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-accent/20" />
                  </div>
                  
                  <p className="text-sm mb-4 leading-relaxed" data-testid={`text-review-content-${index}`}>
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium" data-testid={`text-reviewer-name-${index}`}>
                      {review.name}
                    </span>
                    <span className="text-xs text-muted-foreground" data-testid={`text-review-time-${index}`}>
                      {review.timeAgo}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">
            Join hundreds of satisfied patients who trust Dr. Michou for their dental care
          </p>
        </motion.div>
      </div>
    </section>
  );
}