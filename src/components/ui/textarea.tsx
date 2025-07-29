import * as React from 'react'
import { cn } from '@/lib/utils'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm text-gray-900 dark:text-white shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
