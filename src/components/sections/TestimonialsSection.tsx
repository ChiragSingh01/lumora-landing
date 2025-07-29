'use client'

import TestimonialCarousel from '@/components/ui/TestimonialCarousel'

export default function TestimonialsCarouselSection() {
  return ( 
    <section id="testimonials" className="py-20 bg-white dark:bg-black border-t-2 border-b-2 border-black dark:border-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">What Our Users Say</h2>
        <TestimonialCarousel/>
      </div>
    </section>
  )
}
