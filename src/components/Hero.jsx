function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

      <div className="max-w-4xl text-center text-white mx-auto">
          {/* Badge */}
           <span className="inline-block rounded-full bg-yellow-400 px-6 py-3 text-lg font-bold text-black mb-6">
      🚖 CITY TOURS
           </span>

          {/* Heading */}
           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
           The Prime Rental
           <br />
          Cab Service
           </h1>

          {/* Description */}
           <p className="mt-6 mx-auto max-w-3xl text-xl leading-9 text-gray-200">
           Reliable taxi service from <strong>Shikrapur</strong> for Airport Pickup &
           Drop, Outstation Trips, Maharashtra Tour Packages, Family Tours and
           Corporate Travel.
         </p>

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-5 flex-wrap">

            <a
              href="tel:+919619183923"
              className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-700 transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919619183923"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-green-500 px-8 py-4 text-lg font-semibold hover:bg-green-600 transition"
            >
              💬 WhatsApp
            </a>

          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">

            <div className="rounded-xl bg-white/10 p-5 backdrop-blur">
              <div className="text-4xl">🚗</div>
              <p className="mt-3 font-semibold">Premium Cars</p>
            </div>

            <div className="rounded-xl bg-white/10 p-5 backdrop-blur">
              <div className="text-4xl">🕒</div>
              <p className="mt-3 font-semibold">24×7 Service</p>
            </div>

            <div className="rounded-xl bg-white/10 p-5 backdrop-blur">
              <div className="text-4xl">👨‍✈️</div>
              <p className="mt-3 font-semibold">Expert Drivers</p>
            </div>

            <div className="rounded-xl bg-white/10 p-5 backdrop-blur">
              <div className="text-4xl">💰</div>
              <p className="mt-3 font-semibold">Affordable Fare</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;