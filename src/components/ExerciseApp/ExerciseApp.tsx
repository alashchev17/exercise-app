'use client'

import { useEffect, useState } from 'react'
import { useCountdown } from 'usehooks-ts'
import type { GetWorkoutQuery } from '@/generated/graphql'

import { TransitionLink } from '@/components/UI/TransitionLink'
import { Heading } from '@/components/UI/Heading'
import { Timer } from '@/components/UI/Timer'

interface ExerciseAppProps {
  exercise: NonNullable<GetWorkoutQuery['workout']>['exercises'][number]
  exercises: NonNullable<GetWorkoutQuery['workout']>['exercises']
  workoutId: string
}

export const ExerciseApp = ({ exercises, workoutId }: ExerciseAppProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const amountOfSlides = exercises.length
  const [currentIteration, setCurrentIteration] = useState(1)
  const [isStarted, setIsStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [breakCount, setBreakCount] = useState(15) // going to implement breakCount setup in settings here
  const [isWorkoutFinished, setIsWorkoutFinished] = useState(false)

  const [count, { startCountdown, stopCountdown, resetCountdown }] = useCountdown({
    // can't figure out why is my countStart taking breakCount on !isBreak and not on isBreak as it should take
    countStart: isBreak ? breakCount : exercises[currentSlide].duration ? exercises[currentSlide].duration! : 10,
    intervalMs: 1000,
    countStop: 0,
  })

  const handleTimerStart = () => {
    startCountdown()
    setIsStarted(true)
    setIsPaused(false)
  }

  const handleTimerPause = () => {
    stopCountdown()
    setIsPaused(true)
  }

  const handleTimerResume = () => {
    startCountdown()
    setIsPaused(false)
  }

  useEffect(() => {
    let timeoutID: NodeJS.Timeout
    if (count === 0) {
      setIsFinished(true)
      timeoutID = setTimeout(() => {
        setIsStarted(false)
        setIsPaused(false)
        setIsFinished(false)

        if (!isBreak) {
          setIsBreak(true)
          resetCountdown()
          return undefined
        }
        resetCountdown()
        setIsBreak(false)
        if (currentIteration === exercises[currentSlide].repetitions) {
          if (currentSlide === amountOfSlides - 1) {
            setIsWorkoutFinished(true)
            setIsStarted(false)
            setIsPaused(false)
            setIsFinished(false)
            return undefined
          }
          setCurrentSlide((prev) => prev + 1)
          setCurrentIteration(1)
          return undefined
        }
        setCurrentIteration((prev) => prev + 1)
      }, 1000)
    }

    return () => {
      clearTimeout(timeoutID)
    }
  }, [count, resetCountdown, isBreak, currentIteration, exercises, currentSlide, amountOfSlides])

  const handleBackExercise = () => {
    setCurrentIteration(1)
    setCurrentSlide((prev) => prev - 1)
  }

  const handleNextExercise = () => {
    setCurrentIteration(1)
    setCurrentSlide((prev) => prev + 1)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {isWorkoutFinished ? (
        <div className="h-full flex flex-col justify-between">
          <Heading level={1} className="w-full text-center pb-4">
            Workout is completed!
          </Heading>
          <TransitionLink
            label="Return to Workout"
            href={`/workouts/${workoutId}`}
            className="fixed left-4 bottom-4 w-[calc(100%-2rem)] px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg z-10"
          />
        </div>
      ) : (
        <>
          <Heading level={2} className="w-full text-center pb-4 text-zinc-500 border-b">
            {exercises[currentSlide].title}
          </Heading>
          <Heading level={3} className="w-full text-center pb-4">
            {isBreak ? "It's time for a break!" : "It's time to focus on exercise!"}
          </Heading>
          <Timer
            count={count}
            start={handleTimerStart}
            pause={handleTimerPause}
            resume={handleTimerResume}
            isStarted={isStarted}
            isPaused={isPaused}
            isFinished={isFinished}
          />
          <Heading level={3} className="w-full text-center pb-4">
            Current set: {currentIteration}
          </Heading>
          <div className="flex items-stretch gap-4">
            <button
              className="max-w-[calc(50%-8px)] px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg aria-disabled:bg-gray-400 aria-disabled:text-gray-800"
              aria-disabled={currentSlide === 0 || !isBreak}
              onClick={handleBackExercise}
            >
              Previous Exercise
            </button>
            <button
              className="max-w-[calc(50%-8px)] px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg aria-disabled:bg-gray-400 aria-disabled:text-gray-800"
              aria-disabled={currentSlide === amountOfSlides - 1 || !isBreak}
              onClick={handleNextExercise}
            >
              Next Exercise
            </button>
          </div>
        </>
      )}
    </div>
  )
}
