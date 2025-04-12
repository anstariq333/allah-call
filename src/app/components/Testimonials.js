import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      heading: "Finding Peace in Islam",
      message:
        "AllahCall's authentic teachings cleared my misconceptions and guided me to embrace Islam with a pure heart.",
      author: "Sarah Johnson",
      designation: "New Muslim, United States",
      image: "/avt1.png",
    },
    {
      id: 2,
      heading: "Clarity Through Knowledge",
      message:
        "The scholars at AllahCall answered all my questions with wisdom, helping me overcome my doubts about Islam.",
      author: "Michael Chen",
      designation: "Revert to Islam, Canada",
      image: "/avt15.png",
    },
    {
      id: 3,
      heading: "From Confusion to Certainty",
      message:
        "AllahCall helped me understand the true beauty of Islam and cleared all my misconceptions.",
      author: "Emma Wilson",
      designation: "New Muslim, United Kingdom",
      image: "/avt14.png",
    },
    {
      id: 4,
      heading: "A Journey of Discovery",
      message:
        "AllahCall's authentic Islamic knowledge helped me see Islam in its true light and embrace it.",
      author: "David Martinez",
      designation: "Revert to Islam, Spain",
      image: "/avt13.png",
    },
    {
      id: 5,
      heading: "Understanding Islam's Beauty",
      message:
        "Through AllahCall's teachings, I found the truth about Islam and embraced it with an open heart.",
      author: "Sophie Anderson",
      designation: "New Muslim, Australia",
      image: "/avt14.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-bold text-[#6B2FB3]">
          Stories of Guidance
        </h2>
        <p className="text-center text-md text-gray-500 mt-2">
          Hear from those who found the truth through authentic Islamic knowledge
        </p>
        <div className="mt-12 mx-auto max-w-[97%]">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-carousel"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="py-8 rounded-3xl">
                <div className="relative flex flex-col h-[300px] rounded-3xl border border-gray-200 p-6 transition hover:border-purple-600 hover:shadow-2xl-purple">
                  <h3 className="text-sm text-gray-500">{testimonial.heading}</h3>
                  <p className="mt-4 text-xl 2xl:text-2xl font-bold text-gray-900 leading-relaxed">
                    {testimonial.message}
                  </p>
                  <div className="absolute bottom-5 flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="ml-4 mt-1">
                      <p className="text-lg text-purple-600 font-bold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.designation}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-20 right-6">
                    <Image src="/quotation.png" alt="Quotation" width={40} height={40} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Pagination Styles for Testimonials */}
      <style jsx global>{`
        .testimonials-carousel .swiper-pagination-bullet {
          background: #e5e7eb !important;
          opacity: 0.5;
          width: 8px;
          height: 8px;
          margin: 0 4px;
        }
        .testimonials-carousel .swiper-pagination-bullet-active {
          opacity: 1;
          background: #6B2FB3 !important;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
