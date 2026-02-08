"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";

export default function CTASection() {
  const [mounted, setMounted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
    } else {
      alert("Something went wrong. Try again.");
    }
  }

  if (!mounted) return null;

  return (
    <section
      id="CTASection"
      className="relative overflow-hidden py-24 md:py-28"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* LEFT — FORM */}
        <Card
          className="
        border-border/60
        bg-background/80 backdrop-blur
        shadow-xl
      "
        >
          <CardContent className="p-8 md:p-10">
            {/* Header */}
            <div className="mb-8 space-y-3">
              <span className="text-sm font-medium text-purple-600">
                Contact
              </span>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Let’s Build Something Impactful
              </h2>

              <p className="leading-relaxed text-muted-foreground">
                Hiring, collaboration, or creative project — send your details
                and I’ll respond with next steps, timeline, and availability.
              </p>
            </div>

            {success ? (
              <div className="space-y-4 rounded-xl border border-green-500/30 bg-green-500/10 p-6 shadow-inner">
                <p className="font-semibold text-green-600">
                  ✅ Message received successfully
                </p>

                <p className="text-sm text-green-600/80">
                  Thanks for reaching out — I’ll reply via email shortly.
                </p>

                <Button
                  variant="outline"
                  onClick={() => setSuccess(false)}
                  className="border-green-500/40 hover:bg-green-500/10"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-6">
                {/* NAME */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Name</label>
                  <Input
                    name="name"
                    placeholder="Juan Dela Cruz"
                    required
                    className="focus-visible:ring-purple-600"
                  />
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    className="focus-visible:ring-purple-600"
                  />
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Project / Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project, goals, timeline, and deliverables…"
                    rows={5}
                    required
                    className="focus-visible:ring-purple-600"
                  />
                </div>

                {/* BUTTON */}
                <Button
                  type="submit"
                  className="
                    w-full text-base
                    bg-purple-600 hover:bg-purple-700
                    shadow-lg shadow-purple-600/30
                    flex items-center justify-center gap-2
                  "
                  disabled={loading}
                >
                  {loading ? (
                    "Sending Message..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground">
                  Usually replies within 24 hours.
                </p>
              </form>
            )}
          </CardContent>
        </Card>

        {/* RIGHT — PHOTO + TRUST PANEL */}
        <div className="mx-auto w-full max-w-md space-y-8">
          {/* PORTRAIT */}
          <div className="relative aspect-square w-full">
            {/* PURPLE RING */}
            <div className="absolute inset-0 -z-10 rounded-full bg-purple-600/20 blur-2xl" />

            <Image
              src="/images/myphoto.png"
              alt="JD portrait"
              fill
              priority
              className="
            rounded-full object-cover
          "
            />
          </div>

          {/* TRUST PANEL */}
          <div className="space-y-3 text-center">
            <p className="font-semibold text-lg">
              Available for freelance & project-based work
            </p>

            <p className="text-sm text-muted-foreground">
              Videography • Editing • Design • Web Development • Social Media
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-purple-600/30 bg-purple-600/10 px-4 py-1 text-xs text-purple-600">
              Open to Opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
