import Image from 'next/image';

export default function VolunteersPage() {
  const volunteerRoles = [
    {
      title: "Dawah Team Member",
      description: "Engage in meaningful conversations about Islam and answer questions from interested individuals.",
      requirements: [
        "Basic knowledge of Islamic teachings",
        "Good communication skills",
        "Patience and empathy"
      ]
    },
    {
      title: "Event Coordinator",
      description: "Help organize and manage Islamic events, workshops, and community gatherings.",
      requirements: [
        "Organizational skills",
        "Team management experience",
        "Event planning knowledge"
      ]
    },
    {
      title: "Content Creator",
      description: "Create engaging Islamic content for social media and website platforms.",
      requirements: [
        "Writing or video production skills",
        "Understanding of Islamic principles",
        "Social media experience"
      ]
    },
    {
      title: "Educational Assistant",
      description: "Support Islamic education programs and help students in their learning journey.",
      requirements: [
        "Teaching experience",
        "Knowledge of Islamic studies",
        "Mentoring skills"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src="/mosque.png"
          alt="Volunteers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Join Our Volunteer Team
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Difference</h2>
          <p className="text-lg text-gray-600">
            Become part of our mission to spread authentic Islamic knowledge and support the Muslim community. Your time and skills can make a lasting impact.
          </p>
        </div>

        {/* Volunteer Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {volunteerRoles.map((role, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{role.title}</h3>
              <p className="text-gray-600 mb-4">{role.description}</p>
              <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {role.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Volunteering</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f58875] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Growth</h3>
              <p className="text-gray-600">Develop new skills and deepen your Islamic knowledge</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f58875] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Building</h3>
              <p className="text-gray-600">Connect with like-minded individuals and build lasting relationships</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f58875] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Spiritual Rewards</h3>
              <p className="text-gray-600">Earn blessings by serving the community and spreading Islamic knowledge</p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply to Volunteer</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875]" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875]" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875]" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Preferred Role</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875]">
                <option>Select a role</option>
                {volunteerRoles.map((role, index) => (
                  <option key={index}>{role.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Why do you want to volunteer with us?</label>
              <textarea rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875]"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#f58875] text-white py-3 rounded-lg hover:bg-[#e67a68] transition">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 