'use client';

import Link from 'next/link';
import { useTheme } from '../ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
             blog
          </span>
        </Link>

        <div className="flex items-center gap-6">
        <Link
        href="/posts"
        className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
        Posts
        </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            About
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
