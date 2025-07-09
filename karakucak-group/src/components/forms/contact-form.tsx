"use client";

import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { Toast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/forms/form-field";
import { FormSuccess } from "@/components/forms/form-success";
import { FormLoading } from "@/components/forms/form-loading";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  formEndpoint?: string;
  onSubmitSuccess?: () => void;
}

export function ContactForm({ 
  formEndpoint = "https://formsubmit.co/info@karakucakgroup.com",
  onSubmitSuccess
}: ContactFormProps) {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'info' | 'warning'>('success');

  // onSubmitSuccess callback'i için basit bir useEffect
  useEffect(() => {
    if (formStatus === 'success' && onSubmitSuccess) {
      onSubmitSuccess();
    }
  }, [formStatus, onSubmitSuccess]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // FormSubmit.co servisini kullanarak mail gönderiyoruz (ücretsiz çözüm)
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Bildirimi göster (loading durumu)
      setToastMessage('Formunuz gönderiliyor...');
      setToastType('info');
      setShowToast(true);
      
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        // Başarı durumunu ve bildirimi ayarla
        setFormStatus('success');
        setToastMessage('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
        setToastType('success');
        setShowToast(true); // Tekrar true yaparak bildirimi yeniliyoruz
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Başarı durumu için süreyi ayarla
        setTimeout(() => {
          setFormStatus('idle');
        }, 200);
        
      } else {
        // Hata durumu
        setFormStatus('error');
        setToastMessage('Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        setToastType('error');
        setShowToast(true); // Tekrar true yaparak bildirimi yeniliyoruz
      }
    } catch (error) {
      // Catch bloğunda da toast göster
      setFormStatus('error');
      setToastMessage('Bağlantı hatası! Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.');
      setToastType('error');
      setShowToast(true);
      console.error('Form submission error:', error);
    }
  };

  if (formStatus === 'submitting') {
    return <FormLoading />;
  }

  // Başarı durumunda hem başarı mesajını hem de toast'u göster
  if (formStatus === 'success') {
    return (
      <>
        <FormSuccess />
       
      </>
    );
  }

  return (
    <>
      <Toast 
        show={showToast}
        message={toastMessage}
        type={toastType as any}
        onClose={() => setShowToast(false)}
      />

      <form onSubmit={handleSubmit} action={formEndpoint} method="POST" className="space-y-6">
        {/* Form fields - modern, accessible and interactive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Adınız Soyadınız"
            name="name"
            type="text"
            placeholder="Adınız Soyadınız"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <FormField
            label="E-posta Adresiniz"
            name="email"
            type="email"
            placeholder="ornek@mail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Telefon Numaranız"
            name="phone"
            type="tel"
            placeholder="0555 555 55 55"
            value={formData.phone}
            onChange={handleChange}
          />
          <FormField
            label="Konu"
            name="subject"
            type="text"
            placeholder="Mesajınızın konusu"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
            Mesajınız
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Nasıl yardımcı olabiliriz?"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="flex items-center justify-center space-x-2 w-full py-3"
        >
          <Send className="mr-2 h-4 w-4" />
          Mesajı Gönder
        </Button>
      </form>
    </>
  );
}
