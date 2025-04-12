import Image from "next/image";
import { useState } from "react";
import LayoutXPadding from "./LayoutXPadding";

const LandingFAQs = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const [secondDropDownState, setSecondDropDownState] = useState(false);
  const [thirdDropDownState, setThirdDropDownState] = useState(false);
  const [fourthDropDownState, setFourthDropDownState] = useState(false);
  const [fifthDropDownState, setFifthDropDownState] = useState(false);
  const [sixthDropDownState, setSixthDropDownState] = useState(false);

  const toggleDropDown = () => {
    setDropDownState(!dropDownState);
  };

  const toggleSecondDropDown = () => {
    setSecondDropDownState(!secondDropDownState);
  };

  const toggleThirdDropDown = () => {
    setThirdDropDownState(!thirdDropDownState);
  };

  const toggleFourthDropDown = () => {
    setFourthDropDownState(!fourthDropDownState);
  };

  const toggleFifthDropDown = () => {
    setFifthDropDownState(!fifthDropDownState);
  };

  const toggleSixthDropDown = () => {
    setSixthDropDownState(!sixthDropDownState);
  };

  return (
    <LayoutXPadding>
      <div
        id="faq"
        className="mx-auto flex h-auto w-[90%] flex-col items-center justify-center rounded-2xl "
      >
        <div className="mb-[2rem] mt-2 flex h-[100%] w-[100%] flex-col items-center justify-center">
          <div className="flex h-[20%] w-[90%] flex-col items-center justify-center">
            <h2 className="font-sans text-5xl sm:text-5xl text-[#6B2FB3] font-bold">
              FAQs
            </h2>
            <p className="text-smallText mt-3 text-xs sm:text-sm">
              Everything you need to know about learning Islam with AllahCall.
            </p>
          </div>

          <div className="mt-[1rem] w-[70%] max-md:w-[90%]">
            <ul className="w-[100%]">
              <li
                onClick={toggleDropDown}
                className="border-darkPurple flex flex-col border-b-[1px] py-4 relative"
              >
                <div className="flex justify-between">
                  <span
                    onClick={() => setDropDownState(!dropDownState)}
                    className="cursor-pointer font-sans font-semibold tracking-wide text-sm sm:text-base"
                  >
                    What is AllahCall's dawah mission?
                  </span>
                  <Image
                    src={dropDownState ? "/dropup.png" : "/drop-down.png"}
                    width={30}
                    height={30}
                    alt="Toggle Dropdown"
                    className="cursor-pointer"
                  />
                </div>
                {dropDownState && (
                  <p className="text-smallText mt-3 cursor-pointer text-sm">
                    AllahCall is a platform dedicated to sharing the beautiful message of Islam through authentic knowledge and understanding. We provide resources, guidance, and support for both Muslims and those interested in learning about Islam.
                  </p>
                )}
                 {dropDownState && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-700 to-transparent" />
                )}
              </li>

              <li
                onClick={toggleSecondDropDown}
                className="border-darkPurple flex flex-col border-b-[1px] py-4 relative"
              >
                <div className="flex justify-between">
                  <span className="cursor-pointer font-sans font-semibold tracking-wide text-sm sm:text-base">
                    How can I learn about Islam?
                  </span>
                  <Image
                    src={secondDropDownState ? "/dropup.png" : "/drop-down.png"}
                    width={30}
                    height={30}
                    alt="Toggle Dropdown"
                    className="cursor-pointer"
                  />
                </div>
                {secondDropDownState && (
                  <p className="text-smallText mt-3 cursor-pointer text-sm">
                    You can start by exploring our free resources, joining our online classes, or scheduling a one-on-one session with our qualified scholars. We offer various learning paths tailored to your level of understanding.
                  </p>
                )}
                 {secondDropDownState && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-700 to-transparent" />
                )}
              </li>

              <li
                onClick={toggleThirdDropDown}
                className="border-darkPurple flex flex-col border-b-[1px] py-4 relative"
              >
                <div className="flex justify-between">
                  <span className="cursor-pointer font-sans font-semibold tracking-wide text-sm sm:text-base">
                    Are your teachings authentic?
                  </span>
                  <Image
                    src={thirdDropDownState ? "/dropup.png" : "/drop-down.png"}
                    width={30}
                    height={30}
                    alt="Toggle Dropdown"
                    className="cursor-pointer"
                  />
                </div>
                {thirdDropDownState && (
                  <p className="text-smallText mt-3 cursor-pointer text-sm">
                    Yes! All our content is based on authentic sources from the Quran and Sunnah, verified by qualified scholars. We ensure that all information provided is accurate and properly referenced.
                  </p>
                )}
                {thirdDropDownState && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-700 to-transparent" />
                )}
              </li>

              <li
                onClick={toggleFourthDropDown}
                className="border-darkPurple flex flex-col border-b-[1px] py-4 relative"
              >
                <div className="flex justify-between">
                  <span
                    onClick={() => setDropDownState(!fourthDropDownState)}
                    className="cursor-pointer font-sans font-semibold tracking-wide text-sm sm:text-base"
                  >
                    Can I ask questions about Islam?
                  </span>
                  <Image
                    src={fourthDropDownState ? "/dropup.png" : "/drop-down.png"}
                    width={30}
                    height={30}
                    alt="Toggle Dropdown"
                    className="cursor-pointer"
                  />
                </div>
                {fourthDropDownState && (
                  <p className="text-smallText mt-3 cursor-pointer text-sm">
                    Absolutely! We encourage questions and open dialogue. You can ask questions during live sessions, through our community forum, or schedule a private consultation with our scholars.
                  </p>
                )}
                 {fourthDropDownState && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-700 to-transparent" />
                )}
              </li>

              <li
                onClick={toggleFifthDropDown}
                className="border-darkPurple md:flex flex-col border-b-[1px] py-4 hidden relative"
              >
                <div className="flex justify-between">
                  <span className="cursor-pointer font-sans font-semibold tracking-wide text-sm sm:text-base">
                    Do you offer support for new Muslims?
                  </span>
                  <Image
                    src={fifthDropDownState ? "/dropup.png" : "/drop-down.png"}
                    width={30}
                    height={30}
                    alt="Toggle Dropdown"
                    className="cursor-pointer"
                  />
                </div>
                {fifthDropDownState && (
                  <p className="text-smallText mt-3 cursor-pointer text-sm">
                    Yes! We provide special support and guidance for new Muslims, including beginner courses, mentorship programs, and a welcoming community to help you on your journey.
                  </p>
                )}
                 {fifthDropDownState && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-700 to-transparent" />
                )}
              </li>

              <li
                onClick={toggleSixthDropDown}
                className="border-darkPurple md:flex flex-col border-b-[1px] py-4 hidden relative"
              >
                <div className="flex justify-between">
                  <span className="cursor-pointer font-sans font-semibold tracking-wide text-sm sm:text-base">
                    How can I support the dawah work?
                  </span>
                  <Image
                    src={sixthDropDownState ? "/dropup.png" : "/drop-down.png"}
                    width={30}
                    height={30}
                    alt="Toggle Dropdown"
                    className="cursor-pointer"
                  />
                </div>
                {sixthDropDownState && (
                  <p className="text-smallText mt-3 cursor-pointer text-sm">
                    You can support our dawah work by sharing our content, volunteering, donating to our projects, or participating in our community events. Every contribution helps spread the message of Islam.
                  </p>
                )}
                {sixthDropDownState && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-700 to-transparent" />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LayoutXPadding>
  );
};

export default LandingFAQs;