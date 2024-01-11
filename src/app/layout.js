import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar"
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next : Content Creative Agency",
  description: "Build by Ashutosh Pratap Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
        <NavBar />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
};
