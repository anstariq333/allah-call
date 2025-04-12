import Image from "next/image";

const workItems = [
  {
    title: "Learning Platform",
    image: "/learning.png",
  },
  {
    title: "Books",
    image: "/hero.png",
  },
  {
    title: "Our Channel",
    image: "/mosque.png",
  },
 
];

export default function OurWork() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-5xl font-bold mb-16 text-[#6B2FB3] ">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-[97%] mx-auto">
        {workItems.map((item, index) => (
          <div
            key={index}
            className="relative h-[30rem] rounded-lg overflow-hidden g shadow-md border border-gray-200 transition hover:border-purple-600 hover:shadow-2xl-purple"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-full object-cover hover:scale-110 cursor-pointer"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-lg font-semibold py-3">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
