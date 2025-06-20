'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
// Dynamically import components with ssr: false to avoid hydration issues
const AboutUs = dynamic(() => import('../components/AboutUs'), { ssr: false });
const OurMission = dynamic(() => import('../components/OurMission'), { ssr: false });

export default function AboutPage() {
  return (
    <main className=" ">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src="/mosque.png"
          alt="Islamic Mosque"
          fill
          className="object-cover h-full brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
            About Us
          </h1>
        </div>
      </section>

      {/* AboutUs Component */}
      <div className="mt-10">
        <AboutUs />
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f58875] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Discover how we help spread the message of Islam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#f58875]/10 to-[#f58875]/5 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Quran Learning</h3>
                <p className="text-gray-600">
                  Learn Quran with proper Tajweed from qualified instructors through our online platform.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#f58875]/10 to-[#f58875]/5 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Islamic Education</h3>
                <p className="text-gray-600">
                  Access authentic Islamic knowledge through structured courses and expert guidance.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#f58875]/10 to-[#f58875]/5 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Islamic Counseling</h3>
                <p className="text-gray-600">
                  Get personal guidance and support from experienced Islamic scholars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OurMission Component */}
      <div className="mt-10">
        <OurMission />
      </div>

      {/* Video Section */}
      <section className="relative h-[500px] w-full">
        <Image
          src="/ramzan.png"
          alt="Islamic Prayer"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            The Beauty of Islam
          </h2>
          <button className="bg-[#f58875] hover:bg-[#e67a68] text-white p-4 rounded-full transition-all duration-300">
            <FaPlay className="text-2xl" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-[#f58875] mb-2">5000+</h3>
              <p className="text-gray-600">Students Worldwide</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#f58875] mb-2">100+</h3>
              <p className="text-gray-600">Islamic Courses</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#f58875] mb-2">50+</h3>
              <p className="text-gray-600">Expert Teachers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#f58875] mb-2">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
