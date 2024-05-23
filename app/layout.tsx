import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-epilogue",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Intro section with dropdown navigation",
  description:
    "Intro section with dropdown navigation homepage practice project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${epilogue.variable}`}>
      <body>
        <div
          className="mt-20 flex min-h-[85vh] flex-col justify-between
                    px-0 lg:ml-[9rem] lg:mr-28 lg:mt-28"
        >
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
