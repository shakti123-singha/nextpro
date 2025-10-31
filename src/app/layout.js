// app/layout.js

import { Poppins } from "next/font/google";
import Footer from './component/Footer';
import Header from './component/Header';
import './globals.css';
import RegistrationWrapper from "./component/RegistrationWrapper";
// import './img.css'
// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights as needed
  display: "swap",
});

export const metadata = {
  title: 'AD SHASTREE',
  description: 'Admin Dashboard Example',
   icons: {
    icon: '/logo SVG.svg', // path inside public/
  },
};


export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      {/* <body  className=' bg-gray-100'> 
       */}
      <body style={{ backgroundColor: "#fffcf2",color:"black" }} className={`${poppins.variable} font-sans antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}> 
        <Header/>

       <main className="min-h-[80vh] mx-4">{children}</main>
       <RegistrationWrapper />
       <Footer/>
      </body>
    </html>
  );
}  



