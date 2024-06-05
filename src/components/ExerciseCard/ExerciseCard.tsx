import Image from 'next/image'

import type { GetWorkoutQuery } from '@/generated/graphql'

import { Heading } from '@/components/UI/Heading'
import { Paragraph } from '@/components/UI/Paragraph'

interface ExerciseCardProps {
  exercise: NonNullable<GetWorkoutQuery['workout']>['exercises'][number]
}

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const { title, description, image, steps } = exercise

  return (
    <div className="flex flex-col items-start gap-4 border px-4 py-4 shadow-lg">
      <div className="flex justify-between gap-2 items-center">
        <div className="flex flex-col gap-2">
          <Heading level={6}>{title}</Heading>
          <Paragraph>{description}</Paragraph>
        </div>
        <Image src={image?.url!} width={75} height={75} alt={title!} className="object-cover w-[75px] h-[75px] rounded-xl" />
      </div>
      <Heading level={6}>Steps</Heading>
      <div className="flex flex-col gap-3">
        {steps.map((step, index) => (
          <Paragraph key={step.id}>
            {index + 1}. {step.title}
          </Paragraph>
        ))}
      </div>
    </div>
  )
}
