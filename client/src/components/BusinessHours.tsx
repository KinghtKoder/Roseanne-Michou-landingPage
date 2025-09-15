import { Clock, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface HoursData {
  day: string;
  hours: string;
  isOpen: boolean;
}

export default function BusinessHours() {
  const [currentDay, setCurrentDay] = useState<string>("");
  const [isCurrentlyOpen, setIsCurrentlyOpen] = useState<boolean>(false);

  // todo: remove mock functionality - replace with real business hours logic
  const businessHours: HoursData[] = [
    { day: "Monday", hours: "10:00 AM - 6:00 PM", isOpen: true },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM", isOpen: true },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM", isOpen: true },
    { day: "Thursday", hours: "10:00 AM - 6:00 PM", isOpen: true },
    { day: "Friday", hours: "Closed", isOpen: false },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM", isOpen: true },
    { day: "Sunday", hours: "Closed", isOpen: false }
  ];

  useEffect(() => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[new Date().getDay()];
    setCurrentDay(today);
    
    const todayHours = businessHours.find(h => h.day === today);
    setIsCurrentlyOpen(todayHours?.isOpen || false);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
          >
            <Card>
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="h-6 w-6 text-accent" />
                <CardTitle className="text-2xl">Business Hours</CardTitle>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                {isCurrentlyOpen ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" data-testid="badge-open-status">
                      Open Now
                    </Badge>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-red-500" />
                    <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100" data-testid="badge-closed-status">
                      Closed
                    </Badge>
                  </>
                )}
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4" data-testid="grid-business-hours">
                {businessHours.map((day) => (
                  <div 
                    key={day.day}
                    className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                      day.day === currentDay 
                        ? 'bg-accent/10 border border-accent/20' 
                        : 'hover-elevate'
                    }`}
                    data-testid={`row-hours-${day.day.toLowerCase()}`}
                  >
                    <span className={`font-medium ${
                      day.day === currentDay ? 'text-primary' : 'text-foreground'
                    }`}>
                      {day.day}
                    </span>
                    
                    <span className={`text-sm ${
                      day.isOpen 
                        ? 'text-foreground' 
                        : 'text-muted-foreground'
                    }`} data-testid={`text-hours-${day.day.toLowerCase()}`}>
                      {day.hours}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  For emergency dental care outside business hours, please call our emergency line.
                </p>
              </div>
            </CardContent>
          </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}