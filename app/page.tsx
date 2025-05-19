"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Award, ShieldCheck, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { featuredProducts, categories } from "@/lib/data"

export default function Home() {
  const featuredRef = useRef(null)
  const categoriesRef = useRef(null)
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.2 })
  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 })

  return (
    <div className="flex flex-col gap-16 pb-16 container mx-auto">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
            alt="Sports equipment"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
        <div className="container mx-auto relative z-20 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4"
            >
              Premium Sports Equipment
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Gear Up for <span className="text-primary">Greatness</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-xl text-white/90 mb-8"
            >
              Discover premium sports equipment designed for athletes of all levels. Elevate your game with our
              professional-grade gear.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="text-base font-medium px-8 py-6 rounded-full hover:scale-105 transition-transform"
              >
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-base font-medium px-8 py-6 rounded-full hover:scale-105 transition-transform"
              >
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"
        ></motion.div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="flex flex-col items-center text-center p-8">
                <Truck className="h-14 w-14 mb-6 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Free Shipping</h3>
                <p className="text-muted-foreground">On all orders over $100. Fast delivery to your doorstep.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="flex flex-col items-center text-center p-8">
                <ShieldCheck className="h-14 w-14 mb-6 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
                <p className="text-muted-foreground">2-year warranty on all products. Premium quality assured.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="flex flex-col items-center text-center p-8">
                <Award className="h-14 w-14 mb-6 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
                <p className="text-muted-foreground">Assistance from sports professionals. Get expert advice.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4" ref={featuredRef}>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={featuredInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="text-primary font-medium"
              >
                HANDPICKED FOR YOU
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mt-2"
              >
                Featured Products
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={featuredInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                asChild
                variant="outline"
                className="gap-2 group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Link href="/products">
                  View All Products
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link href={`/products/${product.id}`}>
                  <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                    <div className="aspect-square relative overflow-hidden group">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {product.inStock === false && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          Out of Stock
                        </div>
                      )}
                      {product.rating >= 4.5 && (
                        <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                          Top Rated
                        </div>
                      )}
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : i < product.rating
                                ? "text-yellow-400/50"
                                : "text-gray-300"
                              }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center mt-3">
                        <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4" ref={categoriesRef}>
        <div className="flex flex-col gap-10">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={categoriesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium"
            >
              EXPLORE OUR COLLECTION
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mt-2"
            >
              Shop by Category
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link href={`/categories/${category.slug}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                    <div className="aspect-video relative overflow-hidden group">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.7]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                        <motion.h3
                          className="text-3xl font-bold text-white"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {category.name}
                        </motion.h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="relative">
        <div className="h-[400px] relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
            alt="Sports equipment"
            fill
            className="object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              >
                Get 20% Off Your First Order
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Sign up for our newsletter and receive a special discount code for your first purchase.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  asChild
                  size="lg"
                  className="text-base font-medium px-8 py-6 rounded-full hover:scale-105 transition-transform"
                >
                  <Link href="/products">Shop Now</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Join Our Newsletter
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-6"
            >
              Subscribe to get special offers, free giveaways, and product launches.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-12 w-full rounded-full border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit" className="h-12 rounded-full px-6 hover:scale-105 transition-transform">
                Subscribe
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  )
}
