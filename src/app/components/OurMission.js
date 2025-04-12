import Image from 'next/image';
import { BsCheckCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const OurMission = () => {
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="container mx-auto px-4 py-8 md:py-10">
      <div className="max-w-[97%] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left side - Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-2/3  lg:w-1/2 space-y-8 md:space-y-4 lg:space-y-8"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl xl:text-5xl font-bold text-[#6B2FB3]  leading-tight font-display"
          >
            Mission Statement
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make Islamic knowledge accessible to everyone, providing a platform
              where individuals can learn and understand the teachings of Islam in a comprehensive
              and authentic manner.
            </p>

            <p className="text-gray-600 leading-relaxed md:hidden lg:block">
              We strive to create an inclusive learning environment that promotes understanding,
              respect, and spiritual growth while maintaining the highest standards of Islamic
              scholarship.
            </p>
          </motion.div>

          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <motion.li 
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-3 md:hidden lg:flex"
            >
              <BsCheckCircleFill className="w-5 h-5 text-[#6B2FB3] mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                Providing authentic Islamic education based on reliable sources
              </span>
            </motion.li>
            <motion.li 
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start gap-3 md:hidden lg:flex"
            >
              <BsCheckCircleFill className="w-5 h-5 text-[#6B2FB3] mt-1 flex-shrink-0 " />
              <span className="text-gray-700">
                Creating an inclusive and welcoming learning environment for all
              </span>
            </motion.li>
            <motion.li 
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start gap-3 md:hidden lg:flex"
            >
              <BsCheckCircleFill className="w-5 h-5 text-[#6B2FB3] mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                Supporting spiritual growth through knowledge and understanding
              </span>
            </motion.li>
          </motion.ul>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#f58875] hover:text-primary text-white px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            More Info
          </motion.button>
        </motion.div>

        {/* Right side - Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/3 lg:w-1/2 relative aspect-square"
        >
          {/* Main image */}
          <div className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/mosque.png"
              alt="Person reading Quran"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission; 