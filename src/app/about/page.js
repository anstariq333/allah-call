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
      <section className="relative  h-[500px] w-full">
        <Image
          src="/mosque.png"
          alt="Islamic Mosque"
          fill
          className="object-cover brightness-50"
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
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#f58875] rounded-full flex items-center justify-center mb-6">
                <Image src="/quran-icon.png" alt="Quran" width={32} height={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quran Learning</h3>
              <p className="text-gray-600">
                Learn Quran with proper Tajweed from qualified instructors through our online platform.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#f58875] rounded-full flex items-center justify-center mb-6">
                <Image src="/dawah-icon.png" alt="Dawah" width={32} height={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Islamic Education</h3>
              <p className="text-gray-600">
                Access authentic Islamic knowledge through structured courses and expert guidance.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#f58875] rounded-full flex items-center justify-center mb-6">
                <Image src="/counseling-icon.png" alt="Counseling" width={32} height={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Islamic Counseling</h3>
              <p className="text-gray-600">
                Get personal guidance and support from experienced Islamic scholars.
              </p>
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
      <Footer/>
    </main>
  );
}
