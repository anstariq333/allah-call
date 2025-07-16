"use client";
import Image from 'next/image';
import Link from 'next/link';
import PopupForm from '../components/PopupForm';
import { useState } from 'react';
import Head from 'next/head';

export default function ShahadaPage() {
  const [showContactModal, setShowContactModal] = useState(false);
  const shahadaDetails = [
    {
      title: "Meaning",
      content: "The Shahada is the Muslim declaration of belief in the oneness of Allah and the messengership of Muhammad (peace be upon him)."
    },
    {
      title: "Significance",
      content: "It is the first pillar of Islam and the foundation of the Islamic faith. By declaring the Shahada with sincere belief, one enters the fold of Islam."
    },
    {
      title: "Components",
      content: "The Shahada consists of two parts: declaring that there is no deity worthy of worship except Allah, and affirming that Muhammad is His messenger."
    },
    {
      title: "Requirements",
      content: "The Shahada must be declared with understanding, conviction, certainty, sincerity, truthfulness, and love."
    }
  ];

  const requirements = [
    {
      title: "Understanding",
      content: "Know the meaning of what you're declaring and its implications for your life."
    },
    {
      title: "Conviction",
      content: "Have firm belief in your heart about the truth of these words."
    },
    {
      title: "Sincerity",
      content: "Declare the Shahada purely for Allah's sake, not for worldly gains."
    },
    {
      title: "Love",
      content: "Have love for what the Shahada represents and what it calls to."
    }
  ];

  return (
    <>
      <Head>
        <title>The Shahada | AllahCall</title>
        <meta name="description" content="Understand the meaning and significance of the Shahada, the Islamic declaration of faith." />
      </Head>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1749353709563-80a77c11465e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful Mosque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Shahada
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Understanding the Islamic Declaration of Faith
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Shahada?</h2>
          <p className="text-lg text-gray-600">
            The Shahada is the most important declaration in Islam. It is through this testimony 
            that one becomes a Muslim, affirming their belief in the One true God and His final messenger.
          </p>
        </div>

        {/* Shahada Box */}
        <div className="bg-[#f58875] text-white rounded-xl p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">The Declaration of Faith</h3>
            <p className="text-xl mb-6 font-arabic">
              أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰهِ
            </p>
            <p className="text-lg mb-4 italic">
              "Ash-hadu an laa ilaaha ill-Allah, wa ash-hadu anna Muhammadan rasool-Allah"
            </p>
            <p className="text-lg">
              "I bear witness that there is no deity worthy of worship except Allah, and I bear witness that Muhammad is His messenger"
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {shahadaDetails.map((detail, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{detail.title}</h3>
              <p className="text-gray-600">{detail.content}</p>
            </div>
          ))}
        </div>

        {/* Requirements Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Requirements of the Shahada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{req.title}</h3>
                  <p className="text-gray-600">{req.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Take Your Shahada?</h2>
          <p className="text-lg text-gray-600 mb-8">
            If you're ready to declare your faith or have questions, our team is here to support you.
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
    </>
  );
} 