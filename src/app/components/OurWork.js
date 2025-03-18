import Image from "next/image";

const workItems = [
  {
    title: "Learning Platform",
    image: "/learning-platform.jpg", // Replace with actual paths
  },
  {
    title: "Lighthouse Mentoring",
    image: "/lighthouse-mentoring.jpg",
  },
  {
    title: "Books",
    image: "/books.jpg",
  },
  {
    title: "Onsite Courses",
    image: "/onsite-courses.jpg",
  },
  {
    title: "Our Channel",
    image: "/youtube-channel.jpg",
  },
  {
    title: "The Visionaries",
    image: "/the-visionaries.jpg",
  },
];

export default function OurWork() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-semibold mb-6">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-[97%] mx-auto">
        {workItems.map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden g shadow-md border border-gray-200 transition hover:border-purple-600 hover:shadow-2xl-purple"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
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
