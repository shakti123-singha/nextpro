
import { Poppins } from "next/font/google";
import Footer from "./component/Footer";
import Header from "./component/Header";
import "./globals.css";
import RegistrationWrapper from "./component/RegistrationWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "AD SHASTREE",
  description: "Creative social media & brand builders",
  icons: { icon: "/logo SVG.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased transition-colors duration-500 min-h-screen`}>
        <Header />
        <main className="min-h-[80vh]">{children}</main>
        <RegistrationWrapper />
        <Footer />
      </body>
    </html>
  );
}
