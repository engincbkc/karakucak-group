"use client";

import React from "react";
import { motion } from "framer-motion";

interface OrgChartNodeProps {
  title: string;
  color: string;
  size?: "lg" | "md" | "sm";
  delay?: number;
}

const OrgChartNode: React.FC<OrgChartNodeProps & { children?: React.ReactNode }> = ({
  title,
  color,
  size = "md",
  delay = 0,
  children
}) => {
  const sizes = {
    lg: "p-4 rounded-lg text-lg font-bold w-64",
    md: "p-3 rounded-lg text-md font-semibold w-56",
    sm: "p-2 rounded-lg text-sm w-full"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className={`${color} text-white text-center mb-4 ${sizes[size]}`}>
        <h3>{title}</h3>
      </div>
      {children && (
        <>
          <div className="w-1 h-8 bg-gray-300 dark:bg-gray-600"></div>
          {children}
        </>
      )}
    </motion.div>
  );
};

export const OrganizationChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg overflow-hidden">
      <div className="flex flex-col items-center">
        <OrgChartNode title="Yönetim Kurulu" color="bg-blue-700" size="lg" delay={0.1}>
          <OrgChartNode title="CEO" color="bg-blue-600" size="md" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              {/* Finans Birimi */}
              <OrgChartNode title="Finans" color="bg-green-600" delay={0.3}>
                <div className="grid grid-cols-1 gap-3 w-full">
                  <OrgChartNode title="Muhasebe" color="bg-green-500" size="sm" delay={0.4} />
                  <OrgChartNode title="Yatırımcı İlişkileri" color="bg-green-500" size="sm" delay={0.45} />
                  <OrgChartNode title="Bütçe ve Planlama" color="bg-green-500" size="sm" delay={0.5} />
                </div>
              </OrgChartNode>
              
              {/* Operasyonlar */}
              <OrgChartNode title="Operasyonlar" color="bg-purple-600" delay={0.3}>
                <div className="grid grid-cols-1 gap-3 w-full">
                  <OrgChartNode title="Otomotiv" color="bg-purple-500" size="sm" delay={0.4} />
                  <OrgChartNode title="Madencilik" color="bg-purple-500" size="sm" delay={0.45} />
                  <OrgChartNode title="Tekstil" color="bg-purple-500" size="sm" delay={0.5} />
                  <OrgChartNode title="Mimarlık" color="bg-purple-500" size="sm" delay={0.55} />
                </div>
              </OrgChartNode>
              
              {/* Destek Birimleri */}
              <OrgChartNode title="Destek Birimleri" color="bg-amber-600" delay={0.3}>
                <div className="grid grid-cols-1 gap-3 w-full">
                  <OrgChartNode title="İnsan Kaynakları" color="bg-amber-500" size="sm" delay={0.4} />
                  <OrgChartNode title="AR-GE" color="bg-amber-500" size="sm" delay={0.45} />
                  <OrgChartNode title="Hukuk" color="bg-amber-500" size="sm" delay={0.5} />
                  <OrgChartNode title="Bilgi Teknolojileri" color="bg-amber-500" size="sm" delay={0.55} />
                </div>
              </OrgChartNode>
            </div>
          </OrgChartNode>
        </OrgChartNode>
      </div>
    </div>
  );
};
