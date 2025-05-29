import Image from 'next/image';
import Link from 'next/link';

export default function DawahPage() {
  const dawahMethods = [
    {
      title: "Personal Conversations",
      description: "One-on-one discussions about Islam with wisdom and beautiful preaching.",
      icon: (
        <svg className="w-12 h-12 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      title: "Public Lectures",
      description: "Organizing and conducting public talks on various Islamic topics.",
      icon: (
        <svg className="w-12 h-12 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Online Outreach",
      description: "Utilizing digital platforms to spread the message of Islam globally.",
      icon: (
        <svg className="w-12 h-12 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  const dawahPrinciples = [
    "Wisdom and good instruction",
    "Beautiful preaching",
    "Patience and perseverance",
    "Knowledge and understanding",
    "Respect and kindness",
    "Authentic information"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1627818653012-054f17eb0648?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Dawah"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Dawah: Inviting to Islam
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Art of Dawah</h2>
          <p className="text-lg text-gray-600">
            Dawah is the act of inviting others to understand and embrace Islam. It is a noble responsibility that requires knowledge, wisdom, and beautiful preaching.
          </p>
        </div>

        {/* Dawah Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {dawahMethods.map((method, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>

        {/* Principles of Dawah */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Principles of Effective Dawah</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dawahPrinciples.map((principle, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{principle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quranic Guidance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quranic Guidance</h3>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-[#f58875] pl-4 italic text-gray-600">
                "Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best." (Quran 16:125)
              </blockquote>
              <p className="text-gray-600">
                The Quran provides clear guidance on how to conduct dawah with wisdom, beautiful preaching, and good manners.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prophetic Example</h3>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-[#f58875] pl-4 italic text-gray-600">
                "Make things easy and do not make things difficult. Give glad tidings and do not make people run away." (Sahih Bukhari)
              </blockquote>
              <p className="text-gray-600">
                Prophet Muhammad (PBUH) demonstrated the best methods of dawah through his words and actions.
              </p>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dawah Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/resources/dawah-guide" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dawah Guide</h3>
              <p className="text-gray-600">Learn effective methods and techniques for giving dawah</p>
            </Link>
            <Link href="/resources/common-questions" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Common Questions</h3>
              <p className="text-gray-600">Find answers to frequently asked questions about Islam</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 