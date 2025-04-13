import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-10">
      <div className="max-w-[97%] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left side - Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/3 lg:w-1/2 relative aspect-square"
        >
            {/* Main image */}
            <div className="absolute inset-0 m-auto  rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/ramzan.png"
                alt="Person reading Quran"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full  md:w-2/3 lg:w-1/2 space-y-6"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xl md:text-4xl lg:text-xl text-[#f58875] md:text-[#6B2FB3]  lg:text-[#f58875] font-semibold uppercase tracking-wider"
          >
            ABOUT US
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-4xl xl:text-5xl font-bold text-[#6B2FB3] leading-tight font-display md:hidden lg:block"
          >
            Get to know more about Islam
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-600 leading-relaxed">
              Welcome to our Islamic learning platform where we strive to provide authentic knowledge
              about Islam. Our mission is to help people understand the true teachings of Islam
              through reliable sources and scholarly guidance.
            </p>

            <p className="text-gray-600 leading-relaxed md:hidden lg:block">
              We offer comprehensive resources, educational materials, and expert guidance to help
              you learn about Islamic principles, practices, and values in a welcoming and
              inclusive environment.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex  items-center gap-3 lg:gap-6 pt-4"
          >
            <button className="bg-[#f58875] hover:text-primary text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              Discover More
            </button>
            
            <button className="flex items-center gap-3 text-[#6B2FB3] hover:text-[#5B1FA3] font-medium transition-all duration-300 text-lg">
              <span className="bg-[#F5F0FF] p-3.5 rounded-full">
                <FaPlay className="w-4 h-4" />
              </span>
              Watch Intro
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;