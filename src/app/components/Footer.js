import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import LayoutXPadding from "./LayoutXPadding";

const footerLinks = [
  {
    label: "Company",
    options: [
      { label: "About", href: "/about" },
      { label: "Courses", href: "/courses" },
      { label: "Career Counselling", href: "/career-counseling" },
      { label: "Live Session", href: "/bootcamp" },
      { label: "FAQ", href: "/#faq" },
      { label: "Terms of Services", href: "/terms-&-conditions" },
    ],
  },
  {
    label: "Contact",
    options: [
      { label: "+92 304 0496627", href: "tel:+923040496627" },
      { label: "allahcall786@gmail.com", href: "mailto:allahcall786@gmail.com" },
    ],
  },
  {
    label: "Our Platforms",
    options: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/allah_call1",
        target: "_blank",
      },
      {
        label: "Twitter",
        href: "https://www.twitter.com/Allah_call1",
        target: "_blank",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/Allah.Call1",
        target: "_blank",
      },
      {
        label: "YouTube",
        href: "https://youtube.com/@allahcall2421",
        target: "_blank",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/allah-call/",
        target: "_blank",
      },
     
    ],
  },
 
];

const HomepageFooter = ({ className }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const section = window.location.hash.replace("#", "");
      if (section) {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  

  const onSocialClick = (url) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };
  

  return (
    <LayoutXPadding>
      <footer className={`${className} bg-white pt-10 pb-6`}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Left Section */}
          <div className="space-y-4 text-center md:text-left  ">
            <h2 className="text-3xl font-bold text-primary">AllahCall Institute</h2>
            <p className="text-gray-500 text-sm font-semibold">
              For Islamic Thought and Education
            </p>
            <p className="text-gray-500 text-sm font-semibold">
             Powered by Allah Call Education PK. EIN: 86-2956026. 501(c).
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap justify-between md:justify-evenly gap-6 col-span-3">
            {footerLinks.map((section, i) => (
              <FooterColumn key={i} options={section} />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t pt-4 flex flex-col items-center md:flex-row md:justify-between text-sm text-gray-500">
          <span>&copy; {new Date().getFullYear()} AllahCall Institute. All rights reserved.</span>
          <div className="flex justify-center md:justify-end items-center space-x-4 mt-4 md:mt-0">
            <Image
              src="/instagram-icon-footer.png"
              alt="Instagram"
              className="cursor-pointer"
              width={30}
              height={30}
              onClick={() =>
                onSocialClick("https://www.instagram.com/allah_call1")
              }
            />
            <Image
              src="/twitter-icon-footer.png"
              alt="Twitter"
              className="cursor-pointer"
              width={30}
              height={30}
              onClick={() =>
                onSocialClick("https://www.twitter.com/Allah_call1")
              }
            />
            <Image
              src="/linkedin-icon-footer.png"
              alt="LinkedIn"
              className="cursor-pointer"
              width={30}
              height={30}
              onClick={() =>
                onSocialClick("https://www.linkedin.com/company/allah-call/")
              }
            />
            <Image
              src="/facebook-icon-footer.png"
              alt="Facebook"
              className="cursor-pointer"
              width={30}
              height={30}
              onClick={() =>
                onSocialClick("https://www.facebook.com/Allah.Call1")
              }
            />
          
          </div>
        </div>
      </footer>
    </LayoutXPadding>
  );
};

export default HomepageFooter;

const FooterColumn = ({
  className,
  options = { label: "Company", options: [{ label: "about", href: "/" }] },
}) => {
  return (
    <div className={`${className} row`}>
      <h3 className="mb-2 text-xl font-bold text-[#170D23]">
        {options.label}
      </h3>
      <ul className="space-y-4 text-sm font-light text-[#4A525D]">
        {options?.options.map((option, index) => (
          <li key={index}>
            {option?.href ? (
              <Link
                href={option?.href}
                target={option?.target ? "_blank" : "_self"}
                rel={option?.target ? "noopener noreferrer" : undefined}
                className="flex items-center justify-start gap-2 text-nowrap capitalize hover:text-primary"
              >
                {option?.label}
                <Image
                  alt="external link icon"
                  height={16}
                  width={16}
                  src="/arrow-down-left.png"
                  className="inline-block"
                />
              </Link>
            ) : (
              option.label
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};