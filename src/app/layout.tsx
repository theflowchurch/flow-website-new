import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FLOW | You'll be glad you prayed",
  description:
    "Join millions of believers worldwide in online prophetic prayer meetings. Flexible Lovers Of The Word. Tuesdays & Fridays at 4:30 AM GMT.",
  openGraph: {
    title: "FLOW | You'll be glad you prayed",
    description:
      "Online Prophetic Prayer Meetings. Flexible Lovers Of The Word.",
    images: ["/images/flow/shame-will-not-follow-me-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
