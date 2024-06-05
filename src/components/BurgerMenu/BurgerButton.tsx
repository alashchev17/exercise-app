'use client'

interface BurgerButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export const BurgerButton = ({ children, onClick }: BurgerButtonProps) => {
  return <button onClick={onClick}>{children}</button>
}
