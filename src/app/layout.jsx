import { Libre_Baskerville, Sen } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const libre = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre",
});

const sen = Sen({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sen",
});

export const metadata = {
  title: "AI + Compassion",
  description: "The Global Forum on AI + Compassion unites innovators, policymakers, and cultural leaders to explore how artificial intelligence can serve humanity and the planet. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${libre.variable} ${sen.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}