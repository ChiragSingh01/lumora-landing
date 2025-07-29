// components/BlogCard.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BlogCardProps {
  title: string
  excerpt: string
  icon: ReactNode
  link: string
}

export default function BlogCard({ title, excerpt, icon}: BlogCardProps) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-700 transition hover:shadow-2xl"
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gray-100 dark:bg-black dark:text-white text-black rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">{excerpt}</p>
      <button className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-semibold">
        Read more →
      </button>
    </motion.div>
  )
}
