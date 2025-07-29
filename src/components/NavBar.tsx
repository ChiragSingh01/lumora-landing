'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from '@/hooks/ThemeToggle'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '#blog' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black text-black dark:text-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between md:justify-start">
        
        {/* Mobile Menu Button on the Left */}
        <div className="md:hidden mr-4">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div className='rounded-full overflow-hidden w-10 h-10 mr-4 dark:border-2 dark:border-white'>
          <Image src="/logo.png" alt="Lumora Logo" width={40} height={40} className="rounded-full" />
        </div>

        {/* Brand */}
        <div className="text-2xl font-bold mr-auto">
          <Link href="/">Lumora</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center ml-auto">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} className="hover:text-blue-500 transition-colors">
              {label}
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mt-4 md:hidden bg-white dark:bg-black px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-500 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
