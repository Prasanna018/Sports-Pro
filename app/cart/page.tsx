"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Minus, Plus, ShoppingCart, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { allProducts } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/components/cart-provider"

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart()

  const cartProducts = cartItems
    .map((item) => {
      const product = allProducts.find((p) => p.id === item.productId)
      return product
        ? {
            ...product,
            quantity: item.quantity,
          }
        : null
    })
    .filter(Boolean)

  const subtotal = cartProducts.reduce((total, item) => {
    return total + (item?.price || 0) * (item?.quantity || 0)
  }, 0)

  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + shipping

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return
    updateQuantity(productId, newQuantity)
  }

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId)
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-2"
      >
        Your Cart
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground mb-8"
      >
        Review your items and proceed to checkout
      </motion.p>

      {cartItems.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16 border rounded-xl"
        >
          <ShoppingCart className="h-20 w-20 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-2xl font-semibold mb-3">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like you haven't added anything to your cart yet. Explore our products and find something you'll love.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </motion.div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="overflow-hidden border-2">
              <div className="bg-muted p-5 font-medium grid grid-cols-12">
                <span className="col-span-6">Product</span>
                <span className="col-span-2 text-center">Price</span>
                <span className="col-span-2 text-center">Quantity</span>
                <span className="col-span-2 text-center">Total</span>
              </div>

              <div className="divide-y">
                {cartProducts.map((item, index) => (
                  <motion.div
                    key={item?.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 grid grid-cols-12 items-center"
                  >
                    <div className="col-span-6 flex items-center gap-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border">
                        <Image src={item?.image || ""} alt={item?.name || ""} fill className="object-cover" />
                      </div>
                      <div>
                        <Link href={`/products/${item?.id}`}>
                          <h3 className="font-medium hover:text-primary transition-colors">{item?.name}</h3>
                        </Link>
                        <button
                          onClick={() => handleRemoveItem(item?.id || "")}
                          className="text-sm text-red-500 flex items-center gap-1 mt-1 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="h-3 w-3" />
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="col-span-2 text-center font-medium">${item?.price.toFixed(2)}</div>

                    <div className="col-span-2 flex items-center justify-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => handleUpdateQuantity(item?.id || "", (item?.quantity || 0) - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-10 text-center font-medium">{item?.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => handleUpdateQuantity(item?.id || "", (item?.quantity || 0) + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    <div className="col-span-2 text-center font-medium">
                      ${((item?.price || 0) * (item?.quantity || 0)).toFixed(2)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            <div className="mt-6 flex justify-between items-center">
              <Button
                variant="outline"
                asChild
                className="gap-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Link href="/products">
                  <ArrowLeft className="h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>

              <Button
                variant="ghost"
                onClick={() => clearCart()}
                className="hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/20 transition-colors"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-2">
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-xl font-bold">Order Summary</h2>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-xl">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="relative">
                      <Input placeholder="Discount code" className="rounded-full pr-20" />
                      <Button
                        variant="ghost"
                        className="absolute right-0 top-0 h-full rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  <Button asChild className="w-full rounded-full py-6 hover:scale-105 transition-transform" size="lg">
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 p-4 border rounded-lg">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center gap-3 p-4 border rounded-lg">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-3 p-4 border rounded-lg">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Secure checkout</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  )
}
