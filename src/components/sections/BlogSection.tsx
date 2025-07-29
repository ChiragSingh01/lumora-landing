// components/BlogSection.tsx
'use client'

import BlogCard from '@/components/ui/BlogCard'
import { blogList } from '@/data/Blogs'

export default function BlogSection() {
  return (
    <section id="blog" className="h-screen py-10 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-[#0f172a] flex flex-col">
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Explore Our Blogs
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Insights, tutorials, and updates on web development, design, and AI.
        </p>
      </div>

      {/* Scrollable blog list */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
          {blogList.map((blog, index) => {
            const Icon = blog.icon
            return (
              <BlogCard
                key={index}
                title={blog.title}
                excerpt={blog.excerpt}
                icon={<Icon size={24} />}
                link={blog.link}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
