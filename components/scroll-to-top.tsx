"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 500)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!show) return null

  return (
<div className="fixed bottom-6 right-6 z-50 animate-fade-up hidden lg:block">
  <Button
    size="icon"
    onClick={scrollTop}
    className="rounded-full shadow-lg"
  >
    <ArrowUp className="h-5 w-5" />
  </Button>
</div>
  )
}
