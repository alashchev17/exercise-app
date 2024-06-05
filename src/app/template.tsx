'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { animatePageIn } from '@/animations'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  useEffect(() => {
    animatePageIn()
  }, [pathname])

  return (
    <div>
      <div id="transition-element" className="w-screen h-screen bg-white z-50 fixed top-0 left-0"></div>
      {children}
    </div>
  )
}
