import {
  Users,
  Fuel,
  Snowflake,
  Briefcase,
  ShieldCheck,
  Clock3,
  BadgeIndianRupee,
} from "lucide-react";

import innova from "../../assets/images/innova.jpeg";
import ertiga from "../../assets/images/ertiga.jpeg";
import dzire from "../../assets/images/dzire-front.jpeg";

const fleet = [
  {
    name: "Toyota Innova Crysta",
    seats: "7+1",
    fuel: "Diesel",
    feature: "Spacious",
    image: innova,
    desc: "Perfect for family tours, airport transfers and outstation trips.",
  },
  {
    name: "Maruti Ertiga",
    seats: "6+1",
    fuel: "Diesel",
    feature: "Comfortable",
    image: ertiga,
    desc: "Comfortable family vehicle with extra luggage space.",
  },
  {
    name: "Maruti Swift Dzire",
    seats: "4+1",
    fuel: "Diesel",
    feature: "Comfortable",
    image: dzire,
    desc: "Best for local travel, airport pickup and business trips.",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block bg-blue-100 text-blue-800 px-5 py-2 rounded-full font-semibold">
            🚖 OUR FLEET
          </span>

          <h2 className="text-5xl font-bold mt-6 text-blue-900">
            Our Premium Fleet
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Clean, comfortable and well-maintained vehicles for every journey.
          </p>

        </div>

        {/* Fleet Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

          {fleet.map((car, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 duration-300"
            >

              <div className="relative">

                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-80 object-cover"
                />

                <div className="absolute top-5 left-5 bg-blue-900 text-white px-4 py-2 rounded-xl font-semibold shadow-lg">

                  <Users size={18} className="inline mr-2" />

                  {car.seats} Seats

                </div>

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-blue-900 text-center">
                  {car.name}
                </h3>

                <div className="w-20 h-1 bg-yellow-400 mx-auto my-5 rounded"></div>

                <div className="flex justify-between text-gray-700 text-sm">

                  <span className="flex items-center gap-2">
                    <Fuel size={16} />
                    {car.fuel}
                  </span>

                  <span className="flex items-center gap-2">
                    <Snowflake size={16} />
                    AC
                  </span>

                  <span className="flex items-center gap-2">
                    <Briefcase size={16} />
                    {car.feature}
                  </span>

                </div>

                <p className="text-center text-gray-600 mt-6">
                  {car.desc}
                </p>

                <a
                  href="https://wa.me/919619183923"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center mt-8 bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition"
                >
                  📱 Book Now on WhatsApp
                </a>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Features */}

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          <div className="text-center bg-white p-6 rounded-2xl shadow">
            <ShieldCheck className="mx-auto text-blue-900 mb-3" size={40} />
            <h4 className="font-bold">Well Maintained</h4>
            <p className="text-gray-600 text-sm mt-2">
              Regularly serviced vehicles.
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-2xl shadow">
            <Clock3 className="mx-auto text-blue-900 mb-3" size={40} />
            <h4 className="font-bold">24×7 Service</h4>
            <p className="text-gray-600 text-sm mt-2">
              Available anytime for bookings.
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-2xl shadow">
            <Users className="mx-auto text-blue-900 mb-3" size={40} />
            <h4 className="font-bold">Expert Drivers</h4>
            <p className="text-gray-600 text-sm mt-2">
              Experienced and professional drivers.
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-2xl shadow">
            <BadgeIndianRupee
              className="mx-auto text-blue-900 mb-3"
              size={40}
            />
            <h4 className="font-bold">Best Prices</h4>
            <p className="text-gray-600 text-sm mt-2">
              Affordable rates with no hidden charges.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}