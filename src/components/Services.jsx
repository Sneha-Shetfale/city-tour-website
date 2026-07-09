import services from "../data/services";

function Services() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mt-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;