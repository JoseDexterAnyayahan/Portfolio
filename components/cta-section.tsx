"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Mail, Sparkles, CheckCircle2 } from "lucide-react";

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
      className="relative overflow-hidden pt-8 pb-16 md:py-28"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* LEFT — FORM */}
        <Card className="group border-purple-600/10 bg-background/50 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 animate-fade-up">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <CardContent className="p-8 md:p-10 relative">
            <div className="mb-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 backdrop-blur-sm">
                <Mail size={16} className="text-purple-600" />
                <span className="text-sm font-medium text-purple-600">
                  Contact
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Let's Build Something Impactful
                </span>
              </h2>

              <p className="leading-relaxed text-muted-foreground">
                Hiring, collaboration, or creative project — send your details
                and I'll respond with next steps, timeline, and availability.
              </p>

              <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-transparent rounded-full" />
            </div>

            {success ? (
              <div className="space-y-6 rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-green-500/5 p-8 shadow-inner animate-fade-up">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30">
                    <CheckCircle2 className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-green-600 text-lg">
                      Message Sent Successfully!
                    </p>
                    <p className="text-sm text-green-600/80">
                      I'll get back to you shortly
                    </p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => setSuccess(false)}
                  className="w-full border-green-500/40 hover:bg-green-500/10 hover:border-green-500/60 transition-all"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Name</label>
                  <Input
                    name="name"
                    placeholder="Juan Dela Cruz"
                    required
                    className="focus-visible:ring-purple-600 border-purple-600/10 focus-visible:border-purple-600/30 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    className="focus-visible:ring-purple-600 border-purple-600/10 focus-visible:border-purple-600/30 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Project / Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project, goals, timeline, and deliverables…"
                    rows={5}
                    required
                    className="focus-visible:ring-purple-600 border-purple-600/10 focus-visible:border-purple-600/30 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="group/btn w-full text-base bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 shadow-lg shadow-purple-600/30 hover:shadow-xl hover:shadow-purple-600/40 flex items-center justify-center gap-2 transition-all duration-300"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </div>
                  ) : (
                    <>
                      <Send className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                  <span className="inline-block w-1 h-1 bg-purple-600 rounded-full animate-pulse" />
                  Usually replies within 24 hours
                </p>
              </form>
            )}
          </CardContent>
        </Card>

        {/* RIGHT — PHOTO + TRUST PANEL */}
        <div className="mx-auto w-full max-w-md space-y-8 animate-fade-up animate-delay-2">
          <div className="relative group/photo">
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-purple-600/20 blur-2xl animate-spin-slow" />
              <div className="absolute inset-0 rounded-full bg-purple-600/10 blur-2xl group-hover/photo:bg-purple-600/20 transition-all duration-500" />

              <div className="relative h-full w-full rounded-full overflow-hidden ring-4 ring-purple-600/20 group-hover/photo:ring-purple-600/40 transition-all duration-300">
                <Image
                  src="/images/myphoto.png"
                  alt="JD portrait"
                  fill
                  priority
                  className="object-cover group-hover/photo:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600/20 rounded-full animate-pulse" />
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-violet-600/20 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>

          <div className="space-y-4 text-center animate-fade-up animate-delay-3">
            <div className="space-y-3 p-6 rounded-2xl border border-purple-600/10 bg-background/50 backdrop-blur-sm hover:border-purple-600/30 hover:bg-purple-600/5 transition-all duration-300">
              <div className="flex items-center justify-center gap-2">
                <Sparkles size={20} className="text-purple-600 animate-pulse" />
                <p className="font-semibold text-lg bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Available for Freelance & Projects
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Videography • Editing • Design • Web Development • Social Media
              </p>

              <div className="inline-flex items-center gap-2 rounded-full border border-purple-600/30 bg-purple-600/10 px-4 py-2 text-sm font-medium text-purple-600 shadow-sm hover:bg-purple-600/20 hover:scale-105 transition-all duration-300">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Open to Opportunities
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 -z-10 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </section>
  );
}
