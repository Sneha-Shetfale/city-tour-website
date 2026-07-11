import dzire from "../../assets/images/dzire-front.jpg";
import ertiga from "../../assets/images/ertiga.jpeg";
import innova from "../../assets/images/innova.jpeg";

import {
  Users,
  Fuel,
  Snowflake,
  Briefcase,
} from "lucide-react";

const fleet = [
  {
    name: "Toyota Innova Crysta",
    image: innova,
    seats: "7+1",
    fuel: "Diesel",
    luggage: "Spacious",
    description:
      "Most popular choice for family trips and outstation journeys.",
  },
  {
    name: "Maruti Ertiga",
    image: ertiga,
    seats: "6+1",
    fuel: "Petrol",
    luggage: "Comfortable",
    description:
      "Perfect for small groups and family travel with extra luggage.",
  },
  {
    name: "Maruti Swift Dzire",
    image: dzire,
    seats: "4+1",
    fuel: "Petrol",
    luggage: "Comfortable",
    description:
      "Ideal for couples, airport transfers and city rides.",
  },
];

export default function Fleet() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
            🚖 OUR FLEET
          </span>

          <h2 className="text-5xl font-bold text-blue-900 mt-5">
            Our Premium Fleet
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Clean, comfortable and professionally maintained taxis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {fleet.map((car, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 duration-300"
            >

              <div className="relative">

                <img
                  src={car.image}
                  alt={car.name}
                  className="h-72 w-full object-cover"
                />

                <span className="absolute top-4 left-4 bg-blue-900 text-white px-4 py-2 rounded-xl font-semibold">
                  <Users size={16} className="inline mr-2" />
                  {car.seats}
                </span>

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-center text-blue-900">
                  {car.name}
                </h3>

                <div className="w-16 h-1 bg-yellow-400 mx-auto my-4 rounded"></div>

                <div className="flex justify-between text-gray-700 mb-5">

                  <span>
                    <Fuel size={18} className="inline mr-2" />
                    {car.fuel}
                  </span>

                  <span>
                    <Snowflake size={18} className="inline mr-2" />
                    AC
                  </span>

                  <span>
                    <Briefcase size={18} className="inline mr-2" />
                    {car.luggage}
                  </span>

                </div>

                <p className="text-gray-600 text-center">
                  {car.description}
                </p>

                <a
                  href="https://wa.me/919518935075"
                  target="_blank"
                  className="block text-center mt-7 bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold"
                >
                  Book Now on WhatsApp
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}