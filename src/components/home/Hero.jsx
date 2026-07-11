function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-5xl text-center text-white">

          {/* Badge */}
   <div className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-xl mb-8">
  <span className="text-2xl">🚖</span>
  <span className="text-lg font-bold text-blue-700 tracking-wide">
    CITY TOURS
  </span>
</div>
          {/* Main Heading */}
   <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
  <span className="text-white">The Prime Rental</span>
  <br />
  <span className="text-yellow-400">Cab Service</span>
</h1>

          {/* Description */}
          <p className="mt-8 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-9">
            Safe, comfortable and affordable taxi services from
            <strong> Shikrapur, Shirur , Pune.</strong> We specialize in Airport Pickup &
            Drop, Outstation Trips, Maharashtra Tour Packages, Family Tours and
            Corporate Travel.
          </p>

          {/* Highlights */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-lg font-medium">
            <span>✔ Airport Pickup</span>
            <span>✔ Outstation Trips</span>
            <span>✔ Family Tours</span>
            <span>✔ Corporate Travel</span>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="tel:+919619183923"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919619183923"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold transition"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-4xl">⭐</div>
              <h3 className="mt-3 font-bold">10+ Years</h3>
              <p className="text-sm text-gray-200">Experience</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-4xl">🚗</div>
              <h3 className="mt-3 font-bold">Premium</h3>
              <p className="text-sm text-gray-200">Fleet</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-4xl">👨‍✈️</div>
              <h3 className="mt-3 font-bold">Professional</h3>
              <p className="text-sm text-gray-200">Drivers</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-4xl">🕒</div>
              <h3 className="mt-3 font-bold">24×7</h3>
              <p className="text-sm text-gray-200">Support</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;