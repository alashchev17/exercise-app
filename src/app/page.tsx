import { Heading } from '@/components/UI/Heading'
import { TransitionLink } from '@/components/UI/TransitionLink'

export default async function Home() {
  return (
    <main className={`flex min-h-[calc(100dvh-70px)] flex-col items-center justify-center gap-6 pt-[calc(1rem+70px)] px-6`}>
      <Heading level={1}>Let your body feel better!</Heading>
      <Heading level={3}>Check out our programs and let it go!</Heading>
      <TransitionLink
        href="/programs"
        className="px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg"
        label="Start develop yourself now"
      />
    </main>
  )
}
