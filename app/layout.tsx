import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "SiteSprint | בניית אתרים מקצועית לעסקים קטנים",
  description: "בניית אתרים מהירה ומקצועית לעסקים קטנים בישראל. עיצוב יוקרתי, SEO מובנה, ומערכות הזמנות. החל מ-₪2,500. זמן השקה ממוצע: 72 שעות.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
