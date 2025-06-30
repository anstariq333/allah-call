"use client";
import Image from 'next/image';
import Link from 'next/link';
import PopupForm from '../components/PopupForm';
import { useState } from 'react';

export default function AcceptIslamNowPage() {
  const [showContactModal, setShowContactModal] = useState(false);

  const steps = [
    {
      title: "Understanding the Shahada",
      content: "The declaration of faith in Islam is called the Shahada. It states: 'I bear witness that there is no deity worthy of worship except Allah, and I bear witness that Muhammad is His messenger.'"
    },
    {
      title: "Preparation",
      content: "Take a shower or perform ablution (wudu) if possible. Wear clean clothes and ensure you are in a calm, quiet environment."
    },
    {
      title: "Declaration",
      content: "Pronounce the Shahada with sincere belief and understanding of its meaning. You can say it in Arabic or your own language."
    },
    {
      title: "Next Steps",
      content: "After declaring your faith, begin learning about the five daily prayers, fasting in Ramadan, and other aspects of Islamic practice."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1627818653012-054f17eb0648?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful Mosque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accept Islam Today
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Take your first step towards eternal peace and guidance
            </p>
            {/* <Link href="#steps" 
              className="inline-block bg-[#f58875] text-white px-8 py-3 rounded-full 
                text-lg font-medium hover:bg-[#e57764] transition-all duration-300
                transform hover:-translate-y-1 hover:shadow-lg">
              Learn How
            </Link> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Embracing Islam</h2>
          <p className="text-lg text-gray-600">
            Accepting Islam is a beautiful and straightforward process. It begins with understanding 
            and declaring your belief in One God (Allah) and His final messenger, Prophet Muhammad 
            (peace be upon him).
          </p>
        </div>

        {/* Steps Section */}
        <div id="steps" className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Steps to Accept Islam
          </h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f58875] rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shahada Box */}
        <div className="bg-[#f58875] text-white rounded-xl p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">The Declaration of Faith (Shahada)</h3>
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

        {/* Support Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Support?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to help you with your journey to Islam. We can provide guidance, 
            answer questions, and connect you with your local Muslim community.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => setShowContactModal(true)}
              className="inline-block bg-[#f58875] text-white px-6 py-3 rounded-full 
                font-medium hover:bg-[#e57764] transition-all duration-300">
              Contact Us
            </button>
            <Link href="/new-muslim-guidelines" 
              className="inline-block bg-white text-[#f58875] px-6 py-3 rounded-full 
                font-medium border-2 border-[#f58875] hover:bg-[#f58875] hover:text-white 
                transition-all duration-300">
              New Muslim Guidelines
            </Link>
          </div>
        </div>
      </div>
      <PopupForm open={showContactModal} onClose={() => setShowContactModal(false)} title="Contact Us" purpose="contact" />
    </div>
  );
} 