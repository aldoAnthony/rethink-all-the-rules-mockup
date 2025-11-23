import { Button } from "@/components/ui/button";

interface AboutAuthorProps {
  onCallBookingOpen: () => void;
}

const AboutAuthor = ({ onCallBookingOpen }: AboutAuthorProps) => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">About the Author</h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                With over 15 years of experience in executive leadership and organizational transformation, 
                I've dedicated my career to challenging conventional thinking and empowering individuals to 
                reach their full potential.
              </p>
              
              <p>
                My journey began in Fortune 500 companies where I witnessed firsthand how traditional 
                approaches often stifle innovation and authentic leadership. This experience fueled my 
                passion for developing new methodologies that honor both human potential and business success.
              </p>
              
              <p>
                Today, I work with leaders across industries to rethink their approach to leadership, 
                team dynamics, and personal growth. My methods have helped hundreds of professionals 
                break through limiting beliefs and achieve extraordinary results.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-8">
              <div className="gradient-purple-pink p-6 rounded-xl hover-gradient-shift hover:scale-105 transition-all duration-300 shadow-purple">
                <h4 className="font-bold text-2xl text-white mb-2">500+</h4>
                <p className="text-white/80">Leaders Coached</p>
              </div>
              <div className="gradient-teal-blue p-6 rounded-xl hover-gradient-shift hover:scale-105 transition-all duration-300 shadow-teal">
                <h4 className="font-bold text-2xl text-white mb-2">15+</h4>
                <p className="text-white/80">Years Experience</p>
              </div>
              <div className="gradient-orange-yellow p-6 rounded-xl hover-gradient-shift hover:scale-105 transition-all duration-300 shadow-orange">
                <h4 className="font-bold text-2xl text-foreground mb-2">3</h4>
                <p className="text-foreground/80">Published Books</p>
              </div>
              <div className="bg-pink text-white p-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-pink">
                <h4 className="font-bold text-2xl mb-2">50+</h4>
                <p className="text-white/80">Companies Transformed</p>
              </div>
            </div>
            
            <Button 
              variant="accent" 
              size="lg" 
              className="font-semibold"
              onClick={onCallBookingOpen}
            >
              Schedule a Consultation
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-muted to-accent/10 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-accent/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-4xl font-bold text-accent">JD</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Jane Doe</h3>
                  <p className="text-muted-foreground">Executive Coach & Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;