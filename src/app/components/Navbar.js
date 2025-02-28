import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-12 border-b">
     
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Sapience Logo" className="h-10" />
        
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-10 text-lg font-light">
        <li className="hover:text-violet-900 text-xl cursor-pointer">Home</li>
        <li className="hover:text-violet-900  text-xl  cursor-pointer">About</li>
        <li className="hover:text-violet-900 text-xl cursor-pointer">Read</li>
        <li className="hover:text-violet-900 text-xl cursor-pointer">Watch</li>
        <li className="hover:text-violet-900 text-xl cursor-pointer">Listen</li>
        <li className="hover:text-violet-900 text-xl cursor-pointer">Listen</li>
       
      
      </ul>

      {/* Donate Button */}
      <button className="bg-violet-800 text-white px-5 py-2 rounded-md hover:bg-violet-950">
        Donate
      </button>
    </nav>
  );
}
