"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="text-primary font-medium">OUR STORY</span>
        <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">About SportsPro</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're passionate about sports and committed to providing athletes with the highest quality equipment.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Founded in 2010, SportsPro began with a simple mission: to provide athletes of all levels with
              high-quality sports equipment that enhances performance and enjoyment.
            </p>
            <p>
              What started as a small shop in downtown has grown into a trusted brand serving customers nationwide. Our
              journey has been driven by our passion for sports and commitment to excellence.
            </p>
            <p>
              Today, we continue to expand our product range while maintaining our core values of quality, innovation,
              and customer satisfaction. We believe that everyone deserves access to premium sports equipment,
              regardless of their skill level or experience.
            </p>
          </div>
          <Button asChild className="mt-8 rounded-full hover:scale-105 transition-transform">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2071&auto=format&fit=crop"
            alt="Team SportsPro"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium mb-3">Quality</h3>
            <p className="text-muted-foreground">
              We source the finest materials and employ rigorous quality control to ensure our products meet the highest
              standards.
            </p>
          </div>
          <div className="border rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium mb-3">Innovation</h3>
            <p className="text-muted-foreground">
              We continuously research and develop new technologies to improve our products and stay ahead of industry
              trends.
            </p>
          </div>
          <div className="border rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium mb-3">Sustainability</h3>
            <p className="text-muted-foreground">
              We are committed to reducing our environmental impact through responsible sourcing and eco-friendly
              practices.
            </p>
          </div>
          <div className="border rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium mb-3">Community</h3>
            <p className="text-muted-foreground">
              We support local sports programs and believe in the power of sports to build stronger communities.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                alt="John Smith"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium">John Smith</h3>
            <p className="text-muted-foreground">Founder & CEO</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Sarah Johnson"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium">Sarah Johnson</h3>
            <p className="text-muted-foreground">Head of Product Development</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
                alt="Michael Chen"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium">Michael Chen</h3>
            <p className="text-muted-foreground">Customer Experience Director</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
