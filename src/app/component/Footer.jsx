export default function Footer() {
  return (
    <>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 animate-pulse bg-white"
      >

        <img
          src="/image/whatsaap.jpeg"
          alt="WhatsApp"
          className="w-16 h-16 drop-shadow-lg"
        />
      </a>

      <footer className="bg-[#0c3842] text-white mt-16 py-12 relative">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h2 className="text-green-300 font-semibold text-sm tracking-wider mb-4">
              THE SITE OF YOUR CAMPAIGNS
            </h2>
            <p className="text-xs text-gray-200">
              Helping your brand reach the right audience with creative campaigns that work.
            </p>
            <div className="flex gap-4 mt-6 text-white text-lg">
              <a href="#" className="hover:text-green-300">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-green-300">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-green-300">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-sm mb-3 uppercase">Services</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Email marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
              <li>Offline</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-sm mb-3 uppercase">About</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Our story</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
            <h3 className="font-semibold text-sm mt-6 mb-3 uppercase">Legal</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-green-300 font-semibold text-sm tracking-wider mb-4 uppercase">
              Subscribe Now
            </h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#14213D] text-white font-semibold py-2 rounded-md hover:bg-green-500 transition"
              >
                SEND
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} AD SHASTREE — All rights reserved.
        </div>
      </footer>
    </>
  );
}
