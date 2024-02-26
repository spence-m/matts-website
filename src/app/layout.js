import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Matt’s Website",
  description: "Matt Spencer, front-end developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} bg-sky-950 p-4`}>
        {children}
      </body>
    </html>
  );
}
