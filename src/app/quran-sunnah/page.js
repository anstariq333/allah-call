import Image from 'next/image';
import Link from 'next/link';

export default function QuranSunnahPage() {
  const quranSections = [
    {
      title: "The Holy Quran",
      description: "The final revelation from Allah to humanity, preserved in its original form.",
      content: [
        "Revealed over 23 years",
        "114 chapters (Surahs)",
        "Over 6,000 verses (Ayahs)",
        "Preserved in Arabic"
      ]
    },
    {
      title: "The Sunnah",
      description: "The teachings, actions, and approvals of Prophet Muhammad (PBUH).",
      content: [
        "Authentic Hadith collections",
        "Prophetic traditions",
        "Practical examples",
        "Detailed explanations"
      ]
    }
  ];

  const resources = [
    {
      title: "Quran Translation",
      description: "Access translations of the Quran in multiple languages",
      link: "/resources/quran-translation"
    },
    {
      title: "Hadith Collections",
      description: "Explore authentic collections of Prophetic traditions",
      link: "/resources/hadith"
    },
    {
      title: "Tafseer",
      description: "Study detailed explanations of Quranic verses",
      link: "/resources/tafseer"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/quran&sunnah.jpg"
          alt="Quran & Sunnah"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Quran & Sunnah
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Primary Sources of Guidance</h2>
          <p className="text-lg text-gray-600">
            The Quran and Sunnah are the two primary sources of Islamic guidance. Together, they provide a complete framework for living a righteous life according to Allah's will.
          </p>
        </div>

        {/* Quran & Sunnah Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {quranSections.map((section, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
              <p className="text-gray-600 mb-6">{section.description}</p>
              <ul className="space-y-2">
                {section.content.map((item, i) => (
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

        {/* Resources */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Link key={index} href={resource.link} className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Importance Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Quran's Significance</h3>
            <p className="text-gray-600 mb-4">
              The Quran is the literal word of Allah, revealed to Prophet Muhammad (PBUH) through the Angel Gabriel. It serves as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>A source of guidance for all humanity</li>
              <li>A cure for spiritual ailments</li>
              <li>A criterion between right and wrong</li>
              <li>A mercy and reminder for believers</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Sunnah's Role</h3>
            <p className="text-gray-600 mb-4">
              The Sunnah complements the Quran by providing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Practical examples of Quranic teachings</li>
              <li>Detailed explanations of Islamic practices</li>
              <li>Guidance for daily life situations</li>
              <li>Clarification of ambiguous matters</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 