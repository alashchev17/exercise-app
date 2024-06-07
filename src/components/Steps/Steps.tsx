'use client'

import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import { Paragraph } from '@/components/UI/Paragraph'
import { GetWorkoutQuery } from '@/generated/graphql'

interface StepsProps {
  steps: NonNullable<GetWorkoutQuery['workout']>['exercises'][number]['steps']
}

export const Steps = ({ steps }: StepsProps) => {
  return (
    <Accordion>
      <AccordionItem header="Exercise steps (click to expand)" className={`flex flex-col gap-4 border-2 p-3`}>
        {steps.map((step, index) => (
          <Paragraph key={step.id} className="pt-2">
            {index + 1}. {step.title}
          </Paragraph>
        ))}
      </AccordionItem>
    </Accordion>
  )
}
