import Image from "next/image";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Hafiz Muhammad Haris",
      role: "Founder & CEO",
      image: "/mosque.png",
      social: {
        facebook: "#",
        twitter: "#",
        pinterest: "#",
      },
    },
    {
      id: 2,
      name: "Hafiz Muhammad Haris",
      role: "Islamic Scholar",
      image: "/mosque.png",
      social: {
        facebook: "#",
        twitter: "#",
        pinterest: "#",
      },
    },
    {
      id: 3,
      name: "Hafiz Muhammad Haris",
      role: "Islamic Scholar",
      image: "/mosque.png",
      social: {
        facebook: "#",
        twitter: "#",
        pinterest: "#",
      },
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B2FB3]  mb-4">
           Meet Our Team
          </h2>
          <p className="text-lg text-gray-600">
            Our dedicated team of scholars and professionals working to provide authentic Islamic knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[85%] mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl p-6 text-center group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-64 h-80 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-purple-600 mb-6">{member.role}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={member.social.facebook}
                  className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href={member.social.pinterest}
                  className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                >
                  <FaPinterestP size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 