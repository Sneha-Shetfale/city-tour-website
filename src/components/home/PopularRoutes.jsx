const routes = [
  {
    from: "Shikrapur",
    to: "Pune Airport",
    image:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&auto=format&fit=crop",
  },
  {
    from: "Shikrapur",
    to: "Shirdi",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&auto=format&fit=crop",
  },
  {
    from: "Shikrapur",
    to: "Lonavala",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
  },
  {
    from: "Shikrapur",
    to: "Mahabaleshwar",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop",
  },
];

export default function PopularRoutes() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">
            POPULAR ROUTES
          </span>

          <h2 className="text-4xl font-bold mt-5 text-blue-900">
            Most Booked Destinations
          </h2>

          <p className="text-gray-600 mt-3">
            Comfortable travel from Shikrapur to your favorite destinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {routes.map((route, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={route.image}
                alt={route.to}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-blue-900">
                  {route.to}
                </h3>

                <p className="text-gray-600 mt-2">
                  From {route.from}
                </p>

                <a
                  href="https://wa.me/919619183923"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-5 bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}