'use client'

import { useState } from 'react'
import { Burger } from '@/components/Icons/Burger'
import { BurgerButton, BurgerNavigation } from '@/components/BurgerMenu'

export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <BurgerButton onClick={() => setIsMenuOpen((prev) => !prev)}>
        <Burger fill={'#000000'} width={30} height={30} />
      </BurgerButton>
      <BurgerNavigation isOpen={isMenuOpen} closeBurgerNavigation={() => setIsMenuOpen(false)} />
    </>
  )
}
