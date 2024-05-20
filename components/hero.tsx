import React from 'react'
import { Button } from './ui/button'

interface HeroProps {
  onContactClick: () => void
}
function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="flex h-[70dvh] flex-col items-center justify-center px-6 sm:px-8 md:px-10">
    <h1 className="text-center text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl md:text-6xl">
      The Syndicate
    </h1>
    <p className="mt-4 max-w-xl text-center text-lg text-gray-400">
      Access High-Stakes Opportunities with Intelligence and Anonymity
    </p>
    <Button className="mt-8" onClick={onContactClick}>
      Join Now
    </Button>
  </section>
  )
}

export default Hero