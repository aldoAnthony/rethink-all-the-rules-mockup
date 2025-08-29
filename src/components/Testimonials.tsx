import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, TechVision Inc.",
    content: "The coaching methodology completely transformed how I approach leadership. I've seen a 40% improvement in team engagement and innovation since working together.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "VP of Operations, Global Solutions",
    content: "The books and coaching sessions gave me the confidence to challenge outdated processes. Our department's efficiency increased by 60% in just six months.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Senior Director, Marketing",
    content: "I was stuck in traditional thinking patterns. The 'Rethink ALL the Rules' approach helped me discover innovative solutions I never thought possible.",
    rating: 5
  },
  {
    id: 4,
    name: "David Park",
    role: "Team Lead, Software Development",
    content: "The team coaching sessions revolutionized our collaboration. We went from constant conflicts to becoming the most productive team in the company.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Executive, Financial Services",
    content: "Career coaching helped me navigate a complex transition from individual contributor to executive. The strategies are practical and transformative.",
    rating: 5
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Founder, StartUp Ventures",
    content: "These books should be required reading for every leader. They challenge you to think differently about every aspect of business and personal growth.",
    rating: 5
  }
];

interface TestimonialsProps {
  onCallBookingOpen: () => void;
}

const Testimonials = ({ onCallBookingOpen }: TestimonialsProps) => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Leaders Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from executives and professionals who have transformed their approach to leadership and achieved extraordinary results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover-lift border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Leadership?</h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of leaders who have already started their transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg"
                onClick={onCallBookingOpen}
              >
                Book a Free Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Free Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;