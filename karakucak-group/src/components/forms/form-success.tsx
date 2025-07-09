"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface FormSuccessProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
}

export function FormSuccess({
  title = "Mesajınız Alındı!",
  message = "En kısa sürede ekibimiz sizinle iletişime geçecektir.",
  icon = <Check className="h-8 w-8 text-green-600 dark:text-green-400" />,
}: FormSuccessProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center p-10"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100 dark:bg-green-900/30">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{message}</p>
    </motion.div>
  );
}
