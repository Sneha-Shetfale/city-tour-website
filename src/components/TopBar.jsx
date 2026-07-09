import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-blue-900 text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

        <div className="flex gap-6">

          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+91 96191 83923</span>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Shirur, Pune</span>
          </div>

        </div>

        <div className="flex items-center gap-2">
          <FaClock />
          <span>24 × 7 Service</span>
        </div>

      </div>
    </div>
  );
}

export default TopBar;