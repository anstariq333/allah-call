import ImageCssBg from "./ImageCssBg";
const reviews = [
  {
    name: "Hafiz Muhammed Haris",
    role: "Senior Scholar",
    experience: [
      "15+ Years of Islamic teaching experience",
      "Specializes in Quranic studies and Hadith sciences",
    ],
  },
  {
    name: "Ustadh Ahmad Hassan",
    role: "Dawah Coordinator",
    experience: [
      "10+ Years in Islamic outreach programs",
      "Expert in comparative religion and interfaith dialogue",
    ],
  },
  {
    name: "Dr. Fatima Zahra",
    role: "Islamic Educator",
    experience: [
      "12+ Years in Islamic education",
      "Focus on women's Islamic studies and family counseling",
    ],
  },
];

export const markups = reviews.map((review, i) => {
  const experienceList = review.experience
    .map((exp) => `<li>${exp}</li>`)
    .join("");
  return `<div style={{backgroundColor: "red"}} className="test-card bg-[rgba(255, 255, 255, 0.5)] w-max max-w-[400px] space-y-4 rounded-[1.25rem] p-4 shadow-[inset_0_0_0_2px_#F6EBEB] backdrop-blur-[7px]">
      <div className="person flex items-center justify-start gap-2">
        <div className="icon-wrapper relative size-12 rounded-full bg-[#F5F5F5]">
          <ImageCssBg src="/review_avatar.svg" alt="review avatar image" />
        </div>
        <div className="person-info">
          <h3 className="font-medium text-[#170D23]"> ${review.name} </h3>
          <p className="text-[#4A525D]">${review.role} </p>
        </div>
      </div>
      <ul className="text-xs font-medium text-[#000F27]">
      ${experienceList}
      </ul>
    </div>`;
});

export const globeInstructorCardMarkup = `<div style={{backgroundColor: "red"}} className="test-card bg-[rgba(255, 255, 255, 0.5)] w-max max-w-[400px] space-y-4 rounded-[1.25rem] p-4 shadow-[inset_0_0_0_2px_#F6EBEB] backdrop-blur-[7px]">
      <div className="person flex items-center justify-start gap-2">
        <div className="icon-wrapper relative size-12 rounded-full bg-[#F5F5F5]">
          <ImageCssBg src="/review_avatar.svg" alt="review avatar image" />
        </div>
        <div className="person-info">
          <h3 className="font-medium text-[#170D23]">Hafiz Haris</h3>
          <p className="text-[#4A525D]">Mentor</p>
        </div>
      </div>
      <ul className="text-xs font-medium text-[#000F27]">
        <li>10+ Years of average mentor experience.</li>
        <li>Access to live Q&A, workshops, and 1-on-1 sessions.</li>
      </ul>
    </div>`;

// Above code is for 3d object html marker prop
function GlobeInstructorCard() {
  return (
    <div className="test-card bg-[rgba(255, 255, 255, 0.5)] w-max max-w-[400px] space-y-4 rounded-[1.25rem] p-4 shadow-[inset_0_0_0_2px_#F6EBEB] backdrop-blur-[7px]">
      <div className="person flex items-center justify-start gap-2">
        <div className="icon-wrapper relative size-12 rounded-full bg-[#F5F5F5]">
          <ImageCssBg src="/review_avatar.svg" alt="review avatar image" />
        </div>
        <div className="person-info">
          <h3 className="font-medium text-[#170D23]">Hafiz Haris</h3>
          <p className="text-[#4A525D]">Mentor</p>
        </div>
      </div>
      <ul className="text-xs font-medium text-[#000F27]">
      <li> 10+ Years of Islamic dawah experience.</li>
      <li>Access to live guidance, workshops, and 1-on-1 sessions.</li>
      </ul>
    </div>
  );
}

export default GlobeInstructorCard;