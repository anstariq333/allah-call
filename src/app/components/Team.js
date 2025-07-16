"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Hafiz Muhammad Haris",
      role: "Founder & CEO",
      image: "/hafiz.jpeg",
      social: {
        facebook: "#",
        twitter: "#",
        pinterest: "#",
      },
    },
    {
      id: 2,
      name: "Ya'qub Nuri Amin",
      role: "Islamic Scholar",
      image: "/almubeen.jpeg",
      social: {
        facebook: "#",
        twitter: "#",
        pinterest: "#",
      },
    },
    {
      id: 3,
      name: " Muhammad Zeeshan",
      role: "Marketing Manager",
      image: "/zeeshan.png",
      social: {
        facebook: "#",
        twitter: "#",
        pinterest: "#",
      },
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    },
  };

  const imageVariants = {
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const socialVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-[#6B2FB3] mb-4"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600"
          >
            Our dedicated team of scholars and professionals working to provide authentic Islamic knowledge
          </motion.p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[85%] mx-auto"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-3xl p-6 text-center group hover:shadow-2xl transition-shadow duration-300"
            >
              <motion.div 
                className="relative w-64 h-80 mx-auto mb-6 overflow-hidden rounded-2xl"
                whileHover="hover"
              >
                <motion.div
                  variants={imageVariants}
                  className="w-full h-full"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-gray-900 mb-2"
              >
                {member.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-purple-600 mb-6"
              >
                {member.role}
              </motion.p>
              <motion.div 
                className="flex justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href={member.social.facebook}
                  whileHover="hover"
                  variants={socialVariants}
                  className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                >
                  <FaFacebookF size={18} />
                </motion.a>
                <motion.a
                  href={member.social.twitter}
                  whileHover="hover"
                  variants={socialVariants}
                  className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                >
                  <FaTwitter size={18} />
                </motion.a>
                <motion.a
                  href={member.social.pinterest}
                  whileHover="hover"
                  variants={socialVariants}
                  className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                >
                  <FaPinterestP size={18} />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Team; 