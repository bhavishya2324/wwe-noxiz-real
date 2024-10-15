import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "./components/global/Navbar";
import { ShootingStarsAndStarsBackgroundDemo } from "./components/global/Herobgreal";




const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WWE FOR EVERYONE",
  description: "Watch for free!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
     <ShootingStarsAndStarsBackgroundDemo />
    
      {/* <Navbar />  */}
      
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        
          
         </body>
    </html>
  );
}
