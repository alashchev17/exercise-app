interface ParagraphProps {
  children: React.ReactNode
  className?: string
}

export const Paragraph = ({ children, className = '' }: ParagraphProps) => {
  return <p className={`text-sm text-zinc-400 leading-[1.35] ${className}`}>{children}</p>
}
