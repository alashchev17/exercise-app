import { ProgramCard } from '@/components/ProgramCard'
import { Heading } from '@/components/UI/Heading'
import { TransitionLink } from '@/components/UI/TransitionLink'
import { sdk } from '@/lib/client'

export default async function ProgramsPage() {
  const response = await sdk.getPrograms()
  const programs = response.data.programs
  return (
    <main className={`flex min-h-[calc(100dvh-70px)] flex-col items-center gap-6 pt-[calc(2rem+70px)] px-6`}>
      <Heading level={1}>Available Programs</Heading>
      <div className="w-full flex flex-col items-stretch gap-4">
        {programs.map((program) => (
          <TransitionLink key={program.id} href={`/programs/${program.id}`}>
            <ProgramCard program={program} />
          </TransitionLink>
        ))}
      </div>
    </main>
  )
}
