import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { useRef } from "react"

export default function Component() {
  const formRef = useRef<HTMLFormElement>(null)

    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
  return (
    <div className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e1e] to-[#000000] opacity-90" />
      <Header onContactClick={scrollToForm} />
      <main className="relative z-10 flex-1">
        <Hero  onContactClick={scrollToForm} />
        <Services />
        <Testimonials />
        <Contact ref={formRef} />
      </main>
     <Footer />
    </div>
  )
}

