import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-900 px-5 py-2 rounded-full font-semibold mb-4">
            CONTACT US
          </span>

          <h2 className="text-5xl font-bold text-blue-900">
            Get In Touch
          </h2>

          <p className="text-gray-600 mt-4">
            Book your ride today. We are available 24×7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <div className="space-y-6">

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow">

              <Phone className="text-blue-900" size={32} />

              <div>
                <h3 className="font-bold text-xl">Call Us</h3>
                <p>+919619183923</p>
                <p>+919637063232</p>
              </div>

            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow">

              <Mail className="text-blue-900" size={32} />

              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p>city.ventures23@gmail.com</p>
              </div>

            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow">

              <MapPin className="text-blue-900" size={32} />

              <div>
                <h3 className="font-bold text-xl">Address</h3>

                <p>
                  B/704, Abhilasha Co-op Housing Society,
                  Near Trimurti Mangal Karyalay,
                  Shikrapur, Pune – 412208
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow">

              <Clock className="text-blue-900" size={32} />

              <div>
                <h3 className="font-bold text-xl">Business Hours</h3>

                <p>24 Hours × 7 Days</p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h3 className="text-3xl font-bold text-blue-900 mb-8">
              Book Your Ride
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border rounded-xl p-4"
              />

              <textarea
                rows="5"
                placeholder="Tell us your travel plan..."
                className="w-full border rounded-xl p-4"
              />

              <button
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold"
              >
                Send Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}