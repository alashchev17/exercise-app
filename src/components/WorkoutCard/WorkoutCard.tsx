import Image from 'next/image'

import { Heading } from '@/components/UI/Heading'
import { Paragraph } from '@/components/UI/Paragraph'
import type { GetProgramQuery } from '@/generated/graphql'
import dynamic from 'next/dynamic'

interface WorkoutCardProps {
  workout: NonNullable<GetProgramQuery['program']>['workouts'][number]
}
const DynamicWorkoutCounter = dynamic(() => import('./WorkoutCounter'), { ssr: false })

export const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  const { title, exercises, image, bodyPart, description } = workout

  return (
    <div className="flex flex-col items-start gap-4 border px-4 py-4 shadow-lg">
      <div className="flex justify-between gap-2 items-center">
        <div className="flex flex-col gap-2">
          <Heading level={6}>{title}</Heading>
          <Paragraph>{description}</Paragraph>
          <Paragraph>Body part: {bodyPart}</Paragraph>
        </div>
        <Image src={image?.url!} width={75} height={75} alt={title!} className="object-cover w-[75px] h-[75px] rounded-xl" />
      </div>
      <div className="flex flex-col gap-1 border-t w-full pt-4" suppressHydrationWarning>
        <Paragraph>Amount of exercises: {exercises.length}</Paragraph>
        <DynamicWorkoutCounter workoutId={workout.id} />
      </div>
    </div>
  )
}
