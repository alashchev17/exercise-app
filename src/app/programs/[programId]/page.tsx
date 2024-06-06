import type { Metadata } from 'next'

import { sdk } from '@/lib/client'
import { Heading } from '@/components/UI/Heading'
import { TransitionLink } from '@/components/UI/TransitionLink'
import { WorkoutCard } from '@/components/WorkoutCard'

interface ProgramPageProps {
  params: {
    programId: string
  }
}

async function getProgramById(programId: string) {
  const response = await sdk.getProgram({ programId })
  return response.data.program
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const program = await getProgramById(params.programId)
  if (!program) {
    return {
      title: 'Program not found',
    }
  }

  return {
    title: `Program | ${program.title}`,
  }
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const program = await getProgramById(params.programId)

  if (!program) {
    return (
      <main className={`flex min-h-[calc(100dvh-70px)] flex-col items-center gap-6 pt-[calc(2rem+70px)] px-6`}>
        Program which you are looking for does not exist
        <TransitionLink href={'/'}>Go back</TransitionLink>
      </main>
    )
  }

  const workouts = program.workouts

  return (
    <main className={`flex min-h-[calc(100dvh-70px)] flex-col items-center gap-6 pt-[calc(2rem+70px)] px-6`}>
      <Heading level={6} className="w-full text-center pb-4 text-zinc-400 border-b">
        {program.title}
      </Heading>
      <Heading level={1} className="text-center">
        Available Workouts
      </Heading>
      <div className="w-full flex flex-col items-stretch gap-4">
        {workouts.map((workout) => (
          <TransitionLink key={workout.id} href={`/workouts/${workout.id}`}>
            <WorkoutCard workout={workout} />
          </TransitionLink>
        ))}
      </div>
    </main>
  )
}
