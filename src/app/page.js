"use client";
import LearningSection from './components/LearningSection';
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className=" p-4">
     
      <Navbar/>
        {/* Globe section remaining */}
        <LearningSection />
      
    </main>
  );
}
