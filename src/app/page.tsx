'use client';

import Navbar from "@/components/NavBar";
import BlogSection from "@/components/sections/BlogSection";
import ContactForm from "@/components/sections/ContactForm";
import FAQSection from "@/components/sections/FAQSection";
import Features from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import Testimonial from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <PricingSection />
      <Testimonial />
      <FAQSection />
      <ContactForm />
      <BlogSection />
    </>
  );
}
