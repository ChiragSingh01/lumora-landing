'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { User, Settings2, LineChart } from 'lucide-react'

const plans = {
  basic: 10,
  pro: 20,
  enterprise: 40,
}

const addons = {
  analytics: 5,
  support: 10,
}

export default function PricingCalculator() {
  const [users, setUsers] = useState(1)
  const [plan, setPlan] = useState<'basic' | 'pro' | 'enterprise'>('basic')
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])

  const toggleAddon = (addon: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addon)
        ? prev.filter((a) => a !== addon)
        : [...prev, addon]
    )
  }

  const total =
    users * plans[plan] +
    selectedAddons.reduce(
      (acc, addon) => acc + addons[addon as keyof typeof addons],
      0
    )

  return (
    <Card className="max-w-xl mx-auto p-8 glass-effect shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 mt-20">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
        <Settings2 className="text-blue-500" /> Pricing Calculator
      </h2>

      <div className="mb-6">
        <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200 items-center gap-2">
          <User className="text-green-500" />
          Number of Users
        </label>
        <input
          type="number"
          min={1}
          value={users}
          onChange={(e) => setUsers(Math.max(1, parseInt(e.target.value)))}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200 items-center gap-2">
          <LineChart className="text-purple-500" />
          Select Plan
        </label>
        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value as 'basic' | 'pro' | 'enterprise')}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        >
          <option value="basic">Basic - $10/user</option>
          <option value="pro">Pro - $20/user</option>
          <option value="enterprise">Enterprise - $40/user</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Add-ons
        </label>
        <div className="space-y-3">
          {Object.entries(addons).map(([name, price]) => (
            <label
              key={name}
              className="flex items-center space-x-3 text-gray-800 dark:text-gray-200"
            >
              <input
                type="checkbox"
                checked={selectedAddons.includes(name)}
                onChange={() => toggleAddon(name)}
                className="accent-blue-500"
              />
              <span className="capitalize">{name} (+${price})</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8 text-2xl font-bold text-center text-blue-600 dark:text-blue-400">
        Total: ${total}
      </div>
    </Card>
  )
}
