import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/lib/theme-context";
import { inter, montserrat, getFontVariables } from "@/lib/fonts";
import { defaultMetadata } from "./metadata";
import { CustomDocument } from "./custom-document";

// Merkezi metadata dosyasından al
export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning className={getFontVariables()}>
      <head>
        {/* Preload essential resources */}
        <link 
          rel="preconnect" 
          href="https://karakucakgroup.com" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preload" 
          href="/images/logo/logo.png" 
          as="image"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
          </div>
          {/* Service worker registration */}
          <CustomDocument />
        </ThemeProvider>
      </body>
    </html>
  );
}
