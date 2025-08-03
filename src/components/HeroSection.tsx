import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-writing.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Rethink
                <span className="block text-accent">ALL</span>
                the Rules
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Transform your leadership, career, and team dynamics with revolutionary coaching approaches and transformative insights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="accent" 
                size="lg"
                className="text-lg px-8 py-6 h-auto"
              >
                Start Your Transformation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 h-auto"
              >
                Explore Books
              </Button>
            </div>
          </div>
          
          <div className="animate-fade-in-up-delay">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Executive coaching and leadership development"
                className="rounded-lg shadow-2xl w-full h-auto hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;