"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Casa Filomena
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="#villas" className="text-gray-700 hover:text-gray-900">
            Villas
          </Link>
          <Link href="#bulletin" className="text-gray-700 hover:text-gray-900">
            Bulletin
          </Link>
          <Link href="#map" className="text-gray-700 hover:text-gray-900">
            Resort Map
          </Link>
        </div>

        {/* Placeholder for Login button */}
        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          Admin Login
        </button>
      </nav>
    </header>
  );
}
