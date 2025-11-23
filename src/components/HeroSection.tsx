import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNewsletterOpen: () => void;
  onCallBookingOpen: () => void;
}

const HeroSection = ({ onNewsletterOpen, onCallBookingOpen }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-purple-pink">
      {/* Floating color orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tight text-white">
                Rethink
                <span className="block gradient-text-purple-teal text-6xl lg:text-8xl my-2">ALL</span>
                the Rules
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Transform your leadership, career, and team dynamics with revolutionary coaching approaches and transformative insights.
              </p>
            </div>
            
            <div className="flex justify-center animate-bounce-in">
              <Button 
                variant="accent" 
                size="lg"
                className="text-lg px-8 py-3 h-auto bg-white text-purple hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-purple font-semibold"
                onClick={onCallBookingOpen}
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;