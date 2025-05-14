"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

type OfficeLocation = {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  image: string;
};

const officeLocations: OfficeLocation[] = [
  {
    id: 1,
    name: "Merkez Ofis",
    city: "İstanbul",
    address: "Barbaros Mah. Begonya Sok. No: 3, Ataşehir, İstanbul, 34746",
    phone: "+90 212 123 45 67",
    email: "istanbul@karakucakgroup.com",
    image: "https://images.unsplash.com/photo-1524778880162-0cf5b9dab69c?q=80&w=1170",
  },
  {
    id: 2,
    name: "Ankara Ofisi",
    city: "Ankara",
    address: "Çankaya Cad. No: 45, Kızılay, Ankara, 06420",
    phone: "+90 312 987 65 43",
    email: "ankara@karakucakgroup.com",
    image: "https://images.unsplash.com/photo-1570168767837-936a0ecb55f9?q=80&w=1287",
  },
  {
    id: 3,
    name: "İzmir Ofisi",
    city: "İzmir",
    address: "Alsancak Mah. Kordon Cad. No: 71, Konak, İzmir, 35220",
    phone: "+90 232 555 88 99",
    email: "izmir@karakucakgroup.com",
    image: "https://images.unsplash.com/photo-1587436864900-6a5e96d11a8b?q=80&w=1335",
  },
];

export function OfficeLocations() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Ofislerimiz"
          subtitle="Türkiye'nin farklı şehirlerindeki ofislerimizle her zaman yanınızdayız. Size en yakın Karakucak Group ofisini ziyaret ederek hizmetlerimiz hakkında detaylı bilgi alabilirsiniz."
          alignment="center"
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officeLocations.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={office.image}
                    alt={`${office.name} - ${office.city}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{office.name}</h3>
                    <p className="text-sm font-medium text-gray-200">{office.city}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {office.address}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Telefon:</strong>{" "}
                      <a 
                        href={`tel:${office.phone.replace(/\s+/g, '')}`}
                        className="text-blue-600 hover:underline"
                      >
                        {office.phone}
                      </a>
                    </p>
                    <p className="text-sm">
                      <strong>E-posta:</strong>{" "}
                      <a 
                        href={`mailto:${office.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {office.email}
                      </a>
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
