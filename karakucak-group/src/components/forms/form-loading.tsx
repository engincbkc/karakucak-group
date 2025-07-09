"use client";

import React from "react";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";

interface FormLoadingProps {
  title?: string;
  message?: string;
  submessage?: string;
}

export function FormLoading({
  title = "Formunuz gönderiliyor...",
  message = "Lütfen işlem tamamlanana kadar bekleyiniz.",
  submessage = "",
}: FormLoadingProps) {
  return (
    <motion.div 
      className="text-center p-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="inline-flex flex-col items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-opacity-50 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <Loader className="absolute top-4 left-4 w-8 h-8 text-blue-500 animate-pulse" />
        </div>
        <p className="mt-6 text-lg font-medium text-gray-900 dark:text-gray-100">{title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">{message}</p>
        {submessage && (
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 max-w-xs">{submessage}</p>
        )}
      </div>
    </motion.div>
  );
}
