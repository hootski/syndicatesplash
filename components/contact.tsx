import React from 'react'
import { useRef } from 'react'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { forwardRef } from 'react'

const Contact = forwardRef<HTMLFormElement>((props, ref) => {

    

  return (
    
    <section className="bg-gray-900 py-16 px-6 sm:px-8 md:px-10" ref={ref}>
    <div className="mx-auto max-w-7xl">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Contact Us</h2>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <form className="space-y-4">
            <div>
              <Label className="text-gray-400" htmlFor="name">
                Name
              </Label>
              <Input id="name" placeholder="Enter your name" type="text" />
            </div>
            <div>
              <Label className="text-gray-400" htmlFor="email">
                Email
              </Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div>
              <Label className="text-gray-400" htmlFor="message">
                Message
              </Label>
              <Textarea id="message" placeholder="Enter your message" rows={4} />
            </div>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </div>
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-200">Headquarters</h3>
              <p className="text-gray-400">123 Syndicate Way, Shadowland, CA 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-200">Phone</h3>
              <p className="text-gray-400">(555) 555-5555</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-200">Email</h3>
              <p className="text-gray-400">info@syndicate.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
})

export default Contact