import ImageCssBg from "./ImageCssBg";
import CustomGlobe from "./InstructorGlobe";
import LayoutXPadding from "./LayoutXPadding";

function LearningSection() {
  return (
    <>
     <LayoutXPadding>
        <div>
          <div className="content text-center mt-12">
            <div className="mx-auto mb-1.5 w-max rounded-[3.25rem] border border-[#4000FF] bg-white px-4 py-1 text-xs font-medium text-[#4000FF]">
              Strengthen your faith
            </div>
            <h2 className="mx-auto mb-5 max-w-3xl font-satoshi text-4xl font-semibold text-[#6B2FB3]">
              Join our growing community of believers
            </h2>
            <p className="mx-auto max-w-3xl text-lg font-medium text-[#5F646B]">
              Learn authentic Islamic knowledge, share wisdom with fellow Muslims, 
              and grow spiritually through our online Islamic education platform.
            </p>
          </div>
        </div>
      </LayoutXPadding>
      {/* Globe */}
      <div className="!mb-10 mt-12">
        <CustomGlobe />
      </div>
    </>
  );
}

export default LearningSection;
