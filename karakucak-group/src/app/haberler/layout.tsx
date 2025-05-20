import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Haberler | Karakucak Group',
  description: 'Karakucak Group ve şirketlerimizin son haberleri, duyuruları ve etkinlikleri.',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
