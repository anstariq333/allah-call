"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function OurWorkPage() {
  const achievements = [
    {
      title: "Global Dawah Impact",
      stats: "50,000+",
      description: "People reached through our dawah programs worldwide",
      image: "/images/dawah.jpg"
    },
    {
      title: "New Muslims Support",
      stats: "5,000+",
      description: "New Muslims guided and supported in their journey",
      image: "/images/new-muslims.jpg"
    },
    {
      title: "Islamic Education",
      stats: "10,000+",
      description: "Students enrolled in our various Islamic courses",
      image: "/images/education.jpg"
    },
    {
      title: "Community Building",
      stats: "100+",
      description: "Community events and programs organized annually",
      image: "/images/community.jpg"
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
          src="/mosque.png"
          alt="Beautiful Mosque"
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
            <Link href="#achievements" 
              className="inline-block bg-[#f58875] text-white px-8 py-3 rounded-full 
                text-lg font-medium hover:bg-[#e57764] transition-all duration-300
                transform hover:-translate-y-1 hover:shadow-lg">
              View Our Impact
            </Link>
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
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
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
            <Link href="/contact" 
              className="inline-block bg-[#f58875] text-white px-6 py-3 rounded-full 
                font-medium hover:bg-[#e57764] transition-all duration-300">
              Support Our Work
            </Link>
            <Link href="/volunteer" 
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