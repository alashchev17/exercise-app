'use client'

import { usePathname } from 'next/navigation'

import { BurgerMenu } from '@/components/BurgerMenu'
import { TransitionLink } from '../TransitionLink'
import Link from 'next/link'

export const Header = () => {
  const pathname = usePathname()
  return (
    <header
      className={`fixed w-full h-[70px] px-4 border-b flex justify-between bg-white items-center z-50 ${
        pathname.includes('exercises') ? 'hidden' : ''
      }`}
    >
      {pathname !== '/' ? <TransitionLink href="/">Exercise App</TransitionLink> : <Link href="/">Exercise App</Link>}
      <BurgerMenu />
    </header>
  )
}
