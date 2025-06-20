"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function ProgramsPage() {
  const programs = [
    {
      title: "Companionship Program",
      description: "Connect with experienced Muslims who will guide and support you on your Islamic journey through one-on-one mentorship.",
      path: "/companionship",
      icon: (
        <svg className="w-16 h-16 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Islamic Courses",
      description: "Comprehensive courses on various Islamic topics, from basic fundamentals to advanced studies in Quran and Sunnah.",
      path: "/courses",
      icon: (
        <svg className="w-16 h-16 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  const features = [
    {
      title: "Expert Guidance",
      content: "Learn from qualified scholars and experienced teachers who provide authentic Islamic knowledge."
    },
    {
      title: "Flexible Learning",
      content: "Access programs online or in-person, with schedules that fit your lifestyle and commitments."
    },
    {
      title: "Supportive Community",
      content: "Join a welcoming community of learners and mentors who support each other's growth."
    },
    {
      title: "Practical Application",
      content: "Focus on implementing Islamic teachings in daily life through practical exercises and guidance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1660795670724-0dfa88fc1dda?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful Mosque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Islamic Learning Programs
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Embark on your journey of Islamic knowledge with structured guidance
            </p>
          
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Programs</h2>
          <p className="text-lg text-gray-600">
            Whether you're new to Islam or seeking to deepen your knowledge, our programs 
            provide structured learning paths with expert guidance and community support.
          </p>
        </div>

        {/* Programs Grid */}
        <div id="explore" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <Link href={program.path} key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-[#f58875]/10 to-[#f58875]/5 flex items-center justify-center">
                  {program.icon}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Program Features
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
            <h3 className="text-2xl font-bold mb-4">Seeking Knowledge</h3>
            <p className="text-lg mb-6">
              "Allah will raise those who have believed among you and those who were given knowledge, by degrees." (Quran 58:11)
            </p>
            <p className="text-lg">
              Join our programs to enhance your understanding of Islam and grow spiritually in a 
              supportive environment.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Learning?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose from our range of programs and begin your journey of Islamic knowledge today.
          </p>
          <div className="space-x-4">
            <Link href="/courses" 
              className="inline-block bg-[#f58875] text-white px-6 py-3 rounded-full 
                font-medium hover:bg-[#e57764] transition-all duration-300">
              Browse Courses
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