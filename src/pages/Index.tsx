import HeroSection from "@/components/HeroSection";
import FeaturedBooks from "@/components/FeaturedBooks";
import CoachingTypes from "@/components/CoachingTypes";
import AboutAuthor from "@/components/AboutAuthor";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedBooks />
      <CoachingTypes />
      <AboutAuthor />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
