function PopularRoutes() {
  const routes = [
    "Shirur → Pune",
    "Shirur → Mumbai",
    "Shirur → Shirdi",
    "Shirur → Nashik",
    "Shirur → Lonavala",
    "Shirur → Mahabaleshwar",
    "Shirur → Kolhapur",
    "Shirur → Aurangabad",
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Popular Routes
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {routes.map((route, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold">
                {route}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularRoutes;