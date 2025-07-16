"use client"

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BoardOfDirectorsPage() {
  const directors = [
    {
      name: "Hafiz Muhammad Haris",
      position: "Founder & CEO",
      bio: "Visionary founder of AllahCall, dedicated to spreading authentic Islamic knowledge globally. With a passion for community leadership and youth mentorship, he has inspired countless individuals to embrace Islamic values.",
      image: "/hafiz.jpeg",
      achievements: [
        "Founded AllahCall and led its global expansion",
        "Delivered keynote speeches at international Islamic conferences",
        "Mentored over 100 young Islamic scholars"
      ]
    },
    {
      name: "Ya'qub Nuri Amin",
      position: "Islamic Scholar",
      bio: "Respected Islamic scholar known for his deep understanding of Islamic jurisprudence and commitment to interfaith dialogue. He has played a pivotal role in educational initiatives and community outreach programs.",
      image: "/almubeen.jpeg",
      achievements: [
        "Authored several articles on Islamic jurisprudence",
        "Conducted interfaith dialogue sessions worldwide",
        "Recognized for excellence in Islamic education"
      ]
    },
    {
      name: "Muhammad Zeeshan",
      position: "Marketing Manager",
      bio: "Dynamic marketing professional with a talent for digital strategy and community engagement. Zeeshan has successfully elevated AllahCall's presence and impact through innovative campaigns.",
      image: "/zeeshan.png",
      achievements: [
        "Launched successful digital campaigns for AllahCall",
        "Increased community engagement by 300% in one year",
        "Awarded 'Best Islamic Marketing Initiative' 2023"
      ]
    },
    {
      name: "Ustadh Yusuf Rahman",
      position: "Director of Education",
      bio: "Dedicated specialist in Islamic education and curriculum development with over 15 years of teaching experience. Ustadh Yusuf has pioneered innovative digital Islamic learning solutions, empowering students of all ages to access authentic knowledge.",
      image: "/images/directors/ustadh-yusuf.jpg",
      achievements: [
        "Developed award-winning online courses",
        "Trained over 500 Islamic educators",
        "Fluent in 4 languages"
      ]
    }
  ];

  const sectionRefs = useRef([]);
  const directorCards = useRef([]);

  useEffect(() => {
    // Animation for director cards
    directorCards.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    // Section animations
    sectionRefs.current.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });
    });

    // Floating animation for decorative elements
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach(el => {
      gsap.to(el, {
        y: 15,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-indigo-50 overflow-hidden">
      {/* Animated Space Background */}
 

      {/* Hero Section with Parallax */}
      <div className="relative h-screen max-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
        <Image
          src="/b-o-d.jpg"
          alt="Board of Directors"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-indigo-300 opacity-30 floating-element" />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-purple-300 opacity-20 floating-element" />
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 rounded-full bg-blue-300 opacity-25 floating-element" />
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-white">
              Board of Directors
            </span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-20">
        {/* Leadership Intro */}
        <div 
          ref={el => sectionRefs.current[0] = el}
          className="text-center max-w-4xl mx-auto mb-20 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Our Visionary Leadership
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            The distinguished members of our Board of Directors bring together centuries of combined experience in Islamic scholarship, education, and community service to guide AllahCall's sacred mission.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full" />
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-28">
          {directors.map((director, index) => (
            <div 
              key={index}
              ref={el => directorCards.current[index] = el}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-80">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{director.name}</h3>
                  <p className="text-indigo-200 font-medium">{director.position}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{director.bio}</p>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-semibold text-indigo-600 mb-2">KEY ACHIEVEMENTS:</h4>
                  <ul className="space-y-2">
                    {director.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 mt-1 mr-2 text-[#f58875] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div 
          ref={el => sectionRefs.current[1] = el}
          className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 p-10 rounded-3xl shadow-2xl text-white"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Sacred Mission</h2>
            <p className="text-xl mb-8 text-indigo-100">
              The Board of Directors at AllahCall is divinely inspired to fulfill these sacred responsibilities:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg">Providing authentic Islamic education grounded in the Quran and Sunnah</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <span className="text-lg">Supporting new Muslims with comprehensive guidance and mentorship</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg">Promoting global interfaith understanding and harmony</span>
                </li>
              </ul>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-lg">Developing innovative digital Islamic learning solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg">Ensuring financial sustainability through ethical practices</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <span className="text-lg">Fostering community engagement and spiritual growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          ref={el => sectionRefs.current[2] = el}
          className="mt-20 text-center bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Join Us in Our Mission</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The Board of Directors invites you to contribute your talents and resources to this noble cause. Together, we can illuminate hearts with divine guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-[#f58875] text-white rounded-full font-medium hover:bg-[#e67a68] transition-all">
              Volunteer Opportunities
            </button>
            <button className="px-8 py-3 bg-white border-2 border-[#f58875] text-[#f58875] rounded-full font-medium hover:bg-[#f58875] hover:text-white transition-all">
              Contact the Board
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}