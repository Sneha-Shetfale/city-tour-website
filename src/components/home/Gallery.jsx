import innova from "../../assets/images/innova.jpeg";
import ertiga from "../../assets/images/ertiga.jpeg";
import dzireFront from "../../assets/images/dzire-front.jpeg";

const images = [
  {
    image: innova,
    title: "Toyota Innova Crysta",
  },
  {
    image: ertiga,
    title: "Maruti Ertiga",
  },
  {
    image: dzireFront,
    title: "Maruti Swift Dzire",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="bg-blue-100 text-blue-900 px-5 py-2 rounded-full font-semibold">
            GALLERY
          </span>

          <h2 className="text-5xl font-bold text-blue-900 mt-5">
            Our Vehicle Gallery
          </h2>

          <p className="text-gray-600 mt-4">
            Clean, comfortable and well-maintained vehicles ready for your next journey.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((item, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-xl group"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 duration-500"
              />

              <div className="bg-white p-5">

                <h3 className="text-xl font-bold text-center text-blue-900">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}