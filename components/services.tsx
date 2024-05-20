import React from 'react'
import { BriefcaseIcon } from "@/icons/allicons"
import { ShieldIcon } from "@/icons/allicons"
import { BoltIcon } from "@/icons/allicons"
function Services() {
  return (
    <section className="bg-gray-900 py-16 px-6 sm:px-8 md:px-10">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Our Services</h2>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <BriefcaseIcon className="h-8 w-8 text-gray-400" />
          <h3 className="mt-4 text-xl font-bold text-gray-200">Winning Strategy Development</h3>
          <p className="mt-2 text-gray-400">Our expert team, with proven victories, uses advanced models to maximize our group's winning chances.</p>
        </div>
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <ShieldIcon className="h-8 w-8 text-gray-400" />
          <h3 className="mt-4 text-xl font-bold text-gray-200">Group Entry Management</h3>
          <p className="mt-2 text-gray-400">We handle all logistics and enforce strict practices, ensuring every member’s picks are accurately managed for equal winning opportunities.</p>
        </div>
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <BoltIcon className="h-8 w-8 text-gray-400" />
          <h3 className="mt-4 text-xl font-bold text-gray-200">Winnings Distribution</h3>
          <p className="mt-2 text-gray-400">When we win, we faciliate the process of fair and transparent distribution of the prize money among all group members, ensuring everyone gets their share.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services