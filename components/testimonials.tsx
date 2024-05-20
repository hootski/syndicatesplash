import React from 'react'

function Testimonials() {
  return (
    <section className="bg-gray-900 py-16 px-6 sm:px-8 md:px-10">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
        What Our Members Say
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <blockquote className="text-gray-400">
            The Syndicate is awesome. I trust in them being sharp and staying on top of things.
          </blockquote>
          <div className="mt-4 flex items-center">
           
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-200">Jane Doe</div>
              <div className="text-sm text-gray-400">CEO, Acme Corp</div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <blockquote className="text-gray-400">
            The Syndicates professionalism and strategic approach set them apart. 
            Their expertise and attention to detail gave me confidence in every step of the process. 
            Being part of The Syndicate isn&t just about the thrill of the game; it about knowing youre in the 
            best possible hands.
          </blockquote>
          <div className="mt-4 flex items-center">
     
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-200">John Smith</div>
              <div className="text-sm text-gray-400">Founder, Syndicate Solutions</div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <blockquote className="text-gray-400">
            Joining The Syndicate was an eye-opener. Their smart strategies and professional management
             make it clear why theye the best in the business. I never felt more prepared and supported in any contest. 
             The Syndicates elite team ensures that every member is part of a winning strategy.
          </blockquote>
          <div className="mt-4 flex items-center">
         
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-200">Michael Johnson</div>
              <div className="text-sm text-gray-400">COO, Syndicate Enterprises</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials