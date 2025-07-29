'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Lottie from 'lottie-react'
import animationData from '@/lib/hero-lottie.json'
import MotionWrapper from '../ui/MotionWrapper'
import { zoomIn } from '@/lib/animations'
import Image from 'next/image'
export default function HeroSection() {

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 sm:px-12 md:px-24 bg-gradient-to-br from-gray-100 via-white to-gray-300 dark:from-gray-900 dark:via-gray-950 dark:to-black text-black dark:text-white relative overflow-hidden transition-colors duration-500">

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500 opacity-20 rounded-full blur-[150px] z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500 opacity-20 rounded-full blur-[150px] z-0" />

      <MotionWrapper variants={zoomIn} delay={0.2}>
        <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-10 relative z-20 my-10'>
          {/* Glass Container */}
          <motion.div
            className="z-10 backdrop-blur-xl bg-white/20 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl shadow-xl p-10 md:p-16 max-w-3xl text-center md:text-left transition-colors duration-500"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='flex items-center justify-center w-16 h-16 mb-6 mx-auto md:mx-0'>
              <Image src="/logo.png" alt="Lumora Logo" width={64} height={64} className='w-full h-full object-contain'/>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Revolutionize Your Marketing with <span className="text-indigo-600 dark:text-indigo-400">AI</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-800 dark:text-gray-300">
              Meet <span className="font-semibold dark:text-white">ADmyBRAND AI Suite</span> — the all-in-one platform for smarter, faster, automated campaigns.
            </p>
            <Button type='button'>Get Started</Button>
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            className="w-full md:w-[50%] z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Lottie animationData={animationData} loop />
          </motion.div>
        </div>
      </MotionWrapper>
    </section>
  )
}
