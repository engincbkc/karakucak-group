"use client"

import React from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, Phone, MapPin, SendHorizonal } from "lucide-react"

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "İsim en az 2 karakter olmalıdır" }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi girmelisiniz" }),
  phone: z.string().min(10, { message: "Geçerli bir telefon numarası girmelisiniz" }),
  subject: z.string().min(5, { message: "Konu en az 5 karakter olmalıdır" }),
  message: z.string().min(10, { message: "Mesaj en az 10 karakter olmalıdır" }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function ContactSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    // Burada form verisini işleyebilirsiniz, örneğin bir API'ye gönderebilirsiniz
    console.log(data)
    // API gönderimi simülasyonu için timeout
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert("Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.")
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Bizimle İletişime Geçin</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Sorularınız, önerileriniz veya işbirliği fırsatları için bizimle iletişime geçin.
            Size en kısa sürede dönüş yapacağız.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="rounded-xl bg-gray-50 dark:bg-gray-700 p-6 flex">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full h-fit">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Adres</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Barbaros Mah. Begonya Sok. No: 3, <br />
                  Ataşehir, İstanbul, 34746
                </p>
              </div>
            </div>
            
            <div className="rounded-xl bg-gray-50 dark:bg-gray-700 p-6 flex">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full h-fit">
                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Telefon</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +90 212 123 45 67
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  +90 212 123 45 68
                </p>
              </div>
            </div>
            
            <div className="rounded-xl bg-gray-50 dark:bg-gray-700 p-6 flex">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full h-fit">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">E-posta</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  info@karakucakgroup.com
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  kariyer@karakucakgroup.com
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Adınız Soyadınız
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    E-posta Adresiniz
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Telefon Numaranız
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Konu
                  </label>
                  <input
                    id="subject"
                    {...register("subject")}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                {isSubmitting ? "Gönderiliyor..." : (
                  <>
                    Mesaj Gönder
                    <SendHorizonal className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
