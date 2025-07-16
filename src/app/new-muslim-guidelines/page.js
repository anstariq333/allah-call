"use client";
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function NewMuslimGuidelinesPage() {
  const guidelines = [
    {
      title: "Prayer (Salah)",
      content: "Learn how to perform the five daily prayers, including the required purification (wudu) and the proper movements and recitations.",
      icon: "🕌"
    },
    {
      title: "Quran Reading",
      content: "Begin learning to read the Quran in Arabic and understand its meanings through translations and interpretations.",
      icon: "📖"
    },
    {
      title: "Fasting (Sawm)",
      content: "Understand the importance of fasting in Ramadan and learn about the rules and spiritual benefits.",
      icon: "🌙"
    },
    {
      title: "Islamic Character",
      content: "Develop good character traits such as honesty, kindness, patience, and respect for others.",
      icon: "❤️"
    }
  ];

  const practicalSteps = [
    {
      title: "Daily Practices",
      items: [
        "Learn and practice the five daily prayers",
        "Read a portion of the Quran daily",
        "Remember Allah through dhikr",
        "Maintain personal hygiene"
      ]
    },
    {
      title: "Weekly Practices",
      items: [
        "Attend Friday prayers at the mosque",
        "Join Islamic study circles",
        "Connect with the Muslim community",
        "Review and practice what you've learned"
      ]
    },
    {
      title: "Monthly Goals",
      items: [
        "Learn new chapters of the Quran",
        "Improve prayer pronunciation",
        "Study Islamic history",
        "Participate in community service"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>New Muslim Guidelines | AllahCall</title>
        <meta name="description" content="Practical guidelines and advice for new Muslims to embrace Islam in daily life." />
      </Head>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1547119913-19b6afce361f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful Mosque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              New Muslim Guidelines
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Your practical guide to embracing Islam in daily life
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Islam</h2>
          <p className="text-lg text-gray-600">
            This guide will help you understand and implement Islamic practices in your daily life. 
            Take it step by step, and remember that Allah knows your intention and effort.
          </p>
        </div>

        {/* Main Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {guidelines.map((guideline, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <span className="text-4xl">{guideline.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{guideline.title}</h3>
                  <p className="text-gray-600">{guideline.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Practical Steps for New Muslims
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practicalSteps.map((step, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-[#f58875] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-[#f58875] text-white rounded-xl p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Remember</h3>
            <p className="text-lg mb-6">
              "Allah intends for you ease and does not intend for you hardship" (Quran 2:185)
            </p>
            <p className="text-lg">
              Take your time to learn and implement these practices gradually. The journey of faith 
              is a lifelong process of learning and growing.
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Support?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team and community are here to support you on your journey. Don't hesitate to reach out 
            for guidance or answers to your questions.
          </p>
          <div className="space-x-4">
            <Link href="/contact" 
              className="inline-block bg-[#f58875] text-white px-6 py-3 rounded-full 
                font-medium hover:bg-[#e57764] transition-all duration-300">
              Contact Us
            </Link>
            <Link href="/testimonies-of-new-muslims" 
              className="inline-block bg-white text-[#f58875] px-6 py-3 rounded-full 
                font-medium border-2 border-[#f58875] hover:bg-[#f58875] hover:text-white 
                transition-all duration-300">
              Read Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
} 