"use client";
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';
import LandingFAQs from './components/LandingFAQs';
import LearningSection from './components/LearningSection';
import Navbar from "./components/Navbar";
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <main >
     
      <Navbar/>
       <HeroCarousel/>
        <LearningSection />
        <Testimonials/>
        <LandingFAQs/>
        <Footer/>
      
    </main>
  );
}
