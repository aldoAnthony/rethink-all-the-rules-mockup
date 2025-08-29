import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNewsletterOpen: () => void;
  onCallBookingOpen: () => void;
}

const HeroSection = ({ onNewsletterOpen, onCallBookingOpen }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Rethink
                <span className="block text-accent">ALL</span>
                the Rules
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Transform your leadership, career, and team dynamics with revolutionary coaching approaches and transformative insights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg"
                className="text-lg px-8 py-6 h-auto"
                onClick={onCallBookingOpen}
              >
                Book a Call
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-6 h-auto"
                onClick={onNewsletterOpen}
              >
                Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;