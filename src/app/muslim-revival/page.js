"use client";
import Image from 'next/image';
import Link from 'next/link';
import PopupForm from '../components/PopupForm';
import { useState } from 'react';
 

export default function MuslimRevivalPage() {
  const [showContactModal, setShowContactModal] = useState(false);
  const programs = [
    {
      title: "Faith Strengthening",
      description: "Programs designed to deepen your connection with Allah and strengthen your faith.",
      activities: [
        "Daily Remembrance Sessions",
        "Quran Reflection Circles",
        "Spiritual Retreats",
        "Faith Workshops"
      ],
      image: "https://images.unsplash.com/photo-1589366786784-20a72800cebb?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Knowledge Enhancement",
      description: "Structured learning programs to increase your Islamic knowledge.",
      activities: [
        "Islamic Courses",
        "Study Circles",
        "Scholarly Lectures",
        "Book Clubs"
      ],
      image: "https://images.unsplash.com/photo-1544685584-9d18c3420eb4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Community Building",
      description: "Initiatives to foster strong Muslim communities and brotherhood.",
      activities: [
        "Community Gatherings",
        "Volunteer Programs",
        "Youth Activities",
        "Family Events"
      ],
      image: "https://images.unsplash.com/photo-1719988176478-7f4cc9f60568?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Personal Development",
      description: "Programs focusing on character building and self-improvement.",
      activities: [
        "Character Workshops",
        "Mentorship Programs",
        "Leadership Training",
        "Life Skills Sessions"
      ],
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const benefits = [
    {
      title: "Spiritual Growth",
      content: "Deepen your connection with Allah and strengthen your faith."
    },
    {
      title: "Knowledge Increase",
      content: "Gain authentic Islamic knowledge from qualified scholars."
    },
    {
      title: "Community Support",
      content: "Connect with like-minded Muslims for mutual support and growth."
    },
    {
      title: "Practical Guidance",
      content: "Learn how to implement Islamic teachings in your daily life."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1744264362119-bd94511b0597?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful Mosque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Muslim Revival
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Strengthen your faith and reconnect with Islamic teachings
            </p>
            {/* <Link href="#programs" 
              className="inline-block bg-[#f58875] text-white px-8 py-3 rounded-full 
                text-lg font-medium hover:bg-[#e57764] transition-all duration-300
                transform hover:-translate-y-1 hover:shadow-lg">
              Explore Programs
            </Link> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Revive Your Faith</h2>
          <p className="text-lg text-gray-600">
            Our Muslim Revival programs are designed to help you strengthen your connection 
            with Allah, increase your Islamic knowledge, and build a strong Muslim community.
          </p>
        </div>

        {/* Programs Grid */}
        <div id="programs" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Program Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-[#f58875] text-white rounded-xl p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Revival of Faith</h3>
            <p className="text-lg mb-6">
              "Allah will raise those who have believed among you and those who were given knowledge, by degrees." (Quran 58:11)
            </p>
            <p className="text-lg">
              Join our programs to revive your faith and grow spiritually in a supportive environment.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Revive Your Faith?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our Muslim Revival programs and take the first step towards strengthening your faith.
          </p>
          <div className="space-x-4">
            {/* <Link href="/contact" 
              className="inline-block bg-[#f58875] text-white px-6 py-3 rounded-full 
                font-medium hover:bg-[#e57764] transition-all duration-300">
              Join Now
            </Link> */}
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