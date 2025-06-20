"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function OurWorkPage() {
  const achievements = [
    {
      title: "Global Dawah Impact",
      stats: "50,000+",
      description: "People reached through our dawah programs worldwide",
      icon: (
        <svg className="w-16 h-16 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "New Muslims Support",
      stats: "5,000+",
      description: "New Muslims guided and supported in their journey",
      icon: (
        <svg className="w-16 h-16 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      title: "Islamic Education",
      stats: "10,000+",
      description: "Students enrolled in our various Islamic courses",
      icon: (
        <svg className="w-16 h-16 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Community Building",
      stats: "100+",
      description: "Community events and programs organized annually",
      icon: (
        <svg className="w-16 h-16 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const projects = [
    {
      title: "Youth Development",
      description: "Empowering Muslim youth through leadership and spiritual development programs.",
      activities: [
        "Youth Mentorship Program",
        "Islamic Summer Camps",
        "Youth Leadership Training",
        "Sports & Recreation Activities"
      ]
    },
    {
      title: "Community Outreach",
      description: "Building bridges and fostering understanding between communities.",
      activities: [
        "Interfaith Dialogues",
        "Open Mosque Days",
        "Community Service Projects",
        "Cultural Exchange Programs"
      ]
    },
    {
      title: "Educational Initiatives",
      description: "Providing quality Islamic education and resources.",
      activities: [
        "Online Learning Platform",
        "Weekend Islamic School",
        "Adult Education Classes",
        "Teacher Training Programs"
      ]
    },
    {
      title: "Social Services",
      description: "Supporting the community through various social services.",
      activities: [
        "Marriage Counseling",
        "New Muslim Support",
        "Family Services",
        "Youth Counseling"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "AllahCall's programs have transformed my understanding of Islam and helped me grow spiritually.",
      author: "Sarah, New Muslim",
      location: "United Kingdom"
    },
    {
      quote: "The youth programs have given my children a strong Islamic foundation while keeping them engaged.",
      author: "Ahmad",
      location: "United States"
    },
    {
      quote: "The interfaith dialogues have helped bridge gaps and build understanding in our community.",
      author: "Dr. James",
      location: "Canada"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/event.jpg"
          alt="our work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Making a difference through Islamic education and community service
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Achievements Section */}
        <div id="achievements" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-[#f58875]/10 to-[#f58875]/5 flex items-center justify-center">
                  {achievement.icon}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-3xl font-bold text-[#f58875] mb-2">{achievement.stats}</p>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-[#f58875] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-[#f58875] text-white rounded-xl p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Making a Difference</h3>
            <p className="text-lg mb-6">
              "Whoever guides someone to goodness will have a reward similar to the one who does it." (Muslim)
            </p>
            <p className="text-lg">
              Join us in our mission to spread the message of Islam and serve humanity.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Involved</h2>
          <p className="text-lg text-gray-600 mb-8">
            Support our work and be part of making a positive impact in the community.
          </p>
          <div className="space-x-4">
          <Link href="/volunteers" 
              className="inline-block bg-[#f58875] text-white px-6 py-3 rounded-full 
                font-medium hover:bg-[#e57764] transition-all duration-300">
              Support Our Work
            </Link>
            <Link href="/volunteers" 
              className="inline-block bg-white text-[#f58875] px-6 py-3 rounded-full 
                font-medium border-2 border-[#f58875] hover:bg-[#f58875] hover:text-white 
                transition-all duration-300">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 