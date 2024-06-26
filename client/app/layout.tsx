import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { cn } from "@/lib/utils";
import { ToastContainer } from 'react-toastify'
import dynamic from "next/dynamic";

const font = Roboto_Slab({ 
  subsets: ["latin"], 
  weight : ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable:'--roboto-font'
});

// Add the NoSSR component using dynamic
const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false });


export const metadata: Metadata = {
  title: "Summarizer App",
  description: "Generated by Mehdi Znayzen",
  icons:'/logo-icon.png'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
        <html lang="en">
            <body 
              className={cn('overflow-x-hidden', font.className)}
            >
              <div>
                <NoSSR />
                {children}
              </div>
              <ToastContainer />
            </body>
        </html>
    </ClerkProvider>
  );
}
