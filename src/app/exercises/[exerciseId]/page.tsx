import type { Metadata } from 'next'

import { sdk } from '@/lib/client'
import { Heading } from '@/components/UI/Heading'
import { TransitionLink } from '@/components/UI/TransitionLink'
import { WorkoutCard } from '@/components/WorkoutCard'

interface ProgramPageProps {
  params: {
    exerciseId: string
  }
}

async function getExerciseById(exerciseId: string) {
  const response = await sdk.getExercise({ exerciseId })
  return response.data.exercises[0]
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const program = await getExerciseById(params.exerciseId)
  if (!program) {
    return {
      title: 'Program not found',
    }
  }

  return {
    title: `Exercise | ${program.title}`,
  }
}

export default async function ExercisePage({ params }: ProgramPageProps) {
  const exercise = await getExerciseById(params.exerciseId)

  if (!exercise) {
    return (
      <main className={`flex min-h-[calc(100dvh-70px)] flex-col items-center gap-6 pt-[calc(2rem+70px)] px-6`}>
        Exercise which you are looking for does not exist
        <TransitionLink href={'/'}>Go back</TransitionLink>
      </main>
    )
  }

  return (
    <main className={`flex min-h-[calc(100dvh-70px)] flex-col items-center gap-6 pt-[calc(2rem+70px)] px-6`}>
      <Heading level={6} className="w-full text-center pb-4 text-zinc-400 border-b">
        {exercise.title}
      </Heading>
    </main>
  )
}
