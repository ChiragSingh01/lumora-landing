// data/faqs.ts

export interface FAQ {
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    question: 'What is your refund policy?',
    answer: 'We offer a full refund within 14 days of purchase if you’re not satisfied with our service.',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our support team via email or our contact form available on the website.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 7-day free trial for all new users to explore the platform.',
  },
]
