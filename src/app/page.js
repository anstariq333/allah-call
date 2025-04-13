"use client";
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';
import LandingFAQs from './components/LandingFAQs';
import LearningSection from './components/LearningSection';
import Navbar from "./components/Navbar";
import OurWork from './components/OurWork';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import OurMission from './components/OurMission';
import Team from './components/Team';

export default function Home() {
  return (
    <main >
     
      <Navbar/>
       <HeroCarousel/>
       <AboutUs/>
       <OurMission />
         <OurWork/>
         <LearningSection />
         <Team/>
        <Testimonials/>
        <LandingFAQs/>
    </main>
  );
}
