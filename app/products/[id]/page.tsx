"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, Minus, Plus, ShoppingCart, Star, Truck, Shield, RotateCw, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { allProducts } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/components/cart-provider"

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const { addToCart } = useCart()

  const product = allProducts.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  // Mock product images (in a real app, these would come from the database)
  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop",
  ]

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    setIsAddingToCart(true)

    // Simulate API call
    setTimeout(() => {
      addToCart(product.id, quantity)
      setIsAddingToCart(false)
    }, 800)
  }

  const handleAddToWishlist = () => {
    setIsAddingToWishlist(true)

    // Simulate API call
    setTimeout(() => {
      setIsAddingToWishlist(false)
      // Show toast notification
    }, 800)
  }

  const handleImageHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return

    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    if (imageContainerRef.current) {
      imageContainerRef.current.style.setProperty("--x", `${x * 100}%`)
      imageContainerRef.current.style.setProperty("--y", `${y * 100}%`)
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Product Images */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-square relative rounded-lg overflow-hidden border-2 hover:border-primary/50 transition-all duration-300"
            ref={imageContainerRef}
            onMouseMove={handleImageHover}
            style={
              {
                "--x": "50%",
                "--y": "50%",
              } as React.CSSProperties
            }
          >
            <Image
              src={productImages[activeImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover hover:scale-125 transition-transform duration-500"
              style={{
                transformOrigin: "var(--x) var(--y)",
              }}
              priority
            />
            {product.inStock === false && (
              <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                Out of Stock
              </div>
            )}
            {product.rating >= 4.5 && (
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                Top Rated
              </div>
            )}
          </motion.div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {productImages.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveImage(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-24 h-24 rounded-md overflow-hidden border-2 flex-shrink-0 transition-all duration-300 ${
                  activeImage === index ? "border-primary" : "border-transparent hover:border-primary/50"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-8">
          <div>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                  {product.category}
                </span>
                {product.inStock ? (
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                    <Check className="h-3 w-3" /> In Stock
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 text-xs font-medium px-2 py-1 rounded-full">
                    Out of Stock
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mt-3"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : i < product.rating
                          ? "fill-yellow-400/50 text-yellow-400/50"
                          : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground mt-1">Including all taxes</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground"
          >
            {product.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
                className="h-10 w-10 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={increaseQuantity}
                className="h-10 w-10 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              className="flex-1 rounded-full py-6 hover:scale-105 transition-transform"
              size="lg"
              onClick={handleAddToCart}
              disabled={isAddingToCart || !product.inStock}
            >
              {isAddingToCart ? (
                <RotateCw className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <ShoppingCart className="mr-2 h-5 w-5" />
              )}
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleAddToWishlist}
              disabled={isAddingToWishlist}
              className="rounded-full py-6 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all"
            >
              {isAddingToWishlist ? (
                <RotateCw className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Heart className="mr-2 h-5 w-5" />
              )}
              Add to Wishlist
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-3 border rounded-lg p-4"
          >
            <div className="flex items-center gap-3 text-sm">
              <Truck className="h-5 w-5 text-primary" />
              <span>Free delivery on orders over $100</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <RotateCw className="h-5 w-5 text-primary" />
              <span>30-day free returns</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Shield className="h-5 w-5 text-primary" />
              <span>2-year warranty on all products</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Product Information Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="mt-16"
      >
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3 rounded-full p-1">
            <TabsTrigger value="description" className="rounded-full">
              Description
            </TabsTrigger>
            <TabsTrigger value="specifications" className="rounded-full">
              Specifications
            </TabsTrigger>
            <TabsTrigger value="reviews" className="rounded-full">
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="p-6 mt-6 border rounded-lg">
            <div className="space-y-4">
              <p>
                {product.description} Our products are designed with athletes in mind, providing the perfect balance of
                performance, comfort, and durability.
              </p>
              <p>
                Each {product.name} is crafted using premium materials and undergoes rigorous quality testing to ensure
                it meets the highest standards. Whether you're a professional athlete or a casual sports enthusiast, our
                equipment is designed to enhance your performance and enjoyment.
              </p>
              <p>
                The {product.name} features innovative technology that sets it apart from competitors, providing
                superior performance in all conditions. Our team of sports experts has carefully designed every aspect
                to meet the needs of modern athletes.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="p-6 mt-6 border rounded-lg">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-5 hover:border-primary hover:shadow-md transition-all duration-300">
                  <h3 className="font-medium mb-2">Materials</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium quality materials designed for durability and performance
                  </p>
                </div>
                <div className="border rounded-lg p-5 hover:border-primary hover:shadow-md transition-all duration-300">
                  <h3 className="font-medium mb-2">Dimensions</h3>
                  <p className="text-sm text-muted-foreground">
                    Standard size compliant with international regulations
                  </p>
                </div>
                <div className="border rounded-lg p-5 hover:border-primary hover:shadow-md transition-all duration-300">
                  <h3 className="font-medium mb-2">Weight</h3>
                  <p className="text-sm text-muted-foreground">Optimized weight for perfect balance and control</p>
                </div>
                <div className="border rounded-lg p-5 hover:border-primary hover:shadow-md transition-all duration-300">
                  <h3 className="font-medium mb-2">Warranty</h3>
                  <p className="text-sm text-muted-foreground">2-year manufacturer warranty against defects</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="p-6 mt-6 border rounded-lg">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : i < product.rating
                            ? "fill-yellow-400/50 text-yellow-400/50"
                            : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating} out of 5</span>
                <span className="text-sm text-muted-foreground">Based on {product.reviewCount} reviews</span>
              </div>

              <div className="space-y-4">
                <div className="border rounded-lg p-5 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">John D.</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Verified Purchase</p>
                  <p>Great product! Exactly what I was looking for. The quality is excellent and it performs well.</p>
                </div>

                <div className="border rounded-lg p-5 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Sarah M.</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Verified Purchase</p>
                  <p>Very happy with my purchase. The product is well-made and durable. Would recommend!</p>
                </div>

                <div className="border rounded-lg p-5 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Michael T.</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 3 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Verified Purchase</p>
                  <p>Good product but not perfect. It's a bit heavier than I expected, but overall it works well.</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Related Products */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="mt-20"
      >
        <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link href={`/products/${relatedProduct.id}`}>
                  <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                    <div className="aspect-square relative overflow-hidden group">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {relatedProduct.rating >= 4.5 && (
                        <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                          Top Rated
                        </div>
                      )}
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(relatedProduct.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : i < relatedProduct.rating
                                  ? "fill-yellow-400/50 text-yellow-400/50"
                                  : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <h3 className="font-semibold text-lg">{relatedProduct.name}</h3>
                      <p className="font-bold mt-2">${relatedProduct.price.toFixed(2)}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  )
}
