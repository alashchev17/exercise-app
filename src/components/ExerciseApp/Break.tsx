import { Heading } from '@/components/UI/Heading'
import { Timer } from '@/components/UI/Timer'
import { Video } from '@/components/UI/Video'
import type { ExerciseWithBreak } from '@/lib/utils'

interface ExerciseProps {
  exercise: ExerciseWithBreak
  countForTimer: number
  onFinished: () => void
}

export const Break = ({ exercise, countForTimer, onFinished }: ExerciseProps) => {
  const exerciseToRender = exercise.exercise
  return (
    <div className="py-4 flex flex-col gap-8 w-screen h-screen">
      <Heading level={2} className="w-full text-center pb-4 text-zinc-500 border-b">
        {exerciseToRender.title}
      </Heading>
      <Heading level={3} className="w-full text-center">
        {"It's time to break!"}
      </Heading>
      <Video videoUrl={exerciseToRender.videoUrl!} />
      <Timer countStart={countForTimer} onFinished={onFinished} />
      <Heading level={3} className="w-full text-center pb-4">
        Current set: {exerciseToRender.currentSet}
      </Heading>
    </div>
  )
}
