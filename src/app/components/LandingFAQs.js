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
            <h2 className="font-sans text-5xl sm:text-5xl font-bold">
                   FAQs
            </h2>
            <p className="text-smallText mt-3 text-xs sm:text-sm">
              Everything you need to know about AllahCall.
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
                    className="cursor-pointer font-sans font-semibold tracking-wide text-sm  sm:text-base"
                  >
                    What is AllahCall?
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
                    AllahCall is an online learning platform that offers
                    thousands of courses in various fields, including
                    technology, business, design, and personal development. Our
                    mission is to make quality education accessible to everyone.
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
                  <span className="cursor-pointer font-sans font-semibold tracking-wide text-sm  sm:text-base">
                    How do I enroll in a course?
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
                    To enroll in a course, simply browse our catalog, select a
                    course, and click the "Enroll" button. You can start
                    learning immediately after purchasing.
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
                  <span className="cursor-pointer font-sans font-semibold tracking-wide text-sm  sm:text-base">
                    Do I get lifetime access to courses?
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
                    Yes! Once you purchase a course, you get lifetime access,
                    allowing you to learn at your own pace without any time
                    restrictions.
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
                    className="cursor-pointer font-sans font-semibold tracking-wide text-sm  sm:text-base"
                  >
                    Can I get a refund if I’m not satisfied?
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
                    Absolutely! We offer a 30-day money-back guarantee if you're
                    not satisfied with your purchase. Just contact our support
                    team for assistance.
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
                    Can I access courses on mobile devices?
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
                    Yes! You can access all AllahCall courses on your
                    desktop, tablet, or mobile device. We also have a mobile app
                    for learning on the go.
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
                    Will I receive a certificate after completing a course?
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
                    Yes! Upon completing a course, you will receive a
                    certificate of completion, which you can share on LinkedIn,
                    add to your resume, or showcase in your portfolio.
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