// data/features.ts
import { Code, Zap, ShieldCheck, Smartphone, Globe, Rocket, Activity, Palette, Terminal, Cloud } from 'lucide-react'

export const features = [
  {
    icon: Code,
    iconProps: { className: "w-8 h-8 text-blue-600 dark:text-blue-400" },
    title: 'Developer Friendly',
    desc: 'Built with modern tools and clean architecture, easy to customize and extend.',
  },
  {
    icon: Zap,
    iconProps: { className: "w-8 h-8 text-yellow-500 dark:text-yellow-300" },
    title: 'Fast & Performant',
    desc: 'Optimized for speed and smooth user experience across all devices.',
  },
  {
    icon: ShieldCheck,
    iconProps: { className: "w-8 h-8 text-green-600 dark:text-green-400" },
    title: 'Secure by Default',
    desc: 'Best practices and modern standards ensure your app stays safe.',
  },
  {
    icon: Smartphone,
    iconProps: { className: "w-8 h-8 text-purple-600 dark:text-purple-400" },
    title: 'Mobile Responsive',
    desc: 'Works seamlessly on phones, tablets, and desktops without extra effort.',
  },
  {
    icon: Globe,
    iconProps: { className: "w-8 h-8 text-indigo-600 dark:text-indigo-400" },
    title: 'Global Ready',
    desc: 'Easily adaptable for internationalization and localization.',
  },
  {
    icon: Rocket,
    iconProps: { className: "w-8 h-8 text-red-500 dark:text-red-400" },
    title: 'Launch Ready',
    desc: 'Pre-configured for rapid deployment to production.',
  },
  {
    icon: Activity,
    iconProps: { className: "w-8 h-8 text-teal-600 dark:text-teal-400" },
    title: 'Real-time Capable',
    desc: 'Supports real-time features with socket and live update capabilities.',
  },
  {
    icon: Palette,
    iconProps: { className: "w-8 h-8 text-pink-500 dark:text-pink-400" },
    title: 'Beautifully Designed',
    desc: 'Modern and aesthetic UI design system out of the box.',
  },
  {
    icon: Terminal,
    iconProps: { className: "w-8 h-8 text-gray-700 dark:text-gray-300" },
    title: 'CLI Integrated',
    desc: 'Built-in CLI tools for quick scaffolding and automation.',
  },
  {
    icon: Cloud,
    iconProps: { className: "w-8 h-8 text-cyan-600 dark:text-cyan-400" },
    title: 'Cloud Compatible',
    desc: 'Deployable on all major cloud providers and edge platforms.',
  },
]
