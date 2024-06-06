import { GetWorkoutQuery } from '@/generated/graphql'

export type ExerciseWithBreak = {
  exercise: NonNullable<GetWorkoutQuery['workout']>['exercises'][number] & {
    currentSet: number
    isBreak: boolean
  }
}

export const mapExercisesToSlides = (exercises: NonNullable<GetWorkoutQuery['workout']>['exercises']): ExerciseWithBreak[] => {
  return exercises.flatMap((exercise) => {
    const newExercises: ExerciseWithBreak[] = []
    for (let i = 0; i < exercise.repetitions!; i++) {
      newExercises.push({ exercise: { ...exercise, currentSet: i + 1, isBreak: false } })
      newExercises.push({ exercise: { ...exercise, currentSet: i + 1, isBreak: true } })
    }
    return newExercises
  })
}
