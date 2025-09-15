import { CreditCard, Shield, Heart, Users, DollarSign, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PaymentPlans() {
  // todo: remove mock functionality - replace with real payment plan data
  const paymentOptions = [
    {
      icon: CreditCard,
      title: "Private Coverage",
      description: "We accept all major private dental insurance plans"
    },
    {
      icon: Users,
      title: "Union Plans",
      description: "Coverage for union members and their families"
    },
    {
      icon: Shield,
      title: "Ontario Disability Program",
      description: "ODSP coverage for eligible patients"
    },
    {
      icon: Heart,
      title: "Ontario Works",
      description: "Welfare coverage for adults and children"
    },
    {
      icon: CheckCircle,
      title: "Healthy Smiles",
      description: "Ontario's children's dental program"
    },
    {
      icon: Shield,
      title: "Refugee Coverage",
      description: "Interim Federal Health coverage accepted"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Payment Plans & Insurance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We accept all dental plans and offer flexible payment options to ensure everyone can access quality dental care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" data-testid="grid-payment-options">
          {paymentOptions.map((option, index) => (
            <Card 
              key={option.title} 
              className="hover-elevate animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-payment-${option.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-accent/10 flex-shrink-0">
                    <option.icon className="h-5 w-5 text-accent" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2" data-testid={`text-payment-title-${option.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {option.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-payment-description-${option.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {option.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <DollarSign className="h-6 w-6 text-accent" />
                <span>Special Offers</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-accent/5 rounded-lg">
                  <Badge className="mb-4 bg-accent text-accent-foreground" data-testid="badge-senior-discount">
                    Senior Discount
                  </Badge>
                  <h3 className="font-semibold mb-2" data-testid="text-senior-discount-title">
                    20% Off Regular Price
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-senior-discount-description">
                    Special pricing for senior patients on all dental services
                  </p>
                </div>
                
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <Badge variant="secondary" className="mb-4" data-testid="badge-no-insurance">
                    No Insurance?
                  </Badge>
                  <h3 className="font-semibold mb-2" data-testid="text-no-insurance-title">
                    No Problem!
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-no-insurance-description">
                    We'll work with you to find a payment solution that fits your budget
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}