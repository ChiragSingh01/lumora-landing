import React from "react";
import { CheckCircle } from "lucide-react";

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
};

export default function PricingCard({
  title,
  price,
  features,
  isPopular = false,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl border p-6 shadow-xl backdrop-blur-md 
        bg-white/70 dark:bg-white/10 text-black dark:text-white 
        ${isPopular ? "border-purple-500 scale-105" : "border-gray-300 dark:border-gray-700"} 
        transition-all duration-300`}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-4xl font-bold mb-4">{price}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="text-green-500 dark:text-green-400 w-5 h-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl font-medium transition">
        Choose Plan
      </button>
    </div>
  );
}
