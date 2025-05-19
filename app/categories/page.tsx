"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { categories } from "@/lib/data"

export default function CategoriesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="text-primary font-medium">EXPLORE OUR COLLECTION</span>
        <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">Shop by Category</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse our extensive collection of premium sports equipment organized by category. Find the perfect gear for
          your favorite sport.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <Link href={`/categories/${category.slug}`}>
              <div className="group relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-white/80 mb-4 max-w-xs">
                    Explore our premium {category.name.toLowerCase()} equipment for athletes of all levels.
                  </p>
                  <span className="inline-flex items-center text-white group-hover:text-primary transition-colors">
                    Shop Now
                    <svg
                      className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
