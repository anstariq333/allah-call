"use client";
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';
import LandingFAQs from './components/LandingFAQs';
import LearningSection from './components/LearningSection';
import Navbar from "./components/Navbar";
import OurWork from './components/OurWork';
import Testimonials from './components/Testimonials';
import VisionFocus from './components/VisionFocus';

export default function Home() {
  return (
    <main >
     
      <Navbar/>
       <HeroCarousel/>
       <VisionFocus/>
         <OurWork/>
        <LearningSection />
        <Testimonials/>
        <LandingFAQs/>
        <Footer/>
      
    </main>
  );
}
