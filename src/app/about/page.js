"use client"
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

function page() {
  return (
    <div> <section id="about" className="mt-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold">About Us</h3>
            <p className="mt-3 text-black max-w-3xl">
              AD SHASTREE is a social media marketing company dedicated to
              helping businesses of all sizes build their online presence. We
              craft personalised social strategies after understanding your
              business and market. Our mission is to equip small business owners
              with tools and tactics to thrive online.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-gray-100 shadow-sm bg-[#ff6634]">
                <h4 className="font-semibold">Leadership</h4>
                <ul className="mt-3 text-sm text-black space-y-2">
                  <li>Sheetal Ponda — CEO & Head Graphic Designer</li>
                  <li>Mr. Manoj Mahla — Managing Director & Branding Expert</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-gray-100 shadow-sm bg-[#ff6634]">
                <h4 className="font-semibold">Our Approach</h4>
                <p className="mt-2 text-sm text-black">
                  We analyze your brand, target audience, and market to create
                  content and ad campaigns that move the needle — from awareness
                  to conversion.
                </p>
              </div>
            </div>
          </motion.div>
        </section></div>
  )
}

export default page