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
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AllahCall - Islamic Dawah Platform</title>
        <meta name="description" content="AllahCall is a platform dedicated to spreading authentic Islamic knowledge and connecting people with the message of Islam." />
      </Head>
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
    </>
  );
}
