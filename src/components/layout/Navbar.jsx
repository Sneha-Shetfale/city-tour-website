import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "Services",
    "Fleet",
    "Gallery",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-extrabold">
  <span className="text-gray-900">City</span>{" "}
  <span className="text-yellow-500">Tours</span>
</h1>

          <p className="text-sm text-gray-500">
            The Prime Rental Cab Service
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          {navLinks.map((item) => (
            <a
              key={item}
              href={"#" + item.toLowerCase()}
              className="hover:text-blue-700 duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Button */}
        <div className="hidden md:block">
          <a
            href="tel:9619183923"
            className="bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2"
          >
            <Phone size={18} />
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6">

          <div className="flex flex-col gap-5">

            {navLinks.map((item) => (
              <a
                key={item}
                href={"#" + item.toLowerCase()}
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}

            <a
              href="tel:9619183923"
              className="bg-blue-700 text-white text-center py-3 rounded-full"
            >
              Call Now
            </a>

          </div>

        </div>
      )}
    </header>
  );
}