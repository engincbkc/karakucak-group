"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  show: boolean;
  message: string;
  type?: ToastType;
  onClose?: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

export function Toast({
  show,
  message,
  type = "success",
  onClose,
  autoClose = true,
  autoCloseDelay = 6000,
}: ToastProps) {
  useEffect(() => {
    if (show && autoClose) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [show, autoClose, autoCloseDelay, onClose]);

  const getToastStyles = () => {
    switch (type) {
      case "success":
        return {
          bgContainer: "bg-green-100 text-green-800",
          bgIcon: "bg-green-200",
          btnBg: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400",
          icon: <Check className="w-5 h-5" />,
        };
      case "error":
        return {
          bgContainer: "bg-red-100 text-red-800",
          bgIcon: "bg-red-200",
          btnBg: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400",
          icon: <AlertTriangle className="w-5 h-5" />,
        };
      case "warning":
        return {
          bgContainer: "bg-yellow-100 text-yellow-800",
          bgIcon: "bg-yellow-200",
          btnBg: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400",
          icon: <AlertTriangle className="w-5 h-5" />,
        };
      case "info":
        return {
          bgContainer: "bg-blue-100 text-blue-800",
          bgIcon: "bg-blue-200",
          btnBg: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400",
          icon: <Check className="w-5 h-5" />,
        };
      default:
        return {
          bgContainer: "bg-green-100 text-green-800",
          bgIcon: "bg-green-200",
          btnBg: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400",
          icon: <Check className="w-5 h-5" />,
        };
    }
  };

  const styles = getToastStyles();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 right-6 z-[100] flex items-center p-4 rounded-lg shadow-xl ${styles.bgContainer}`}
          role="alert"
        >
          <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ${styles.bgIcon}`}>
            {styles.icon}
          </div>
          <div className="ml-3 text-sm font-medium">{message}</div>
          {onClose && (
            <button
              type="button"
              className={`ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 ${styles.btnBg}`}
              onClick={onClose}
              aria-label="Kapat"
            >
              <span className="sr-only">Kapat</span>
              <X className="w-4 h-4" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
