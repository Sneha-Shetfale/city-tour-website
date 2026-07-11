import {
  ShieldCheck,
  Clock3,
  BadgeIndianRupee,
  Car,
  Users,
  Phone,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={36} />,
    title: "Safe Journey",
    desc: "Verified drivers and well maintained vehicles.",
  },
  {
    icon: <Clock3 size={36} />,
    title: "24x7 Service",
    desc: "Available anytime for local and outstation trips.",
  },
  {
    icon: <BadgeIndianRupee size={36} />,
    title: "Affordable Price",
    desc: "Transparent pricing with no hidden charges.",
  },
  {
    icon: <Car size={36} />,
    title: "Premium Fleet",
    desc: "Dzire, Ertiga, Innova and Tempo Traveller.",
  },
  {
    icon: <Users size={36} />,
    title: "Professional Drivers",
    desc: "Experienced and courteous chauffeurs.",
  },
  {
    icon: <Phone size={36} />,
    title: "Easy Booking",
    desc: "Book instantly through WhatsApp or Call.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-12">
          Trusted Taxi Service from Shirur
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <div className="text-yellow-500 mb-5">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}