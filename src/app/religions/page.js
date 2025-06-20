"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function ReligionsPage() {
  const religions = [
    {
      name: "Christianity",
      path: "/christianity",
      description: "Explore the relationship between Islam and Christianity, common grounds, and respectful dialogue.",
      image: "/bible.jpg"
    },
    {
      name: "Judaism",
      path: "/judaism",
      description: "Understand the historical and theological connections between Islam and Judaism.",
      image: "/juadism.jpg"
    },
    {
      name: "Hinduism",
      path: "/hinduism",
      description: "Learn about Hindu beliefs and practices, and Islamic perspectives on interfaith dialogue.",
      image: "https://images.unsplash.com/photo-1625050795880-ae615b56da68?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Buddhism",
      path: "/buddhism",
      description: "Discover Buddhist teachings and opportunities for meaningful interfaith understanding.",
      image: "/buddism.jpg"
    },
    {
      name: "Sikhism",
      path: "/sikhism",
      description: "Explore Sikh beliefs and traditions, and the importance of mutual respect and understanding.",
      image: "https://images.unsplash.com/photo-1642355099716-a88a41a17887?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1742223996745-cedb68f57e52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="World Religions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Understanding World Religions
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto px-4">
              Promoting interfaith dialogue and mutual understanding through knowledge and respect
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interfaith Understanding</h2>
          <p className="text-lg text-gray-600">
            Islam encourages understanding and respectful dialogue with people of all faiths. Explore the beliefs, practices, and shared values of different religions to foster mutual respect and peaceful coexistence.
          </p>
        </div>

        {/* Religion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {religions.map((religion, index) => (
            <Link href={religion.path} key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={religion.image}
                    alt={religion.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{religion.name}</h3>
                  <p className="text-gray-600">{religion.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quranic Guidance */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quranic Guidance on Interfaith Relations</h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-[#f58875] pl-4 italic text-gray-600">
              "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another." (Quran 49:13)
            </blockquote>
            <p className="text-gray-600">
              Islam teaches us to engage in respectful dialogue and to understand different beliefs while staying true to our own faith. This understanding helps build bridges between communities and promotes peaceful coexistence.
            </p>
          </div>
        </div>

        {/* Interfaith Resources */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interfaith Dialogue</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Join our monthly interfaith discussions
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Participate in community events
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Access educational materials
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Volunteer for interfaith projects
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Attend workshops and seminars
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f58875] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Join our mailing list
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 