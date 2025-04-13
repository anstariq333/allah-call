import Image from 'next/image';

export default function BoardOfDirectorsPage() {
  const directors = [
    {
      name: "Dr. Ahmed Hassan",
      position: "Chairman",
      bio: "Islamic scholar with over 20 years of experience in dawah work and community leadership.",
      image: "/images/directors/dr-ahmed.jpg"
    },
    {
      name: "Sheikh Muhammad Ali",
      position: "Vice Chairman",
      bio: "Expert in Islamic jurisprudence and founder of several Islamic educational institutions.",
      image: "/images/directors/sheikh-muhammad.jpg"
    },
    {
      name: "Dr. Fatima Khan",
      position: "Executive Director",
      bio: "PhD in Islamic Studies and experienced in interfaith dialogue and community outreach.",
      image: "/images/directors/dr-fatima.jpg"
    },
    {
      name: "Ustadh Yusuf Rahman",
      position: "Director of Education",
      bio: "Specialist in Islamic education and curriculum development with 15 years of teaching experience.",
      image: "/images/directors/ustadh-yusuf.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src="/mosque.png"
          alt="Board of Directors"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Board of Directors
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-lg text-gray-600">
            Meet the dedicated individuals who guide AllahCall's mission and vision. Our board members bring together decades of experience in Islamic education, community service, and dawah work.
          </p>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((director, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{director.name}</h3>
                <p className="text-[#f58875] font-medium mb-2">{director.position}</p>
                <p className="text-gray-600">{director.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            The Board of Directors at AllahCall is committed to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Providing authentic Islamic education and guidance</li>
            <li>Promoting interfaith understanding and dialogue</li>
            <li>Supporting new Muslims in their journey</li>
            <li>Developing innovative programs for Islamic learning</li>
            <li>Ensuring financial sustainability and growth</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 