'use client'
import React from 'react'
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 text-black dark:text-white px-6 py-8 border-t border-gray-300 dark:border-zinc-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Brand */}
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} Lumora. All rights reserved.
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-sky-500">
            <Twitter size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Github" className="hover:text-gray-700 dark:hover:text-white">
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
