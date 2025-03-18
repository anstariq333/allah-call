import Link from "next/link";

export default function About() {
  return (
    <div className="w-full min-h-screen">
    {/* Header Section */}
    <div className="bg-primary text-white py-10 text-center">
      <h1 className="text-4xl font-semibold">ABOUT US</h1>
      <p className="text-lg mt-2 opacity-80">Home &gt; Our Services</p>
    </div>
    
        {/* Board of Directors Section */}
        <div className="mt-4 w-[80%]">
          <h2 className="text-xl font-semibold">BOARD OF DIRECTORS</h2>
          <ul className="mt-2 ml-4 list-disc">
            <li>
              <Link href="/about/engr-hafiz-harris" className="text-blue-500 hover:underline">
                WHO IS ENGR. HAFIZ HARRIS?
              </Link>
            </li>
            <li>
              <Link href="/about/engr-zeeshan-hassan" className="text-blue-500 hover:underline">
                WHO IS ENGR. ZEESHAN HASSAN?
              </Link>
            </li>
          </ul>
        </div>

        {/* Volunteers Section */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold">VOLUNTEERS</h2>
          <ul className="mt-2 ml-4 list-disc">
            <li>
              <Link href="/about/abuo-abdur-rahman" className="text-blue-500 hover:underline">
                WHO IS ABOU ABDUR RAHMAN YAQUB NURI AMIN?
              </Link>
            </li>
          </ul>
        </div>

        {/* Other Sections */}
        <div className="mt-4">
          <ul className="mt-2 ml-4 list-disc">
            <li>
              <Link href="/about/events" className="text-blue-500 hover:underline">
                EVENTS
              </Link>
            </li>
            <li>
              <Link href="/about/gallery" className="text-blue-500 hover:underline">
                GALLERY
              </Link>
            </li>
          </ul>
        </div>
      </div>
    
  );
}
