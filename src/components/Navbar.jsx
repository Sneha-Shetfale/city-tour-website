import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-blue-700">
            City Tour
          </h1>
          <p className="text-xs text-gray-500">
            Shirur, Pune
          </p>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-700 cursor-pointer">Home</li>
          <li className="hover:text-blue-700 cursor-pointer">Services</li>
          <li className="hover:text-blue-700 cursor-pointer">Fleet</li>
          <li className="hover:text-blue-700 cursor-pointer">Gallery</li>
          <li className="hover:text-blue-700 cursor-pointer">Contact</li>
        </ul>

        {/* Call Button */}
        <a
          href="tel:+919619183923"
          className="hidden md:flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
        >
          <FaPhoneAlt />
          Call Now
        </a>

      </div>
    </nav>
  );
}

export default Navbar;