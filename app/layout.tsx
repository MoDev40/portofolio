import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../utils/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Muktar Ahmed | Full Stack Developer",
    template: "%s | Muktar Ahmed",
  },
  description:
    "Full Stack Developer specializing in MERN stack, modern web technologies. Building scalable and performant web applications.",
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
    "Muktar Ahmed",
    "Software Engineer",
  ],
  authors: [{ name: "Muktar Ahmed" }],
  creator: "Muktar Ahmed",
  publisher: "Muktar Ahmed",
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
  metadataBase: new URL("https://portofolio-alpha-gray.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portofolio-alpha-gray.vercel.app",
    title: "Muktar Ahmed | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, modern web technologies. Building scalable and performant web applications.",
    siteName: "Muktar Ahmed Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muktar Ahmed - Full Stack Developer",
      },
    ],
  },
  twitter: {
    title: "Muktar Ahmed | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, modern web technologies.",
    creator: "@Modev40",
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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
