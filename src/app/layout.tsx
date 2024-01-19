import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liko Chien Frontend Exam",
  description: "for iBUYPOWER",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white flex item-center justify-center`}>{children}</body>
    </html>
  );
}
