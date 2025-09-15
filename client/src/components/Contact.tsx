import { Phone, MapPin, Clock, Mail, Car, Accessibility, Baby } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
  const handleCall = () => {
    console.log("Calling practice");
  };

  const handleDirections = () => {
    console.log("Getting directions");
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Our Practice
          </h2>
          <p className="text-lg text-muted-foreground">
            Conveniently located in West Toronto with free parking available
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium" data-testid="text-practice-address">
                        5101 Dundas St W, Unit 104
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid="text-practice-location">
                        Toronto, ON M9A 5G8
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium" data-testid="text-practice-phone">416-231-5454</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Fax: <span data-testid="text-practice-fax">416-231-5454</span></p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Emergency Line Available</p>
                      <p className="text-sm text-muted-foreground">24/7 for urgent dental care</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    onClick={handleCall}
                    data-testid="button-call-contact"
                    className="flex-1"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={handleDirections}
                    data-testid="button-directions"
                    className="flex-1"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Accessibility & Amenities */}
          <div className="animate-slide-in">
            <Card>
              <CardHeader>
                <CardTitle>Accessibility & Amenities</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <Accessibility className="h-8 w-8 text-accent mx-auto mb-2" />
                    <Badge variant="secondary" data-testid="badge-wheelchair">
                      Accessibility Accessible
                    </Badge>
                  </div>
                  
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <Baby className="h-8 w-8 text-accent mx-auto mb-2" />
                    <Badge variant="secondary" data-testid="badge-kid-friendly">
                      Kid Friendly
                    </Badge>
                  </div>
                  
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <Car className="h-8 w-8 text-accent mx-auto mb-2" />
                    <Badge variant="secondary" data-testid="badge-free-parking">
                      Free Street Parking
                    </Badge>
                  </div>
                  
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <Mail className="h-8 w-8 text-accent mx-auto mb-2" />
                    <Badge variant="secondary" data-testid="badge-english">
                      English
                    </Badge>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2 text-center">Professional Memberships</h3>
                  <div className="space-y-2 text-sm text-center">
                    <p data-testid="text-membership-rcdso">• Royal College of Dental Surgeons of Ontario</p>
                    <p data-testid="text-membership-cda">• Canadian Dental Association</p>
                    <p data-testid="text-membership-oda">• Ontario Dental Association</p>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">
                    We are committed to providing optimal dental care to all individuals in Toronto and the GTA.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}