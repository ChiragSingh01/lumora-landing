'use client'

import FAQItem from '../ui/FAQItem'
import { faqs } from '@/data/faqs'

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
