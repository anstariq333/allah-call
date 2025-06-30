"use client";
import Image from 'next/image';
import Link from 'next/link';
import PopupForm from '../components/PopupForm';
import { useState } from 'react';


export default function NewMuslimsPage() {
  const [showContactModal, setShowContactModal] = useState(false);
  const sections = [
    {
      title: "Accept Islam Now",
      description: "Take your first step towards embracing Islam. Learn about the declaration of faith (Shahada) and begin your spiritual journey.",
      path: "/accept-islam-now",
      icon: (
        <svg className="w-16 h-16 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      title: "Shahada",
      description: "Understand the meaning and significance of the testimony of faith, the foundation of becoming a Muslim.",
      path: "/shahada",
      icon: (
        <svg className="w-16 h-16 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v4a1 1 0 001 1h3m10-5h2a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h2m4 0V3m0 4a1 1 0 001-1V3a1 1 0 00-1-1 1 1 0 00-1 1v3a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      title: "New Muslim Guidelines",
      description: "Essential guidance and practical tips for those who have recently embraced Islam.",
      path: "/new-muslim-guidelines",
      icon: (
        <svg className="w-16 h-16 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Testimonies of New Muslims",
      description: "Read inspiring stories of people who have found peace and purpose in Islam.",
      path: "/testimonies-of-new-muslims",
      icon: (
        <svg className="w-16 h-16 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const keyPoints = [
    {
      title: "Personal Support",
      content: "One-on-one guidance from experienced mentors to help you on your journey."
    },
    {
      title: "Learning Resources",
      content: "Access to educational materials, books, and courses designed for new Muslims."
    },
    {
      title: "Community Connection",
      content: "Join a welcoming community of Muslims and fellow converts for support and friendship."
    },
    {
      title: "Practical Guidance",
      content: "Learn about daily prayers, Islamic practices, and lifestyle with step-by-step assistance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="http://images.unsplash.com/photo-1616596871445-bb8290a7a2c2?q=80&w=1107&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful Mosque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to Islam
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Begin your journey to spiritual fulfillment with guidance and support
            </p>
            {/* <Link href="/accept-islam-now" 
              className="inline-block bg-[#f58875] text-white px-8 py-3 rounded-full 
                text-lg font-medium hover:bg-[#e57764] transition-all duration-300
                transform hover:-translate-y-1 hover:shadow-lg">
              Begin Your Journey
            </Link> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Path to Islam</h2>
          <p className="text-lg text-gray-600">
            Whether you're curious about Islam or have already taken your Shahada, we're here to support 
            your journey with knowledge, community, and practical guidance.
          </p>
        </div>

        {/* Main Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <Link href={section.path} key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-[#f58875]/10 to-[#f58875]/5 flex items-center justify-center">
                  {section.icon}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Key Points */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How We Support You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Learn More?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to answer your questions and provide guidance on your journey to Islam.
          </p>
          <div className="space-x-4">
            <Link href="/accept-islam-now" 
              className="inline-block bg-[#f58875] text-white px-6 py-3 rounded-full 
                font-medium hover:bg-[#e57764] transition-all duration-300">
              Accept Islam Now
            </Link>
            <button
              onClick={() => setShowContactModal(true)}
              className="inline-block bg-white text-[#f58875] px-6 py-3 rounded-full 
                font-medium border-2 border-[#f58875] hover:bg-[#f58875] hover:text-white 
                transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <PopupForm open={showContactModal} onClose={() => setShowContactModal(false)} title="Contact Us" purpose="contact" />
    </div>
  );
} 