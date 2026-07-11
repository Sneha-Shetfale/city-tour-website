export default function TopBar() {
  return (
    <div className="bg-blue-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row justify-between items-center gap-2">

        <div className="flex flex-wrap gap-4">
          <a href="tel:+919619183923" className="hover:text-yellow-400">
            📞 +91 96191 83923
          </a>

          <a href="mailto:city.ventures23@gmail.com" className="hover:text-yellow-400">
            ✉️ city.ventures23@gmail.com
          </a>
        </div>

        <div className="flex flex-wrap gap-4">
          <span>📍 Shikrapur, Pune</span>
          <span>🕒 24×7 Service</span>
        </div>

      </div>
    </div>
  );
}