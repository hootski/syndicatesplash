import React from 'react'
import Link from 'next/link'
import { SkullIcon } from '@/icons/allicons'

function Footer() {
  return (
    <footer className="relative z-10 bg-gray-900 py-6 px-6 sm:px-8 md:px-10">
    <div className="mx-auto max-w-7xl flex items-center justify-between">
      <div className="flex items-center">
        <SkullIcon className="h-6 w-6 text-gray-400" />
        <span className="ml-2 text-sm font-medium text-gray-400">© 2024 Syndicate. All rights reserved.</span>
      </div>
      <nav className="hidden space-x-4 sm:flex">
        <Link className="text-sm font-medium text-gray-400 hover:text-gray-300" href="#">
          Privacy Policy
        </Link>
        <Link className="text-sm font-medium text-gray-400 hover:text-gray-300" href="#">
          Terms of Service
        </Link>
      </nav>
    </div>
  </footer>
  )
}

export default Footer