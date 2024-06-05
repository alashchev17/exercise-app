'use client'

import { usePathname } from 'next/navigation'
import { TransitionLink } from '@/components/UI/TransitionLink'

interface BurgerNavigationProps {
  isOpen: boolean
  closeBurgerNavigation: () => void
}

const linksMap = [
  {
    label: 'Homepage',
    href: '/',
    isActive: (pathname: string) => pathname === '/',
  },
  {
    label: 'Programs',
    href: '/programs',
    isActive: (pathname: string) => pathname === '/programs',
  },
  {
    label: 'Workouts',
    href: '/workouts',
    isActive: (pathname: string) => pathname === '/workouts',
  },
]

export const BurgerNavigation = ({ isOpen, closeBurgerNavigation }: BurgerNavigationProps) => {
  const pathname = usePathname()
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center border-l ${
        isOpen ? 'translate-x-0' : 'translate-x-[100%]'
      } transition-transform ease-in-out duration-500 ${isOpen ? '' : 'delay-700'}`}
    >
      <ul className="flex flex-col gap-4">
        {linksMap.map(({ label, href, isActive }) => {
          if (isActive(pathname)) {
            return (
              <li key={label} onClick={closeBurgerNavigation} className="text-2xl font-bold py-2 px-4 text-black text-center">
                {label}
              </li>
            )
          }
          return (
            <li key={label} onClick={closeBurgerNavigation} className="text-2xl font-semibold py-2 px-4 text-zinc-500 text-center">
              <TransitionLink href={href}>{label}</TransitionLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
