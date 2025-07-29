// components/MotionWrapper.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function MotionWrapper({
  children,
  variants,
  delay = 0,
}: {
  children: ReactNode
  variants: any
  delay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible.transition,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
