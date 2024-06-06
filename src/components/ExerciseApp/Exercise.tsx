import { Heading } from '@/components/UI/Heading'
import { Timer } from '@/components/UI/Timer'
import type { ExerciseWithBreak } from '@/lib/utils'
import { Video } from '../UI/Video'

interface ExerciseProps {
  exercise: ExerciseWithBreak
  countForTimer: number
  onFinished: () => void
}

export const Exercise = ({ exercise, countForTimer, onFinished }: ExerciseProps) => {
  const exerciseToRender = exercise.exercise
  return (
    <div className="py-4 flex flex-col gap-8 w-screen min-h-screen">
      <Heading level={2} className="w-full text-center pb-4 text-zinc-500 border-b">
        {exerciseToRender.title}
      </Heading>
      <Heading level={3} className="w-full text-center">
        {"It's time to focus on exercise!"}
      </Heading>
      <Video videoUrl={exerciseToRender.videoUrl!} />
      <Timer countStart={countForTimer} onFinished={onFinished} />
      <Heading level={3} className="w-full text-center pb-20">
        Current set: {exerciseToRender.currentSet}
      </Heading>
    </div>
  )
}
