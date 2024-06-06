'use client'

import { Paragraph } from '@/components/UI/Paragraph'

interface WorkoutCounterProps {
  workoutId: string
}

export default function WorkoutCounter({ workoutId }: WorkoutCounterProps) {
  const workoutCounter = typeof window !== 'undefined' && window.localStorage.getItem(workoutId)
  return (
    <>
      {workoutCounter ? (
        <Paragraph>Times completed: {workoutCounter}</Paragraph>
      ) : (
        <Paragraph>{"You didn't start this workout yet"}</Paragraph>
      )}
    </>
  )
}
