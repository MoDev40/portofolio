import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mukhtaar Ahmed | Full Stack Developer",
    template: "%s | Mukhtaar Ahmed",
  },
  description:
    "Full Stack Developer specializing in MERN stack, modern web technologies, and UI/UX design. Building scalable and performant web applications.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "Web Development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "Express",
    "UI/UX Design",
    "Mukhtaar Ahmed",
    "Software Engineer",
  ],
  authors: [{ name: "Mukhtaar Ahmed" }],
  creator: "Mukhtaar Ahmed",
  publisher: "Mukhtaar Ahmed",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Mukhtaar Ahmed | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, modern web technologies, and UI/UX design. Building scalable and performant web applications.",
    siteName: "Mukhtaar Ahmed Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Mukhtaar Ahmed - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukhtaar Ahmed | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, modern web technologies, and UI/UX design.",
    images: ["/og-image.jpg"], // Same image as OpenGraph
    creator: "@Modev40", // Replace with your Twitter handle
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-site-verification", // Add your Google verification code
    yandex: "your-yandex-verification", // Add if you use Yandex
    yahoo: "your-yahoo-verification", // Add if you use Yahoo
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
