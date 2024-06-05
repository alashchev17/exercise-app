import Image from 'next/image'

import { Heading } from '@/components/UI/Heading'
import { Paragraph } from '@/components/UI/Paragraph'
import type { GetProgramQuery } from '@/generated/graphql'

interface WorkoutCardProps {
  workout: NonNullable<GetProgramQuery['program']>['workouts'][number]
}

export const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  const { title, exercises, image, bodyPart, description } = workout
  return (
    <div className="flex flex-col items-start gap-4 border px-4 py-4 shadow-lg">
      <div className="flex justify-between gap-2 items-center">
        <div className="flex flex-col gap-2">
          <Heading level={6}>{title}</Heading>
          <Paragraph>{description}</Paragraph>
        </div>
        <Image src={image?.url!} width={75} height={75} alt={title!} className="object-cover w-[75px] h-[75px] rounded-xl" />
      </div>
      <Paragraph>Amount of exercises: {exercises.length}</Paragraph>
    </div>
  )
}
