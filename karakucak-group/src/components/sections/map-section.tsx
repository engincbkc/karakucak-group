"use client";

import React from "react";
import { motion } from "framer-motion";

export function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1243827389237!2d29.099720375866757!3d40.990802921341104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacfa6fd5c98e7%3A0xfc917d8eef4a8ebd!2sAta%C5%9Fehir%2C%20Istanbul!5e0!3m2!1sen!2str!4v1685019865927!5m2!1sen!2str"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Karakucak Group Ofis Konumu"
        className="filter grayscale hover:grayscale-0 transition-all duration-500"
      />
    </motion.div>
  );
}
