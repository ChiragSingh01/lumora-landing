// sections/Features.tsx
'use client'

import { features } from '@/data/features'
import { FeatureCard } from '@/components/ui/FeatureCard'
import ScrollReveal from '../animations/ScrollReveal'

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">
            Powerful Features
          </h2>
        </ScrollReveal>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {features.map((feature, index) => (
                <ScrollReveal key={index} delay={0.1 * index}>
                <div className="h-full">
                    <FeatureCard
                    key={index}
                    icon={feature.icon}
                    iconProps={feature.iconProps}
                    title={feature.title}
                    desc={feature.desc}
                    />
                </div>
                </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  )
}
