import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthProvider from "./components/AuthProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Care.xyz",
  description: "Care.xyz is a platform that connects people with care services and resources.",
};

export default function RootLayout({ children }) {
  return (
   <html
  lang="en"
  data-theme="light"
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>
      <body className="min-h-full flex flex-col ">
       

        <AuthProvider> 
           <Navbar></Navbar> 
         <main className="flex-1 ">
          {children} 
         </main>
        
        <Footer></Footer>

        </AuthProvider>
        
        
         

        
        
        </body>
    </html>
  );
}
