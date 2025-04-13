import Image from "next/image";
import Link from 'next/link';

export default function MarriagePage() {
  const marriagePrinciples = [
    {
      title: "Mercy and Kindness",
      description: "The foundation of a successful marriage in Islam is built on mercy, kindness, and mutual respect.",
      icon: (
        <svg className="w-12 h-12 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Partnership",
      description: "Marriage is a partnership where both spouses support and complement each other.",
      icon: (
        <svg className="w-12 h-12 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Protection",
      description: "Marriage provides a lawful means of fulfilling natural desires and protecting one's chastity.",
      icon: (
        <svg className="w-12 h-12 text-[#f58875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  const marriageRights = [
    {
      title: "Husband's Rights",
      items: [
        "Obedience in what is good",
        "Protection of his property",
        "Maintaining family honor",
        "Respect and kindness"
      ]
    },
    {
      title: "Wife's Rights",
      items: [
        "Financial maintenance",
        "Kind treatment",
        "Protection and security",
        "Respect and honor"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/mosque.png"
          alt="Islam & Marriage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Marriage in Islam
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Islamic Perspective on Marriage</h2>
          <p className="text-lg text-gray-600">
            Marriage in Islam is a sacred bond between a man and a woman, based on mutual love, mercy, and understanding. It is considered half of one's faith and a means of achieving tranquility and peace.
          </p>
        </div>

        {/* Marriage Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {marriagePrinciples.map((principle, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {principle.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.title}</h3>
              <p className="text-gray-600">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Rights and Responsibilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {marriageRights.map((section, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quranic Guidance */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quranic Guidance on Marriage</h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-[#f58875] pl-4 italic text-gray-600">
              "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts." (Quran 30:21)
            </blockquote>
            <p className="text-gray-600">
              The Quran emphasizes the importance of marriage as a means of achieving peace, love, and mercy in one's life. It provides clear guidance on the rights and responsibilities of both spouses.
            </p>
          </div>
        </div>

        {/* Prophetic Guidance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prophetic Teachings</h3>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-[#f58875] pl-4 italic text-gray-600">
                "The best of you are those who are best to their wives." (Tirmidhi)
              </blockquote>
              <p className="text-gray-600">
                Prophet Muhammad (PBUH) set the perfect example of how to treat one's spouse with kindness, respect, and compassion.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Marriage Preparation</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Seeking a righteous spouse</li>
              <li>• Understanding rights and responsibilities</li>
              <li>• Learning about Islamic marriage laws</li>
              <li>• Preparing for family life</li>
            </ul>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Marriage Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/resources/marriage-guide" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marriage Guide</h3>
              <p className="text-gray-600">Comprehensive guide to Islamic marriage and family life</p>
            </Link>
            <Link href="/resources/counseling" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marriage Counseling</h3>
              <p className="text-gray-600">Professional guidance for married couples</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
