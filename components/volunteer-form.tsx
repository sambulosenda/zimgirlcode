"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { submitVolunteerForm } from "@/app/actions"

export function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: "",
    experience: "",
    availability: "",
  })
  const [status, setStatus] = useState<null | "success" | "error">(null)
  const [statusMessage, setStatusMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitVolunteerForm(formData)
      setStatus(result.success ? "success" : "error")
      setStatusMessage(result.message)

      if (result.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          interests: "",
          experience: "",
          availability: "",
        })
      }
    } catch (error) {
      setStatus("error")
      setStatusMessage("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="interests" className="text-sm font-medium">
          Areas of Interest
        </label>
        <select
          id="interests"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300"
        >
          <option value="">Select an option</option>
          <option value="Tech Mentor">Tech Mentor</option>
          <option value="Workshop Facilitator">Workshop Facilitator</option>
          <option value="Event Organizer">Event Organizer</option>
          <option value="Administrative Support">Administrative Support</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="experience" className="text-sm font-medium">
          Relevant Experience
        </label>
        <textarea
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          rows={3}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300"
        ></textarea>
      </div>

      <div className="space-y-2">
        <label htmlFor="availability" className="text-sm font-medium">
          Availability
        </label>
        <select
          id="availability"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300"
        >
          <option value="">Select an option</option>
          <option value="Weekdays">Weekdays</option>
          <option value="Weekends">Weekends</option>
          <option value="Both">Both Weekdays and Weekends</option>
          <option value="Flexible">Flexible</option>
        </select>
      </div>

      {status && (
        <div
          className={`p-3 rounded-lg ${status === "success" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
        >
          {statusMessage}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  )
}
