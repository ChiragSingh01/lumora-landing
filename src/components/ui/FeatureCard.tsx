// components/ui/FeatureCard.tsx
import { LucideIcon } from 'lucide-react'

type FeatureCardProps = {
  icon: LucideIcon
  iconProps?: React.ComponentProps<'svg'>
  title: string
  desc: string
}

export function FeatureCard({ icon: Icon, iconProps, title, desc }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left hover:shadow-xl transition-all h-full flex flex-col">
      <div className="mb-5">
        <Icon {...iconProps} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mt-auto">{desc}</p>
    </div>
  )
}
