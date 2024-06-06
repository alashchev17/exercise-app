'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, { useCallback, useRef } from 'react'
import Slider from 'react-slick'
import { useState } from 'react'
import type { GetWorkoutQuery } from '@/generated/graphql'

import { TransitionLink } from '@/components/UI/TransitionLink'
import { Heading } from '@/components/UI/Heading'
import { Exercise } from './Exercise'
import { Break } from './Break'
import { ExerciseWithBreak, mapExercisesToSlides } from '@/lib/utils'
import { SliderControls } from './SliderControls'
import { FinishedIcon } from '../Icons/FinishedIcon'

interface ExerciseAppProps {
  exercise: NonNullable<GetWorkoutQuery['workout']>['exercises'][number]
  exercises: NonNullable<GetWorkoutQuery['workout']>['exercises']
  workoutId: string
}

const BREAK_COUNT = 15

export const ExerciseApp = ({ exercises, workoutId }: ExerciseAppProps) => {
  const [isWorkoutFinished, setIsWorkoutFinished] = useState(false)

  const exercisesSlides: ExerciseWithBreak[] = mapExercisesToSlides(exercises)

  const [currentSlide, setCurrentSlide] = useState(1)
  const amountOfSlides = exercisesSlides.length

  let sliderRef = useRef<Slider | null>(null)

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    horizontal: true,
    arrows: false,
    swipe: false,
    afterChange: (currentSlide: number) => {
      setCurrentSlide(currentSlide + 1)
    },
    beforeChange: (currentSlide: number) => {
      if (currentSlide + 1 === amountOfSlides) {
        setIsWorkoutFinished(true)
        const amountOfDoneWorkouts = localStorage.getItem(workoutId)
        if (!amountOfDoneWorkouts) {
          localStorage.setItem(workoutId, '1')
        } else {
          localStorage.setItem(workoutId, `${Number(amountOfDoneWorkouts) + 1}`)
        }
        setCurrentSlide(1)
      }
    },
  }

  const handleNextSlide = useCallback(() => {
    if (sliderRef) {
      sliderRef.current?.slickNext()
    }
  }, [])

  const handlePrevSlide = () => {
    if (sliderRef) {
      if (currentSlide !== 1) {
        sliderRef.current?.slickPrev()
        setCurrentSlide((prev) => prev - 1)
      }
    }
  }

  return (
    <div className={isWorkoutFinished ? 'max-h-screen overflow-hidden py-4 flex flex-col items-center justify-center' : ''}>
      <div className="slider-container">
        <Slider {...settings} ref={sliderRef}>
          {exercisesSlides.map((exercise) =>
            exercise.exercise.isBreak ? (
              <Break key={`${exercise.exercise.id}_break`} exercise={exercise} countForTimer={BREAK_COUNT} onFinished={handleNextSlide} />
            ) : (
              <Exercise
                key={exercise.exercise.id}
                exercise={exercise}
                countForTimer={exercise.exercise.duration!}
                onFinished={handleNextSlide}
              />
            )
          )}
        </Slider>
        {!isWorkoutFinished && (
          <SliderControls
            next={handleNextSlide}
            prev={handlePrevSlide}
            prevDisabled={currentSlide === 1 || currentSlide === amountOfSlides}
            nextDisabled={currentSlide === amountOfSlides}
          />
        )}
      </div>
      <div
        className={`top-0 left-0 fixed h-screen w-screen flex flex-col justify-center gap-20 items-center transition-all ease-in-out duration-500 ${
          isWorkoutFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-100%]'
        }`}
      >
        <Heading level={1} className="w-full text-center pb-4">
          Workout is completed!
        </Heading>
        <FinishedIcon fill={'#0AD84B'} width={200} height={200} />
        <TransitionLink
          label="Return to Workout"
          href={`/workouts/${workoutId}`}
          className="inline-block w-[calc(100%-2rem)] px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg z-10"
        />
      </div>
    </div>
  )
}
