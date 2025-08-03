import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, TrendingUp } from "lucide-react";

const coachingTypes = [
  {
    id: 1,
    icon: Target,
    title: "Executive Coaching",
    description: "Personalized leadership development for C-suite executives and senior managers.",
    features: [
      "Strategic thinking enhancement",
      "Leadership presence development",
      "Decision-making optimization",
      "Stakeholder management"
    ],
    duration: "3-6 months",
    format: "1-on-1 sessions"
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Career Coaching",
    description: "Accelerate your professional growth and navigate career transitions with confidence.",
    features: [
      "Career pathway planning",
      "Personal branding strategy",
      "Interview preparation",
      "Salary negotiation tactics"
    ],
    duration: "2-4 months",
    format: "Individual coaching"
  },
  {
    id: 3,
    icon: Users,
    title: "Team Coaching",
    description: "Transform team dynamics and collective performance for sustainable success.",
    features: [
      "Team alignment workshops",
      "Communication enhancement",
      "Conflict resolution",
      "Collaborative leadership"
    ],
    duration: "3-12 months",
    format: "Group sessions"
  }
];

const CoachingTypes = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Coaching Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the coaching approach that aligns with your goals and transformation journey.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {coachingTypes.map((coaching, index) => {
            const IconComponent = coaching.icon;
            return (
              <Card key={coaching.id} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{coaching.title}</h3>
                    <p className="text-muted-foreground">{coaching.description}</p>
                  </div>
                  
                  <div className="space-y-6">
                    <ul className="space-y-3">
                      {coaching.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t pt-6 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{coaching.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Format:</span>
                        <span className="font-medium">{coaching.format}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full font-semibold">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoachingTypes;