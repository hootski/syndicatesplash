import React from 'react'
import Link from 'next/link'
import { SkullIcon } from '@/icons/allicons'
import { Button } from './ui/button'

interface HeaderProps {
    onContactClick: () => void
}

function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="relative z-10 flex h-16 items-center justify-between px-6 sm:px-8 md:px-10">
    <Link className="flex items-center" href="#">
      <SkullIcon className="h-6 w-6 text-gray-400" />
      <span className="ml-2 text-lg font-medium text-gray-400">Syndicate</span>
    </Link>
   
    <Button className="hidden sm:inline-flex" onClick={onContactClick}>
      Join the Syndicate
    </Button>
  </header>
  )
}

export default Header