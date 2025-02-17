"use client";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
          >
            MA
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="https://github.com/MoDev40/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:scale-110 transition-transform duration-200"
            >
              <GithubIcon
                size={30}
                className="text-gray-700 dark:text-gray-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
