const testimonials = [
  {
    name: "Rahul Patil",
    review:
      "Excellent service! The driver was punctual and the Innova was very clean. Highly recommended.",
  },
  {
    name: "Priya Deshmukh",
    review:
      "Booked an airport pickup. Very professional service and affordable pricing.",
  },
  {
    name: "Amit Jadhav",
    review:
      "We booked City Tours for a family trip to Mahabaleshwar. The journey was comfortable and enjoyable.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-900 px-5 py-2 rounded-full font-semibold mb-4">
            TESTIMONIALS
          </span>

          <h2 className="text-5xl font-bold text-blue-900">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-4">
            Trusted by travelers across Maharashtra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 leading-7">
                "{item.review}"
              </p>

              <h3 className="mt-6 font-bold text-blue-900">
                {item.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}