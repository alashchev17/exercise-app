import type { Metadata } from 'next'

import { sdk } from '@/lib/client'
import { TransitionLink } from '@/components/UI/TransitionLink'
import { ExerciseApp } from '@/components/ExerciseApp'

interface ExercisePageProps {
  params: {
    workoutId: string
    exerciseId: string
  }
}

async function getExerciseById(exerciseId: string) {
  const response = await sdk.getExercise({ exerciseId })
  return response.data.exercises[0]
}

async function getExercisesForWorkout(workoutId: string) {
  const response = await sdk.getWorkout({ workoutId })
  return response.data.workout?.exercises
}

export async function generateMetadata({ params }: ExercisePageProps): Promise<Metadata> {
  const exercise = await getExerciseById(params.exerciseId)
  if (!exercise) {
    return {
      title: 'Exercise not found',
    }
  }

  return {
    title: `Exercise | ${exercise.title}`,
  }
}

export default async function ExercisePage({ params }: ExercisePageProps) {
  const currentExercise = await getExerciseById(params.exerciseId)
  const exercises = await getExercisesForWorkout(params.workoutId)
  if (!currentExercise || !exercises) {
    return (
      <main className={`flex min-h-[100dvh] flex-col items-center gap-6 pt-[2rem] px-6`}>
        Exercise which you are looking for does not exist
        <TransitionLink href={'/'}>Go back</TransitionLink>
      </main>
    )
  }

  return (
    <main className={`min-h-[100dvh]`}>
      <ExerciseApp exercise={currentExercise} exercises={exercises} workoutId={params.workoutId} />
    </main>
  )
}
