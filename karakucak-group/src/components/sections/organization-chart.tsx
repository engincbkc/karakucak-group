"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, User, Briefcase, Award, Shield, Cpu, BookOpen, Building, ChevronRight, BarChart, Database, Globe } from "lucide-react";

type OrgChartNodeProps = {
  title: string;
  subtitle?: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
  icon?: React.ReactNode;
  members?: number;
  description?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
};

const OrgChartNode: React.FC<OrgChartNodeProps & { children?: React.ReactNode }> = ({
  title,
  subtitle,
  color,
  size = 'md',
  delay = 0,
  icon,
  members,
  description,
  isExpanded = true,
  onToggle,
  children
}) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  const sizes = {
    lg: "p-6 rounded-xl shadow-xl border-b-4 w-full max-w-sm",
    md: "p-4 rounded-xl shadow-lg border-b-4 w-full max-w-xs",
    sm: "p-3 rounded-lg shadow-md border-b-4 w-full"
  };

  const getBorderColor = () => {
    if (color === "bg-blue-600") return "border-blue-700";
    if (color === "bg-blue-700") return "border-blue-800";
    if (color === "bg-green-600") return "border-green-700";
    if (color === "bg-green-500") return "border-green-600";
    if (color === "bg-purple-600") return "border-purple-700";
    if (color === "bg-purple-500") return "border-purple-600";
    if (color === "bg-amber-600") return "border-amber-700";
    if (color === "bg-amber-500") return "border-amber-600";
    return "border-gray-700";
  };

  return (
    <motion.div
      ref={nodeRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.7, delay }}
      className="flex flex-col items-center"
    >
      <div 
        className={`${color} backdrop-blur-sm bg-opacity-95 dark:bg-opacity-90 text-white text-center mb-6 ${sizes[size]} ${getBorderColor()} hover:shadow-2xl transition-all transform hover:-translate-y-1 duration-300 relative group`}
        onClick={onToggle}
      >
        {/* Icon and Title Section */}
        <div className="flex flex-col items-center">
          {icon && (
            <div className="p-3 rounded-full bg-white/20 mb-3 inline-flex">
              {icon}
            </div>
          )}
          <h3 className={`${size === 'lg' ? 'text-xl' : size === 'md' ? 'text-lg' : 'text-base'} font-bold mb-1`}>{title}</h3>
          {subtitle && <p className="text-xs text-white/80 mb-3">{subtitle}</p>}
        </div>
        
        {/* Description - Only for larger nodes or when expanded */}
        {description && (size === 'lg' || size === 'md' || isExpanded) && (
          <p className="text-sm text-white/90 mt-2 mb-2 max-w-xs mx-auto line-clamp-2">{description}</p>
        )}
        
        {/* Members Badge */}
        {members && (
          <div className="flex justify-center mt-2">
            <div className="inline-flex items-center bg-white/20 px-2 py-1 rounded-full text-xs">
              <Users className="w-3 h-3 mr-1" />
              <span>{members} Üye</span>
            </div>
          </div>
        )}
        
        {/* Expandable Indicator */}
        {onToggle && (
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
          </div>
        )}
      </div>
      
      {/* Connection Line */}
      {children && (
        <>
          <div className="w-1 h-10 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded-full"></div>
          
          {/* Children Container */}
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isExpanded !== undefined ? (isExpanded ? 1 : 0) : 1,
              height: isExpanded !== undefined ? (isExpanded ? 'auto' : 0) : 'auto'
            }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden w-full"
          >
            {children}
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

type NodeStateType = {
  [key: string]: boolean;
};

export const OrganizationChart: React.FC = () => {
  const [expandedNodes, setExpandedNodes] = React.useState<NodeStateType>({
    yonetimKurulu: true,
    ceo: true,
    finans: true,
    operasyonlar: true,
    destekBirimleri: true
  });

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };
  
  return (
    <div className="relative">
      {/* Background Decoration Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/30 overflow-hidden relative z-10">
        <div className="flex flex-col items-center">
          {/* Yönetim Kurulu - Tier 1 */}
          <OrgChartNode 
            title="Yönetim Kurulu"
            subtitle="Stratejik Yönetim"
            icon={<Award className="w-6 h-6" />}
            color="bg-blue-700"
            size="lg"
            members={6}
            description="Karakucak Group'un vizyonunu ve uzun vadeli stratejisini belirleyen ve şirketi yönlendiren en üst düzey karar organı"
            delay={0.1} 
            isExpanded={expandedNodes.yonetimKurulu}
            onToggle={() => toggleNode('yonetimKurulu')}
          >
            {/* CEO - Tier 2 */}
            <OrgChartNode 
              title="CEO"
              subtitle="İcra Kurulu Başkanı"
              icon={<User className="w-6 h-6" />}
              color="bg-blue-600"
              size="md"
              description="Şirketin günlük operasyonlarını yöneten ve stratejik hedefleri uygulayan üst düzey yönetici"
              delay={0.2} 
              isExpanded={expandedNodes.ceo}
              onToggle={() => toggleNode('ceo')}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 w-full max-w-6xl">
                {/* Finans Birimi - Tier 3 */}
                <OrgChartNode 
                  title="Finans Birimi"
                  subtitle="Mali Yönetim"
                  icon={<BarChart className="w-5 h-5" />}
                  color="bg-green-600"
                  members={18}
                  description="Grup şirketlerinin mali yönetiminden sorumlu birim"
                  delay={0.3}
                  isExpanded={expandedNodes.finans}
                  onToggle={() => toggleNode('finans')}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
                    <OrgChartNode 
                      title="Muhasebe"
                      icon={<Database className="w-4 h-4" />}
                      color="bg-green-500"
                      size="sm"
                      members={8}
                      delay={0.4} 
                    />
                    <OrgChartNode 
                      title="Yatırımcı İlişkileri"
                      icon={<Users className="w-4 h-4" />}
                      color="bg-green-500"
                      size="sm"
                      members={4}
                      delay={0.45} 
                    />
                    <OrgChartNode 
                      title="Bütçe ve Planlama"
                      icon={<BarChart className="w-4 h-4" />}
                      color="bg-green-500"
                      size="sm"
                      members={6}
                      delay={0.5} 
                    />
                  </div>
                </OrgChartNode>
                
                {/* Operasyonlar - Tier 3 */}
                <OrgChartNode 
                  title="Operasyonlar"
                  subtitle="Sektörel Faaliyetler"
                  icon={<Briefcase className="w-5 h-5" />}
                  color="bg-purple-600"
                  members={75}
                  description="Grup şirketlerinin ana faaliyet alanları ve operasyonel birimler"
                  delay={0.3}
                  isExpanded={expandedNodes.operasyonlar}
                  onToggle={() => toggleNode('operasyonlar')}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
                    <OrgChartNode 
                      title="Otomotiv"
                      icon={<Cpu className="w-4 h-4" />}
                      color="bg-purple-500"
                      size="sm"
                      members={24}
                      delay={0.4} 
                    />
                    <OrgChartNode 
                      title="Madencilik"
                      icon={<Award className="w-4 h-4" />}
                      color="bg-purple-500"
                      size="sm"
                      members={18}
                      delay={0.45} 
                    />
                    <OrgChartNode 
                      title="Tekstil"
                      icon={<Globe className="w-4 h-4" />}
                      color="bg-purple-500"
                      size="sm"
                      members={22}
                      delay={0.5} 
                    />
                    <OrgChartNode 
                      title="Mimarlık"
                      icon={<Building className="w-4 h-4" />}
                      color="bg-purple-500"
                      size="sm"
                      members={11}
                      delay={0.55} 
                    />
                  </div>
                </OrgChartNode>
                
                {/* Destek Birimleri - Tier 3 */}
                <OrgChartNode 
                  title="Destek Birimleri"
                  subtitle="Kurumsal Hizmetler"
                  icon={<Shield className="w-5 h-5" />}
                  color="bg-amber-600"
                  members={32}
                  description="Tüm grup şirketlerine destek hizmetleri sağlayan birimler"
                  delay={0.3}
                  isExpanded={expandedNodes.destekBirimleri}
                  onToggle={() => toggleNode('destekBirimleri')}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
                    <OrgChartNode 
                      title="İnsan Kaynakları"
                      icon={<Users className="w-4 h-4" />}
                      color="bg-amber-500"
                      size="sm"
                      members={9}
                      delay={0.4} 
                    />
                    <OrgChartNode 
                      title="AR-GE"
                      icon={<BookOpen className="w-4 h-4" />}
                      color="bg-amber-500"
                      size="sm"
                      members={12}
                      delay={0.45} 
                    />
                    <OrgChartNode 
                      title="Hukuk"
                      icon={<Shield className="w-4 h-4" />}
                      color="bg-amber-500"
                      size="sm"
                      members={5}
                      delay={0.5} 
                    />
                    <OrgChartNode 
                      title="Bilgi Teknolojileri"
                      icon={<Cpu className="w-4 h-4" />}
                      color="bg-amber-500"
                      size="sm"
                      members={6}
                      delay={0.55} 
                    />
                  </div>
                </OrgChartNode>
              </div>
            </OrgChartNode>
          </OrgChartNode>
        </div>

        {/* Legend */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/30">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-700 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Yönetim</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-600 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Finans</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-600 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Operasyonlar</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-amber-600 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Destek Birimleri</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
