"use client";
import Image from 'next/image';
import Link from 'next/link';
import PopupForm from '../components/PopupForm';
import { useState } from 'react';

  
export default function CoursesPage() {
  const [showContactModal, setShowContactModal] = useState(false);
  const courses = [
    {
      title: "Fundamentals of Islam",
      level: "Beginner",
      duration: "8 weeks",
      description: "Learn the basic principles of Islam, including beliefs, prayers, and essential practices.",
      topics: ["Islamic Beliefs", "Five Pillars", "Prayer Basics", "Purification"],
      image: "https://images.unsplash.com/photo-1544685584-9d18c3420eb4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Quran Reading",
      level: "All Levels",
      duration: "12 weeks",
      description: "Master Quran recitation with proper tajweed rules and pronunciation.",
      topics: ["Arabic Letters", "Tajweed Rules", "Recitation Practice", "Memorization Techniques"],
      image: "https://images.unsplash.com/photo-1582033133673-0191060657a9?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Islamic Ethics & Character",
      level: "Intermediate",
      duration: "6 weeks",
      description: "Develop noble character traits based on Islamic teachings and prophetic guidance.",
      topics: ["Islamic Morals", "Prophet's Character", "Social Ethics", "Family Values"],
      image: "https://images.unsplash.com/photo-1589366786784-20a72800cebb?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Advanced Islamic Studies",
      level: "Advanced",
      duration: "16 weeks",
      description: "Deep dive into Islamic sciences, including fiqh, hadith, and tafseer.",
      topics: ["Usul al-Fiqh", "Hadith Studies", "Tafseer", "Contemporary Issues"],
      image: "https://images.unsplash.com/photo-1652751207037-f6f5097fdb9a?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const features = [
    {
      title: "Expert Teachers",
      content: "Learn from qualified scholars with years of teaching experience."
    },
    {
      title: "Flexible Learning",
      content: "Access course materials anytime, anywhere through our online platform."
    },
    {
      title: "Interactive Sessions",
      content: "Engage in live discussions and Q&A sessions with instructors."
    },
    {
      title: "Progress Tracking",
      content: "Monitor your learning journey with assessments and progress reports."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1711202675885-d0a0ce63b5bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful Mosque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Islamic Courses
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Structured learning paths for your Islamic education
            </p>
           
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Courses</h2>
          <p className="text-lg text-gray-600">
            Choose from our range of carefully designed courses that cater to different levels 
            of learning and areas of Islamic knowledge.
          </p>
        </div>

        {/* Courses Grid */}
        <div id="courses" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium text-[#f58875]">{course.level}</span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Topics covered:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Course Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-[#f58875] text-white rounded-xl p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Lifelong Learning</h3>
            <p className="text-lg mb-6">
              "Seeking knowledge is an obligation upon every Muslim." (Ibn Majah)
            </p>
            <p className="text-lg">
              Start your learning journey today with our comprehensive Islamic courses.
            </p>
          </div>
        </div>

        {/* Enrollment Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Enroll?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to learn more about course schedules, fees, and enrollment process.
          </p>
          <div className="space-x-4">
          <button
              onClick={() => setShowContactModal(true)}
              className="inline-block bg-white text-[#f58875] px-6 py-3 rounded-full 
                font-medium border-2 border-[#f58875] hover:bg-[#f58875] hover:text-white 
                transition-all duration-300">
              Contact Us
            </button>
            {/* <Link href="/contact" 
              className="inline-block bg-white text-[#f58875] px-6 py-3 rounded-full 
                font-medium border-2 border-[#f58875] hover:bg-[#f58875] hover:text-white 
                transition-all duration-300">
              Request Information
            </Link> */}
          </div>
        </div>
      </div>
      <PopupForm open={showContactModal} onClose={() => setShowContactModal(false)} title="Contact Us" purpose="contact" />
    </div>
  );
} 