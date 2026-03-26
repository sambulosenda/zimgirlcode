"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { subscribeToNewsletter } from "@/app/actions"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<null | "success" | "error">(null)
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await subscribeToNewsletter(email)
      setStatus(result.success ? "success" : "error")
      setMessage(result.message)
    } catch (error) {
      setStatus("error")
      setMessage("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>

        {status && (
          <div
            className={`text-center p-2 rounded-full ${status === "success" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
          >
            {message}
          </div>
        )}

        <p className="text-sm text-center text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
      </form>
    </div>
  )
}
