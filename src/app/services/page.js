import React from "react";

const Services = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Header Section */}
      <div className="bg-primary text-white py-10 text-center">
        <h1 className="text-4xl font-semibold">Our Services</h1>
        <p className="text-lg mt-2 opacity-80">Home &gt; Our Services</p>
      </div>
      
      {/* Content Section */}
      <div className="w-[90%] mx-auto mt-10 px-6">
        <p className="text-lg leading-relaxed">
          To achieve our vision we focus on developing, empowering, and supporting individuals and organizations to intellectually share and defend Islam. Our services are free, and our speakers and instructors offer a range of services. These include:
        </p>
        <ul className="list-disc mt-4 ml-6 text-lg space-y-2">
          <li>University lectures and talks</li>
          <li>Participating in debates and discussions</li>
          <li>University lectures and talks</li>
          <li>Participating in debates and discussions</li>
          <li>University lectures and talks</li>
          <li>Participating in debates and discussions</li>
          <li>University lectures and talks</li>
          <li>Participating in debates and discussions</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
