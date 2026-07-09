function Fleet() {
  const vehicles = [
    {
      name: "Swift Dzire",
      seats: "4+1 Seats",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
    },
    {
      name: "Ertiga",
      seats: "6+1 Seats",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600",
    },
    {
      name: "Toyota Innova",
      seats: "7+1 Seats",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600",
    },
    {
      name: "Innova Crysta",
      seats: "7+1 Seats",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600",
    },
    {
      name: "Tempo Traveller",
      seats: "12 / 17 Seats",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Our Fleet
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {vehicles.map((car, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold">
                  {car.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {car.seats}
                </p>

                <button className="mt-5 bg-blue-700 text-white px-5 py-2 rounded-lg">
                  Send Inquiry
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Fleet;