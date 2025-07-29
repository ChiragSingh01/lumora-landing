'use client'

import React from "react";
import PricingCard from "../ui/PricingCard";
import ScrollReveal from "../animations/ScrollReveal";
import PricingCalculator from "../ui/PricingCalculator";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 bg-zinc-100 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black text-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-6">Our Pricing</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
            <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
            Choose the plan that fits your needs. Cancel anytime.
            </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Free"
              price="$0/month"
              features={[
                "Basic Access",
                "Limited Support",
                "Single Project",
                "Community Resources",
              ]}
            />
            <PricingCard
              title="Pro"
              price="$19/month"
              features={[
                "All Free Features",
                "Priority Support",
                "Unlimited Projects",
                "Advanced Tools",
              ]}
              isPopular
            />
            <PricingCard
              title="Enterprise"
              price="Contact Us"
              features={[
                "Custom Features",
                "Dedicated Support",
                "Team Collaboration",
                "Security Controls",
              ]}
            />
          </div>
        </ScrollReveal>
      </div>
      <PricingCalculator />
    </section>
  );
}
