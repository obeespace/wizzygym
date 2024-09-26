import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const outfit = Outfit({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Wizzy Pro",
  description: "Modern fitness agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className} suppressHydrationWarning={true}
      >
        <Nav/>{children}
      </body>
    </html>
  );
}
