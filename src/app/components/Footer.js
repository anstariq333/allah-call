export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 ">
      <div className="max-w-[100%]  grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left py-20">
        {/* Left Section */}
        <div className="space-y-8" >     
          <h2 className="text-2xl font-semibold text-white">Sapience Institute</h2>
          <p className="text-base mt-2">for Islamic Thought and Education</p>
          <p className="text-lg mt-2">Powered by Allah Call Education PK. EIN: 86-2956026. 501(c)3. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 text-lg hover:underline">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-blue-400 text-lg hover:underline">Terms of Service</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-blue-400 text-lg hover:underline">Support</a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="space-y-8" >
          <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
          <p className="text-base mt-2 ">Have any questions?</p>
          <p className=""></p>
          <a href="mailto:info@sapienceinstitute.org" className="text-blue-400 text-lg hover:underline ">
            info@allahcall.org
          </a>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl  mb-5 font-semibold text-white">Search this site</h2>
          <input
            type="text"
            placeholder="Enter your search"
            className="mt-2 w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; 2025 Allah Call (Allah Call Education PK). All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}