"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function CTASection() {
  const [mounted, setMounted] = useState(false)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  async function handleSubmit(formData: FormData) {
    setLoading(true)

    // 👉 TEMP: simulate sending
    await new Promise((res) => setTimeout(res, 1200))

    setLoading(false)
    setSuccess(true)
  }

  if (!mounted) return null

  return (
    <section className="py-24">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        {/* LEFT — FORM */}
        <Card>
          <CardContent className="p-8">
            <h2 className="mb-2 text-3xl font-bold">
              Let’s Work Together
            </h2>
            <p className="mb-6 text-muted-foreground">
              Have a project in mind? Send me a message and let’s build something great.
            </p>

            {success ? (
              <p className="rounded-lg bg-green-500/10 p-4 text-green-600 font-medium">
                ✅ Message sent successfully!  
                I’ll get back to you soon.
              </p>
            ) : (
              <form action={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* RIGHT — PHOTO */}
        <div className="relative mx-auto w-full max-w-md aspect-square">
          <div className="absolute inset-0 rounded-full bg-muted -z-10" />

          <Image
            src="/images/myphoto.png"
            alt="JD portrait"
            fill
            priority
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
