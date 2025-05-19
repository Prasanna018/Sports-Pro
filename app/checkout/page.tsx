"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, CreditCard, ArrowLeft, Lock, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { allProducts } from "@/lib/data"
import { useCart } from "@/components/cart-provider"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const { cartItems, clearCart } = useCart()

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false)
      setOrderPlaced(true)
      clearCart() // Clear the cart after successful order
      window.scrollTo(0, 0)
    }, 1500)
  }

  if (orderPlaced) {
    return (
      <div className="container mx-auto py-16 px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-8">
            <Check className="h-10 w-10 text-green-600 dark:text-green-300" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Thank you for your purchase. Your order has been received and is being processed. You will receive a
            confirmation email shortly.
          </p>
          <div className="bg-muted p-6 rounded-xl mb-8">
            <p className="font-medium mb-2">Order #SP-{Math.floor(Math.random() * 10000)}</p>
            <p className="text-muted-foreground mb-4">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <Separator className="my-4" />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
              <Link href="/">Return to Home</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-2"
      >
        Checkout
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground mb-8"
      >
        Complete your order by providing your shipping and payment details
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold">Shipping Information</h2>
                <Separator className="flex-1" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" className="rounded-lg" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" className="rounded-lg" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" className="rounded-lg" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" className="rounded-lg" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" className="rounded-lg" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" className="rounded-lg" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip/Postal Code</Label>
                  <Input id="zip" className="rounded-lg" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" className="rounded-lg" required />
              </div>
            </motion.div>

            <Separator />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold">Payment Method</h2>
                <Separator className="flex-1" />
              </div>

              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                <div className="flex items-center space-x-3 border p-4 rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Credit/Debit Card
                  </Label>
                  <div className="ml-auto flex gap-2">
                    <Image
                      src="/placeholder.svg?height=24&width=36"
                      alt="Visa"
                      width={36}
                      height={24}
                      className="rounded"
                    />
                    <Image
                      src="/placeholder.svg?height=24&width=36"
                      alt="Mastercard"
                      width={36}
                      height={24}
                      className="rounded"
                    />
                    <Image
                      src="/placeholder.svg?height=24&width=36"
                      alt="Amex"
                      width={36}
                      height={24}
                      className="rounded"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3 border p-4 rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="flex items-center gap-3 cursor-pointer">
                    <Image src="/placeholder.svg?height=20&width=20" alt="PayPal" width={20} height={20} />
                    PayPal
                  </Label>
                </div>
              </RadioGroup>

              {paymentMethod === "card" && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative">
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="rounded-lg pl-10" required />
                      <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" className="rounded-lg" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" className="rounded-lg" required />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full py-6 hover:scale-105 transition-transform"
                disabled={isProcessing || cartItems.length === 0}
              >
                {isProcessing ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock className="mr-2 h-5 w-5" />
                    Place Order - ${total.toFixed(2)}
                  </>
                )}
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-3 flex items-center justify-center gap-1">
                <ShieldCheck className="h-4 w-4" />
                Secure checkout. Your data is protected.
              </p>
            </motion.div>
          </form>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-2 sticky top-24">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-bold">Order Summary</h2>
                <div className="max-h-[300px] overflow-y-auto pr-2 space-y-4">
                  {cartProducts.map((item) => (
                    <div key={item?.id} className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border">
                        <Image src={item?.image || ""} alt={item?.name || ""} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium line-clamp-1">{item?.name}</h3>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Qty: {item?.quantity}</span>
                          <span>${((item?.price || 0) * (item?.quantity || 0)).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

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

                <div className="pt-2">
                  <Button
                    variant="outline"
                    asChild
                    className="w-full gap-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Link href="/cart">
                      <ArrowLeft className="h-4 w-4" />
                      Back to Cart
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
