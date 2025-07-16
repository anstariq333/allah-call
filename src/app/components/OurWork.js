import Image from "next/image";
import Link from "next/link";

const workItems = [
  {
    title: "SHAHADA",
    image: "https://images.unsplash.com/photo-1627818653012-054f17eb0648?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "COURSES",
    image: "https://images.unsplash.com/photo-1589366786784-20a72800cebb?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "PUBLISH",
    image: "/there-is-god.png",
  },
 
];

export default function OurWork() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-5xl font-bold mb-16 text-[#6B2FB3] ">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-[97%] mx-auto">
        {workItems.map((item, index) => {
          // Determine the link based on the title
          let href = "/";
          if (item.title === "SHAHADA") href = "/shahada";
          else if (item.title === "COURSES") href = "/courses";
          else if (item.title === "PUBLISH") href = "/articles-books";
          return (
            <Link href={href} key={index} className="block">
              <div
                className="relative h-[25rem] rounded-lg overflow-hidden g shadow-md border border-gray-200 transition hover:border-purple-600 hover:shadow-2xl-purple"
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
            </Link>
          );
        })}
      </div>
    </section>
  );
}
