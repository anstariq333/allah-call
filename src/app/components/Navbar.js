import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js for client-side navigation

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about", subLinks: [
      { name: "Board of Directors", path: "/board-of-directors" },
      { name: "Volunteers", path: "/volunteers" },
      { name: "Events", path: "/events" },
      { name: "Gallery", path: "/gallery" },
    ] },
    { name: "Islam", path: "/islam", subLinks: [
      { name: "Quran & Sunnah", path: "/quran-sunnah" },
      { name: "Dawah", path: "/dawah" },
      { name: "Islam & Marriage", path: "/islam-marriage" },
    ] },
    { name: "Religions", path: "/religions", subLinks: [
      { name: "Christianity", path: "/christianity" },
      { name: "Judaism", path: "/judaism" },
      { name: "Hinduism", path: "/hinduism" },
      { name: "Buddhism", path: "/buddhism" },
      { name: "Sikhism", path: "/sikhism" },
    ] },
    { name: "New Muslims", path: "/new-muslims", subLinks: [
      { name: "Accept Islam Now", path: "/accept-islam-now" },
      { name: "Shahada", path: "/shahada" },
      { name: "New Muslim Guidelines", path: "/new-muslim-guidelines" },
      { name: "Testimonies of New Muslims", path: "/testimonies-of-new-muslims" },
    ] },
    { name: "Programs", path: "/programs", subLinks: [
      { name: "Companionship", path: "/companionship" },
      { name: "Courses", path: "/courses" },
    ] },
    { name: "Our Services", path: "/our-services", subLinks: [
      { name: "Articles & Books", path: "/articles-books" },
      { name: "Muslim Revival", path: "/muslim-revival" },
      { name: "Rejoining of Muslim Ummah", path: "/rejoining-muslim-ummah" },
      { name: "Publish Your Work", path: "/publish-your-work" },
    ] },
    { name: "Our Work", path: "/our-work" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-12 border-b">
      {/* Logo */}
      <div className="flex items-center relative bottom-8 space-x-2">
        <img src="/logo.png" alt="Sapience Logo" className="h-12" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-lg relative top-4 font-light">
        {mainLinks.map((link) => (
          <li
            key={link.name}
            className="relative group" // Add 'group' class for CSS hover
          >
            <Link
              href={link.path}
              className={`hover:text-violet-900 text-xl cursor-pointer ${
                activeLink === link.name ? "text-violet-900 font-semibold" : ""
              }`}
              onClick={() => handleLinkClick(link.name)}
            >
              {link.name}
            </Link>

            {/* Dropdown for links with sub-pages */}
            {link.subLinks && (
              <ul
                className="absolute bg-white border rounded-lg shadow-lg mt-2 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                style={{ minWidth: "200px" }}
              >
                {link.subLinks.map((subLink) => (
                  <li key={subLink.name}>
                    <Link
                      href={subLink.path}
                      className="block px-4 py-2 hover:bg-violet-50 cursor-pointer"
                      onClick={() => handleLinkClick(subLink.name)}
                    >
                      {subLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Donate Button */}
      <button className="bg-violet-800 text-white px-5 relative top-4 py-2 rounded-md hover:bg-violet-950">
        Donate
      </button>
    </nav>
  );
}