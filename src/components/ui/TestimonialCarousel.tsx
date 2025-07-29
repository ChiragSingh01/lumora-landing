'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image'
import testimonials from '@/data/testimonials'

export type Testimonial = {
  name: string
  image?: string
  text: string
}

interface TestimonialCarouselProps {
  autoRotate?: boolean
  interval?: number
}

export default function TestimonialCarousel({
  autoRotate = true,
  interval = 5000,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!autoRotate) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, interval)
    return () => clearInterval(timer)
  }, [autoRotate, interval])

  const testimonial = testimonials[index]
  const avatarUrl = testimonial.image?.trim()
    ? testimonial.image
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=0D8ABC&color=fff&size=128&rounded=true`

  return (
    <div className="text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <FaQuoteLeft className="text-4xl text-blue-500 mb-4" />
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic max-w-xl">{testimonial.text}</p>
          <div className="w-16 h-16 relative mb-2">
            <Image
              src={avatarUrl}
              alt={testimonial.name}
              fill
              className="rounded-full object-cover border-2 border-blue-500"
            />
          </div>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
