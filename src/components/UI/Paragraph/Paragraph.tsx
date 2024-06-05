interface ParagraphProps {
  children: React.ReactNode
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="text-sm text-zinc-400 leading-[1.35]">{children}</p>
}
