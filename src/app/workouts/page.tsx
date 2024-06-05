import type { Metadata } from 'next'

import { sdk } from '@/lib/client'
import { Heading } from '@/components/UI/Heading'
import { TransitionLink } from '@/components/UI/TransitionLink'
import { WorkoutCard } from '@/components/WorkoutCard'

async function getWorkouts() {
  const response = await sdk.getWorkouts()
  return response.data.workouts
}

export async function generateMetadata(): Promise<Metadata> {
  const workouts = await getWorkouts()
  if (!workouts) {
    return {
      title: '404 Not Found',
    }
  }

  return {
    title: `All Workouts`,
  }
}

export default async function WorkoutsPage() {
  const workouts = await getWorkouts()

  if (!workouts) {
    return (
      <main className={`flex min-h-[calc(100dvh-70px)] flex-col items-center gap-6 pt-[calc(2rem+70px)] px-6`}>
        Something went wrong.
        <TransitionLink href={'/'}>Go back</TransitionLink>
      </main>
    )
  }

  return (
    <main className={`flex min-h-[calc(100dvh-70px)] flex-col items-center gap-6 pt-[calc(2rem+70px)] px-6`}>
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
