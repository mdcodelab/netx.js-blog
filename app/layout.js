import { Bebas_Neue, Comfortaa, Kanit } from "next/font/google";
import "./css/globals.css";
import "./css/news.css";
import "./css/player.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400", 
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "700"], 
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["100", "400", "900"], 
});

export const metadata = {
  title: "Blog App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${comfortaa.variable} ${kanit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}