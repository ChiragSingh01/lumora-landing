'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Ensure component only renders after client mount
  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem('theme')
    setDarkMode(storedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
    setDarkMode(!darkMode)
  }

  if (!mounted) return null // ⛔ prevent hydration error

  return (
    <button onClick={toggleTheme} className="p-2 rounded">
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
