import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js for client-side navigation
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [expandedDropdown, setExpandedDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setExpandedDropdown(expandedDropdown === name ? null : name);
  };
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Set active link based on current path
  useEffect(() => {
    const currentMainLink = mainLinks.find(link => 
      link.path === pathname || link.subLinks?.some(sub => sub.path === pathname)
    );
    if (currentMainLink) {
      setActiveLink(currentMainLink.name);
    }
  }, [pathname]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
      { name: "Islam & Marriage", path: "/marriage" },
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

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 lg:px-6 py-3 lg:py-5">
          {/* Logo */}
          <div className="flex items-center space-x-2 z-50">
            <img 
              src="/logo.png" 
              alt="Sapience Logo" 
              className="h-8 sm:h-10 lg:h-12 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Hamburger Menu Button for Mobile and Tablet */}
          <button
            className="lg:hidden text-2xl p-2 z-50 hover:bg-gray-100 rounded-full transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <FaTimes className="text-violet-900 transition-transform duration-300 rotate-90" />
            ) : (
              <FaBars className="text-violet-900 transition-transform duration-300" />
            )}
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-x-4 xl:gap-x-6">
            <ul className="flex gap-x-0.5 xl:gap-x-2 text-base xl:text-lg font-light">
              {mainLinks.map((link) => (
                <li
                  key={link.name}
                  className="relative group px-1.5 xl:px-2"
                >
                  <Link
                    href={link.path}
                    className={`relative inline-block py-2 transition-all duration-300 hover:text-violet-900
                      ${activeLink === link.name ? 'text-violet-900 font-medium' : 'text-gray-700'}
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                      after:bg-violet-900 after:scale-x-0 after:origin-right after:transition-transform
                      after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left`}
                    onClick={() => handleLinkClick(link.name)}
                  >
                    <span className="whitespace-nowrap text-sm sm:text-base xl:text-lg">{link.name}</span>
                  </Link>

                  {/* Dropdown for links with sub-pages */}
                  {link.subLinks && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 
                      group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 
                      translate-y-2 min-w-fit">
                      <ul className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden whitespace-nowrap">
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.name} className="relative">
                            <Link
                              href={subLink.path}
                              className="block px-4 py-2 text-sm xl:text-base text-gray-600 hover:text-violet-900 
                              hover:bg-violet-50 transition-all duration-300"
                              onClick={() => handleLinkClick(subLink.name)}
                            >
                              {subLink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Donate Button - Desktop */}
            <button className="bg-violet-900 text-white px-4 sm:px-5 xl:px-6 py-2 xl:py-2.5 rounded-full text-sm sm:text-base
              hover:bg-violet-800 hover:shadow-lg transform hover:-translate-y-0.5 
              transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 
              focus:ring-offset-2 whitespace-nowrap">
              Donate
            </button>
          </div>
        </div>

        {/* Mobile and Tablet Menu */}
        <div
  className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-500 
    ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
>
  <div className={`h-full overflow-y-auto pt-20 pb-6 transition-transform duration-500 
    ${isMenuOpen ? 'translate-y-0' : '-translate-y-10'}`}>
    <ul className="px-6 space-y-2 max-h-[calc(100vh-120px)] overflow-y-auto">
      {mainLinks.map((link) => (
        <li key={link.name} className="border-b border-gray-100 last:border-none">
          <div className="flex justify-between items-center">
            <Link
              href={link.path}
              className={`block py-3 text-base sm:text-lg ${
                activeLink === link.name ? 'text-violet-900 font-medium' : 'text-gray-700'
              } hover:text-violet-900 transition-colors duration-300`}
              onClick={() => handleLinkClick(link.name)}
            >
              {link.name}
            </Link>
            {link.subLinks && (
              <button 
                onClick={() => toggleDropdown(link.name)}
                className="p-2 focus:outline-none"
                aria-expanded={expandedDropdown === link.name}
                aria-label={`Toggle ${link.name} submenu`}
              >
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    expandedDropdown === link.name ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
          {link.subLinks && (
            <ul className={`pl-4 pb-2 transition-all duration-300 overflow-hidden ${
              expandedDropdown === link.name ? 'max-h-96' : 'max-h-0'
            }`}>
              {link.subLinks.map((subLink) => (
                <li key={subLink.name}>
                  <Link
                    href={subLink.path}
                    className="block py-2 text-sm sm:text-base text-gray-600 hover:text-violet-900 
                      transition-colors duration-300"
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
      <li className="pt-4">
        <button className="w-full bg-violet-900 text-white py-2.5 sm:py-3 rounded-full font-medium
          hover:bg-violet-800 transition-all duration-300 focus:outline-none 
          focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 text-base">
          Donate
        </button>
      </li>
    </ul>
  </div>
</div>
      </div>
    </nav>
  );
}