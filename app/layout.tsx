import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { ToastContainer } from 'react-toastify'

const font = Roboto_Slab({ 
  subsets: ["latin"], 
  weight : ['100', '200', '300', '400', '500', '600', '700', '800', '900'] 
});

export const metadata: Metadata = {
  title: "Summarizer App",
  description: "Generated by Mehdi Znayzen",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
        <html lang="en">
            <body 
              className={cn('overflow-x-hidden', font.className)}
              >
                <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
                >
                  <div>
                    {children}
                  </div>
                  <ToastContainer />
                </ThemeProvider>
            </body>
        </html>
    </ClerkProvider>
  );
}
