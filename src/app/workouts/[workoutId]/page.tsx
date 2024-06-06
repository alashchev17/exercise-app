import type { Metadata } from 'next'

import { sdk } from '@/lib/client'
import { Heading } from '@/components/UI/Heading'
import { TransitionLink } from '@/components/UI/TransitionLink'
import { ExerciseCard } from '@/components/ExerciseCard'

interface ProgramPageProps {
  params: {
    workoutId: string
  }
}

async function getWorkoutById(workoutId: string) {
  const response = await sdk.getWorkout({ workoutId })
  return response.data.workout
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const program = await getWorkoutById(params.workoutId)
  if (!program) {
    return {
      title: 'Program not found',
    }
  }

  return {
    title: `Workout | ${program.title}`,
  }
}

export default async function WorkoutPage({ params }: ProgramPageProps) {
  const workout = await getWorkoutById(params.workoutId)

  if (!workout) {
    return (
      <main className={`flex min-h-[calc(100dvh-70px)] flex-col items-center gap-6 pt-[calc(2rem+70px)] px-6`}>
        Workout which you are looking for does not exist
        <TransitionLink href={'/'}>Go back</TransitionLink>
      </main>
    )
  }

  const exercises = workout.exercises

  return (
    <main className={`flex min-h-[calc(100dvh-70px)] flex-col items-center gap-6 py-[calc(2rem+70px)] px-6`}>
      <Heading level={6} className="w-full text-center pb-4 text-zinc-400 border-b">
        {workout.title}
      </Heading>
      <Heading level={1} className="text-center">
        Exercises
      </Heading>
      <div className="w-full flex flex-col items-stretch gap-4">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
      <TransitionLink
        href={`/workouts/${workout.id}/exercises/${exercises[0].id}`}
        className="fixed left-4 bottom-4 w-[calc(100%-2rem)] px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg z-10"
        label="Start Workout Session"
      />
    </main>
  )
}
