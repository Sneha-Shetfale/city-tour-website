function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="text-5xl font-extrabold md:text-7xl">
          City Tour
        </h1>

        <p className="mt-6 max-w-3xl text-xl">
          Reliable Taxi Service, Airport Pickup, Outstation Trips &
          Maharashtra Tour Packages from Shirur.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+919619183923"
            className="rounded-lg bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-700"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919619183923"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-green-500 px-8 py-3 font-semibold hover:bg-green-600"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;