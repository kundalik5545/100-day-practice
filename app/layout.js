import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Practice App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <nav className="flex gap-4 underline bg-white/80 backdrop-blur-lg p-2 mx-auto text-black">
          <a href="/">Home Page</a>
          <a href="/demo">Demo Page</a>
        </nav>
        <main className="continer mx-auto min-h-screen p-5">{children}</main>
      </body>
    </html>
  );
}
