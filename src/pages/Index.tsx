import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedBooks from "@/components/FeaturedBooks";
import CoachingTypes from "@/components/CoachingTypes";
import AboutAuthor from "@/components/AboutAuthor";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { CallBookingPopup } from "@/components/CallBookingPopup";

const Index = () => {
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [callBookingOpen, setCallBookingOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <HeroSection 
        onNewsletterOpen={() => setNewsletterOpen(true)}
        onCallBookingOpen={() => setCallBookingOpen(true)}
      />
      <FeaturedBooks />
      <CoachingTypes />
      <AboutAuthor onCallBookingOpen={() => setCallBookingOpen(true)} />
      <Testimonials onCallBookingOpen={() => setCallBookingOpen(true)} />
      <Footer />
      
      <NewsletterPopup 
        open={newsletterOpen} 
        onOpenChange={setNewsletterOpen} 
      />
      <CallBookingPopup 
        open={callBookingOpen} 
        onOpenChange={setCallBookingOpen} 
      />
    </div>
  );
};

export default Index;
