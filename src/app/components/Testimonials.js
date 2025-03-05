import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      heading: "Hire an entire team of Developers from us.",
      message:
        " AllahCall delivered outstanding results, simplifying our hiring process and letting us focus on top candidates effortlessly.",
      author: "Saad Salman",
      designation: "Sales Representative, Linkify",
      image: "/avt1.png",
    },
    {
      id: 2,
      heading: "Hire an entire team of Developers from us.",
      message:
        "With the help of AllahCall we were able to transform the way we approached hiring. The entire process became faster and more efficient.",
      author: "Muhammad Nameer Uddin",
      designation: "Founder, Universal Technologies",
      image: "/avt15.png",
    },
    {
      id: 3,
      heading: "Hire an entire team of Developers from us.",
      message:
        "We saw incredible results with AllahCall’s seamless hiring process. It allowed us to focus on evaluating top candidates without the usual hassle.",
      author: "Arshad Iqbal",
      designation: "Country Manager, Tixsee Labs LLC",
      image: "/avt14.png",
    },
    {
      id: 4,
      heading: "Hire an entire team of Developers from us.",
      message:
        "Finding the right people for our team was never this simple. AllahCall made sure we had the best talent in no time.",
      author: "Muhammad Ahsan Khan",
      designation: "Founder, SkillBuilder",
      image: "/avt13.png",
    },
    {
      id: 5,
      heading: "Hire an entire team of Developers from us.",
      message:
        "AllahCall transformed our hiring process, dramatically speeding up candidate sourcing with advanced AI.",
      author: "Muhammad Aqib",
      designation: "Founder, Well-Tech",
      image: "/avt14.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-bold text-gray-900">
          Reviews
        </h2>
        <p className="text-center text-md text-gray-500 mt-2">
          Don’t take our words for it. Here’s what others have to say about us.
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
    </section>
  );
};

export default Testimonials;
