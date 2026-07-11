const services = [
  {
    title: "Airport Pickup & Drop",
    icon: "✈️",
    description:
      "24×7 Pune Airport pickup and drop service with comfortable vehicles.",
  },
  {
    title: "Outstation Trips",
    icon: "🚗",
    description:
      "Safe and comfortable outstation trips across Maharashtra and nearby states.",
  },
  {
    title: "Maharashtra Tour Packages",
    icon: "🏔️",
    description:
      "Customized tour packages for Shirdi, Mahabaleshwar, Lonavala, Goa and more.",
  },
  {
    title: "Family Tours",
    icon: "👨‍👩‍👧‍👦",
    description:
      "Comfortable family travel with spacious and clean vehicles.",
  },
  {
    title: "Corporate Travel",
    icon: "💼",
    description:
      "Reliable transportation for office meetings and corporate travel.",
  },
  {
    title: "Wedding Car Rental",
    icon: "💍",
    description:
      "Premium cars available for weddings and special occasions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="inline-block bg-blue-100 text-blue-900 px-5 py-2 rounded-full font-semibold mb-4">
            OUR SERVICES
          </span>

          <h2 className="text-5xl font-bold text-blue-900">
            Travel Services We Provide
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Safe, reliable and affordable travel solutions for every journey.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="text-6xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}