'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark')
      document.documentElement.classList[storedTheme === 'dark' ? 'add' : 'remove']('dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(prefersDark)
      document.documentElement.classList.toggle('dark', prefersDark)
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList[newTheme === 'dark' ? 'add' : 'remove']('dark')
    setDarkMode(!darkMode)
  }

  if (!mounted) return null

  return (
    <button onClick={toggleTheme} className="p-2 rounded">
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
