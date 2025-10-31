import { motion, AnimatePresence } from "framer-motion";
export default function RegistrationModal({ open, onClose }) {
  if (!open) return null;

  return (
    // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="fixed inset-0 z-50 flex items-center justify-center dark:from-gray-900 dark:via-gray-800 dark:to-black  top-0 ">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden w-[90%] max-w-3xl flex flex-col md:flex-row"
        >
          {/* LEFT SIDE BANNER */}
          {/* <div className="flex-1 bg-gradient-to-br from-blue-100 to-white p-8 flex flex-col justify-center text-center md:text-left"> */}
          <div className="hidden md:flex flex-1 bg-gray-900   flex-col justify-center text-center md:text-left">

            <motion.img
        src="/zibliSc.jpg"
        alt="IT Skills Banner"
        className="w-full h-full object-cover"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
          </div>

          {/* RIGHT SIDE FORM */}
          {/* <div className="flex-1 bg-gradient-to-br from-blue-200 to-white relative flex flex-col items-center px-6 py-10"> */}
          <div className="flex-1 bg-[#fffcf2] hover:bg-gradient-to-r from-[#dadad7] hover:to-[#f9ecc3] relative flex flex-col items-center px-6 py-10">

            {/* User Avatar */}
            <button
              onClick={onClose}
              className="absolute top-3 right-6 text-gray-800 hover:text-gray-900 text-xl"
            >
              {/* &times; */}
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
</svg>


            </button>
            <div className="absolute -top-0 w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden">
              <img
                src="/pcld.webp" // <-- replace with your actual image in /public
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Form */}
            <div className="mt-16 w-full max-w-xs">
              <form className="grid gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 rounded-md border text-black border-gray-300 w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-3 rounded-md border text-black border-gray-300 w-full"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-3 rounded-md border text-black border-gray-300 w-full"
                  required
                />
                {/* <select className="p-3 rounded-md border border-gray-300 w-full">
                  <option>Select a Course</option>
                  <option>Web Development</option>
                  <option>Cyber Security</option>
                  <option>Graphic Design</option>
                </select> */}
                {/* <select className="p-3 rounded-md border border-gray-300 w-full">
                  <option>Select a Branch</option>
                  <option>Noida</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                </select> */}

                <button
                  type="submit"
                  className="bg-[#0c3842] hover:bg-gradient-to-r from-[#0c3842] to-[#1892bb] text-white font-medium py-3 rounded-md mt-2"
                >
                  Submit
                </button>
              </form>

              {/* <button
                onClick={onClose}
                className="mt-4 w-full py-2 text-sm text-gray-500 hover:text-gray-700"
              >
                Close
              </button> */}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}