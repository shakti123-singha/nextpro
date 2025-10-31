"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// import { UserGroupIcon, UserCircleIcon, BriefcaseIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
const images = [
  "/image/banner1.jpg",
  "/image/banner2.jpg",
  "/image/banner3.webp",
  "/image/banner4.jpg",
  "/image/banner5.webp",
  "/image/banner6.webp",
  "/image/banner7.png",
];
const pieData = [
  { name: "Facebook", value: 45 },
  { name: "Instagram", value: 35 },
  { name: "Twitter", value: 20 },
];

const barData = [
  { month: "Jan", growth: 30 },
  { month: "Feb", growth: 45 },
  { month: "Mar", growth: 60 },
  { month: "Apr", growth: 80 },
  { month: "May", growth: 100 },
];
// const COLORS = ["#6366F1", "#EC4899", "#3B82F6"];
const COLORS = ["#0c3842", "#ff6634", "#b5dece"];


export default function Home() {
  return (
    <div className="">
      <section className="relative w-full overflow-hidden rounded-xl my-2">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          style={{ width: `${images.length * 200 * 2}px` }}
        >
          {[...images, ...images].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Banner ${idx + 1}`}
              className="w-[80vh] h-[60vh] object-cover flex-shrink-0"
            />
          ))}
        </motion.div>

        {/* {[...Array(2)].map((_, i) => (
      <div key={i} className="flex my-1 mx-1">
        {[ 
          "/image/banner1.jpg",
          "/image/banner2.jpg",
          "/image/banner3.webp",
          "/image/banner4.jpg",
          "/image/banner5.webp",
          "/image/banner6.webp",
          "/image/banner7.png",

        ].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Banner ${idx + 1}`}
            className="w-80vh h-[60vh] object-cover flex-shrink-0"
          />
        ))}
      </div>
    ))}
  </motion.div> */}

        {/* Optional Overlay for Text or Dark Tint */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center ">
          <h2 className="text-white text-4xl md:text-1xl font-extrabold">
            Elevate Your Brand Presence
          </h2>
        </div>
      </section>
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Build a magnetic online presence
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tailored social strategies, creative content, and performance-first
            ads to grow your business.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#0c3842] hover:bg-gradient-to-r from-[#0c3842] to-[#1892bb] text-white px-5 py-3 rounded-lg shadow hover:scale-[1.02]"
            >
              Start a Project →
            </a>
            <a
              href="#services"
              // className="inline-flex items-center gap-2 border bg-gradient-to-r  from-[#fffcf2] to-[#676354] hover:bg-gradient-to-r from-[#696658] to-[#f8f4e8] border-gray-200 px-5 py-3 rounded-lg"
              className="inline-flex items-center gap-2 border border-gray-200 px-5 py-3 rounded-lg bg-gradient-to-r from-[#fffcf2] to-[#676354] hover:from-[#696658] hover:to-[#f8f4e8] hover:scale-[1.02] "

            >
              View Services
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-black">
            <div className="p-4 rounded-lg bg-[#ff6634] hover:bg-gradient-to-r from-[#d27a5d] to-[#a52c03]">
              <div className="font-semibold">Industries</div>
              <div className="mt-2">
                Fintech • Healthcare • Real Estate • Retail
              </div>
            </div>
            <div className="p-4 rounded-lg bg-[#ff6634] hover:bg-gradient-to-r from-[#d27a5d] to-[#a52c03]">
              <div className="font-semibold">Guarantee</div>
              <div className="mt-2">
                Practical growth plans & monthly reporting
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-r from-[#ff6634] to-[#d67251] hover:from-[#f47d55] hover:to-[#c94013] shadow-lg overflow-hidden flex items-center justify-center bgimg">
            {/* Placeholder graphic (replace with Image component) */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">
                Social campaigns that convert
              </h3>
              <p className="mt-3 text-sm text-black">
                Eye-catching creatives, targeted ads, and consistent posting
                built for growth.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="p-3 bg-gradient-to-r from-[#fffcf2] to-[#676354] hover:from-[#696658] hover:to-[#f8f4e8] hover:scale-[1.02] rounded-lg shadow">
                  4 Reels / week
                </div>
                <div className="p-3 bg-gradient-to-r from-[#fffcf2] to-[#676354] hover:from-[#696658] hover:to-[#f8f4e8] hover:scale-[1.02] rounded-lg shadow">
                  Daily Stories
                </div>
                <div className="p-3 bg-gradient-to-r from-[#fffcf2] to-[#676354] hover:from-[#696658] hover:to-[#f8f4e8] hover:scale-[1.02] rounded-lg shadow">
                  Monthly Report
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section id="charts" className="mt-16">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 w-6 h-6 text-[#ff6634]"
          >
            <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
          </svg>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold"
          >
            Our Impact
          </motion.h3>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2">
              {/* <ChatBubbleLeftRightIcon className="size-4 w-6 h-6 text-indigo-600" />{" "} */}
              <h4 className="font-semibold mb-4">Platform Engagement</h4>{" "}
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <h4 className="font-semibold mb-4">Monthly Growth</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="growth" fill="#0c3842" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
  <Image
    className="dark:invert"
    src="/next.svg"
    alt="Next.js logo"
    width={180}
    height={38}
    priority
  />
  <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    <li className="mb-2 tracking-[-.01em]">
      Get started by editing{" "}
      <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
        src/app/page.js
      </code>
      .
    </li>
    <li className="tracking-[-.01em]">
      Save and see your changes instantly.
    </li>
  </ol>

  <div className="flex gap-4 items-center flex-col sm:flex-row">
    <a
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className="dark:invert"
        src="/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      Deploy now
    </a>
    <a
      className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Read our docs
    </a>
  </div>
</main>
<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src="/file.svg"
      alt="File icon"
      width={16}
      height={16}
    />
    Learn
  </a>
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src="/window.svg"
      alt="Window icon"
      width={16}
      height={16}
    />
    Examples
  </a>
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src="/globe.svg"
      alt="Globe icon"
      width={16}
      height={16}
    />
    Go to nextjs.org →
  </a>
</footer> */
}
// import React from 'react'

// export default function page() {
//   return (
//     <div>page</div>
//   )
// }
