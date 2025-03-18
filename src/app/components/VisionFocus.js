import { IoIosGlobe } from "react-icons/io";
import { IoMdGlobe } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { TbTargetArrow } from "react-icons/tb";

export default function VisionFocus() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Vision Section */}
      <div className="flex items-center  p-6 rounded-lg shadow-md border border-gray-200 transition hover:border-purple-600 hover:shadow-2xl-purple">
      <CiGlobe className="text-primary w-[100px] h-[100px]" />
      
        <div>
          <h3 className=" ml-3  text-xl font-semibold text-gray-700">Our Vision</h3>
          <p className="text-gray-600 ml-3 ">A world convinced of Islam.</p>
        </div>
      </div>
      
      {/* Focus Section */}
      <div className="flex items-center  rounded-lg shadow-md border border-gray-200 px-6 transition hover:border-purple-600 hover:shadow-2xl-purple">
      < TbTargetArrow className="text-primary w-[170px] h-[170px]" />
        <div>
          <h3 className="text-xl ml-3 font-semibold text-gray-700">Our Focus</h3>
          <p className="text-gray-600 ml-3">
            Developing, supporting and empowering individuals and organisations to intellectually share and defend Islam.
          </p>
        </div>
      </div>
    </div>
  );
}
