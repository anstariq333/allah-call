"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function RejoiningUmmahPage() {
  const supportAreas = [
    {
      title: "Personal Guidance",
      description: "One-on-one support from experienced mentors to help you reconnect with your faith.",
      activities: [
        "Personal Mentorship",
        "Faith Counseling",
        "Spiritual Guidance",
        "Progress Tracking"
      ],
      image: "/images/guidance.jpg"
    },
    {
      title: "Community Integration",
      description: "Programs to help you become an active member of the Muslim community.",
      activities: [
        "Community Events",
        "Group Activities",
        "Volunteer Opportunities",
        "Social Gatherings"
      ],
      image: "/images/community.jpg"
    },
    {
      title: "Educational Support",
      description: "Resources and learning opportunities to strengthen your Islamic knowledge.",
      activities: [
        "Islamic Classes",
        "Study Groups",
        "Workshops",
        "Online Resources"
      ],
      image: "/images/education.jpg"
    },
    {
      title: "Practical Assistance",
      description: "Help with practical aspects of rejoining the Muslim community.",
      activities: [
        "Mosque Integration",
        "Family Support",
        "Social Services",
        "Cultural Adaptation"
      ],
      image: "/images/assistance.jpg"
    }
  ];

  const benefits = [
    {
      title: "Spiritual Support",
      content: "Receive guidance and support in your journey back to the Muslim community."
    },
    {
      title: "Community Connection",
      content: "Build meaningful relationships with fellow Muslims and become part of a supportive community."
    },
    {
      title: "Knowledge Enhancement",
      content: "Access resources and learning opportunities to strengthen your Islamic understanding."
    },
    {
      title: "Practical Help",
      content: "Get assistance with practical aspects of rejoining the Muslim community."
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
              Rejoining Muslim Ummah
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Support and guidance for reconnecting with the Muslim community
            </p>
            <Link href="#support" 
              className="inline-block bg-[#f58875] text-white px-8 py-3 rounded-full 
                text-lg font-medium hover:bg-[#e57764] transition-all duration-300
                transform hover:-translate-y-1 hover:shadow-lg">
              Explore Support
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome Back</h2>
          <p className="text-lg text-gray-600">
            Our Rejoining Muslim Ummah program provides comprehensive support and guidance 
            for those seeking to reconnect with the Muslim community and strengthen their faith.
          </p>
        </div>

        {/* Support Areas Grid */}
        <div id="support" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {supportAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.activities.map((activity, activityIndex) => (
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
            <h3 className="text-2xl font-bold mb-4">The Believers are Brothers</h3>
            <p className="text-lg mb-6">
              "The believers are but brothers, so make settlement between your brothers." (Quran 49:10)
            </p>
            <p className="text-lg">
              We welcome you back to the Muslim community with open arms and support.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Reconnect?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Take the first step towards rejoining the Muslim community with our support and guidance.
          </p>
          <div className="space-x-4">
            <Link href="/contact" 
              className="inline-block bg-[#f58875] text-white px-6 py-3 rounded-full 
                font-medium hover:bg-[#e57764] transition-all duration-300">
              Get Started
            </Link>
            <Link href="/contact" 
              className="inline-block bg-white text-[#f58875] px-6 py-3 rounded-full 
                font-medium border-2 border-[#f58875] hover:bg-[#f58875] hover:text-white 
                transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 