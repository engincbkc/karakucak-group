"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { Linkedin, Twitter, Mail, Phone, Award, Briefcase, Calendar, ExternalLink, Globe, Users } from "lucide-react"

interface DirectorProps {
  name: string
  position: string
  image: string
  bio: string
  education?: string
  experience?: string
  expertise?: string[]
  achievements?: string[]
  socialLinks?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

const directors: DirectorProps[] = [
  {
    name: "Mirza Karakucak", 
    position: "Geleceğin CEO'su",
    image: "/images/mirzpp.png",
    bio: "25 yılı aşkın iş deneyimi ile Mirza Karakucak, grubun kurucusu ve vizyoneridir. Otomotiv ve madencilik sektöründeki yatırımlarla başlayan kariyeri, tekstil ve mimarlık alanındaki girişimlerle genişlemiştir.",
    education: "ISTE",
    experience: "25+ yıl",
    expertise: [
      "Stratejik Yönetim",
      "Finansal Yatırımlar",
      "Sektörler Arası Entegrasyon"
    ],
    achievements: [
      "Türkiye'nin En Etkili 50 İş İnsanı (2026)",
      "Sürdürülebilir İş Modeli Ödülü (2026)"
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/ahmetkarakucak",
      twitter: "https://twitter.com/ahmetkarakucak",
      email: "ahmet.karakucak@karakucakgroup.com"
    }
  }
]

const DirectorCard = ({ name, position, image, bio, education, experience, expertise, achievements, socialLinks }: DirectorProps) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: Math.random() * 0.3 }}
      className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700/30 group"
    >
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/0 via-blue-600/0 to-blue-900/0 opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
      
      {/* Profile Image */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 filter group-hover:brightness-90"
        />
        
        {/* Experience Badge */}
        {experience && (
          <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center space-x-1 z-20">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{experience}</span>
          </div>
        )}
        
        {/* Social Links */}
        {socialLinks && (
          <div className="absolute bottom-4 left-4 flex space-x-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {socialLinks.email && (
              <a href={`mailto:${socialLinks.email}`} className="bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6 pb-8">
        {/* Personal Info */}
        <div className="mb-5">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{name}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{position}</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{bio}</p>
        </div>
        
        {/* Details Section */}
        <div className="space-y-4 mt-5">
          {/* Education */}
          {education && (
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-3 flex-shrink-0">
                <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mb-1">Eğitim</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">{education}</p>
              </div>
            </div>
          )}
          
          {/* Expertise */}
          {expertise && expertise.length > 0 && (
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-3 flex-shrink-0">
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mb-1">Uzmanlık</h4>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((item, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs py-1 px-2 rounded-md font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div className="mt-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-lg p-3 border border-blue-100 dark:border-blue-800/20">
              <h4 className="text-xs uppercase tracking-wider text-blue-700 dark:text-blue-300 font-medium mb-2 flex items-center">
                <Award className="w-4 h-4 mr-1" /> Başarılar
              </h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Contact Button */}
        <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-700/30">
          <Link href="/iletisim" className="flex items-center justify-center w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700/50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 py-2.5 px-4 rounded-lg transition-colors font-medium text-sm">
            <Phone className="w-4 h-4 mr-2" /> İletişime Geç
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export function BoardOfDirectors() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-70 dark:opacity-20">
        <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-blue-50 dark:bg-blue-900/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-50 dark:bg-blue-900/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Section Badge */}
          <div className="inline-flex items-center bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/30 rounded-full px-4 py-2 mb-6">
            <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-700 dark:text-blue-300 font-medium text-sm">Liderlik Ekibimiz</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Yönetim <span className="text-blue-600 dark:text-blue-400">Kurulumuz</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Karakucak Group'un başarısının arkasındaki deneyimli liderlik ekibimiz, 
            <span className="font-medium text-gray-800 dark:text-gray-100">vizyoner yaklaşımları</span> ve
            <span className="font-medium text-gray-800 dark:text-gray-100"> derin sektör bilgileriyle</span> şirketimizi geleceğe taşıyor.
          </p>
          
          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-10">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">112+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Yıllık Toplam Deneyim</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">25+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Sektörel Ödüller</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">12+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Uluslararası İş Ortaklığı</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {directors.map((director) => (
            <DirectorCard
              key={director.name}
              name={director.name}
              position={director.position}
              image={director.image}
              bio={director.bio}
              education={director.education}
              experience={director.experience}
              expertise={director.expertise}
              achievements={director.achievements}
              socialLinks={director.socialLinks}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/30 p-8 md:p-10 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ekibimizle İletişime Geçin
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Vizyoner liderlik ekibimizle tanışmak ve iş fırsatlarını değerlendirmek için bizimle iletişime geçin.
              Karakucak Group'un uzman ekibi, projelerinizi hayata geçirmek için yanınızda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/iletisim" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center space-x-2"
              >
                <span>İletişim Formu</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
              <Link 
                href="/hakkimizda" 
                className="px-6 py-3 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-600 font-medium rounded-lg transition-colors"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
