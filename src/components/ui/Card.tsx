import React from 'react'
import { cn } from '@/lib/utils' // or use `clsx` if available

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'rounded-lg bg-white dark:bg-gray-900 shadow-md p-4',
        className
      )}
    >
      {children}
    </div>
  )
}
