'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionWrapperProps {
  children: ReactNode
  variants: Variants
  delay?: number
}

export default function MotionWrapper({
  children,
  variants,
  delay = 0,
}: MotionWrapperProps) {
  const modifiedVariants: Variants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(
          typeof variants.visible === 'object' &&
          'transition' in variants.visible &&
          typeof (variants.visible as any).transition === 'object'
            ? (variants.visible as any).transition
            : {}
        ),
        delay,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={modifiedVariants}
    >
      {children}
    </motion.div>
  )
}
