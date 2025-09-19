import "./globals.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"], 
  variable: "--font-montserrat", 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}