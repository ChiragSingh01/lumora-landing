'use client'

import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Button from '@/components/ui/Button'

type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data)
    reset()
  }

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Name Field */}
          <div>
            <Input
              placeholder="Your Name"
              {...register('name', { required: 'Name is required' })}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <Textarea
              placeholder="Your Message"
              rows={5}
              {...register('message', { required: 'Message is required' })}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          {/* Success Message */}
          {isSubmitSuccessful && (
            <p className="text-green-600 text-center mt-4">
              Message sent successfully!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
