"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function CompanionshipPage() {
  const benefits = [
    {
      title: "Personal Guidance",
      content: "One-on-one mentorship with experienced Muslims who understand your journey and challenges.",
      icon: "👥"
    },
    {
      title: "Flexible Schedule",
      content: "Meet with your companion at times that work for both of you, whether online or in person.",
      icon: "📅"
    },
    {
      title: "Customized Support",
      content: "Receive guidance tailored to your specific needs, questions, and pace of learning.",
      icon: "🎯"
    },
    {
      title: "Lifelong Connection",
      content: "Build lasting relationships with mentors who become part of your support network.",
      icon: "🤝"
    }
  ];

  const programDetails = [
    {
      title: "Weekly Meetings",
      items: [
        "One-hour sessions with your companion",
        "Flexible scheduling options",
        "Choice of online or in-person meetings",
        "Progress tracking and goal setting"
      ]
    },
    {
      title: "Learning Areas",
      items: [
        "Islamic beliefs and practices",
        "Quran reading and understanding",
        "Daily prayers and worship",
        "Islamic character development"
      ]
    },
    {
      title: "Support Services",
      items: [
        "24/7 WhatsApp support",
        "Monthly group activities",
        "Access to learning resources",
        "Community events participation"
      ]
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
              Companionship Program
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Journey together with experienced Muslim mentors
            </p>
            <Link href="#apply" 
              className="inline-block bg-[#f58875] text-white px-8 py-3 rounded-full 
                text-lg font-medium hover:bg-[#e57764] transition-all duration-300
                transform hover:-translate-y-1 hover:shadow-lg">
              Join Program
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Walk the Path Together</h2>
          <p className="text-lg text-gray-600">
            Our Companionship Program pairs you with experienced Muslims who provide personal 
            guidance, support, and friendship on your Islamic journey.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <span className="text-4xl">{benefit.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Program Details */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Program Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programDetails.map((detail, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{detail.title}</h3>
                <ul className="space-y-3">
                  {detail.items.map((item, itemIndex) => (
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

        {/* Testimonial Section */}
        <div className="bg-[#f58875] text-white rounded-xl p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">From Our Participants</h3>
            <blockquote className="text-lg italic mb-6">
              "Having a companion to guide me through my journey in Islam has been invaluable. 
              The personal support and friendship have made all the difference."
            </blockquote>
            <p className="text-lg">
              - Sarah, Program Participant
            </p>
          </div>
        </div>

        {/* Application Section */}
        <div id="apply" className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join the Program</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to be paired with a companion? Fill out our application form and we'll match you 
              with a suitable mentor based on your needs and preferences.
            </p>
            <Link href="/contact" 
              className="inline-block bg-[#f58875] text-white px-8 py-3 rounded-full 
                text-lg font-medium hover:bg-[#e57764] transition-all duration-300
                transform hover:-translate-y-1 hover:shadow-lg">
              Apply Now
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to learn more about the Companionship Program or to discuss your specific needs.
          </p>
          <Link href="/contact" 
            className="inline-block bg-white text-[#f58875] px-6 py-3 rounded-full 
              font-medium border-2 border-[#f58875] hover:bg-[#f58875] hover:text-white 
              transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 