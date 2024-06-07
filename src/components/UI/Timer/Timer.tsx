'use client'

import { Dispatch, SetStateAction, useEffect } from 'react'
import { useCountdown } from 'usehooks-ts'

interface TimerProps {
  countStart: number
  onFinished: () => void
  isTimerStarted: boolean
  setIsTimerStarted: Dispatch<SetStateAction<boolean>>
}

export const Timer = ({ countStart, onFinished, setIsTimerStarted, isTimerStarted }: TimerProps) => {
  const [count, { startCountdown, stopCountdown, resetCountdown }] = useCountdown({
    countStart,
    intervalMs: 1000,
    countStop: 0,
  })

  const handleTimerStart = () => {
    startCountdown()
    setIsTimerStarted(true)
  }

  const handleTimerPause = () => {
    stopCountdown()
    setIsTimerStarted(false)
  }

  useEffect(() => {
    let timeoutID: NodeJS.Timeout
    if (count === 0) {
      timeoutID = setTimeout(() => {
        resetCountdown()
        setIsTimerStarted(false)
        onFinished()
      }, 1000)
    }

    return () => {
      clearTimeout(timeoutID)
    }
  }, [count, onFinished, resetCountdown, setIsTimerStarted])

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="flex w-[40%] items-center justify-center rounded-[50%] border-8 border-orange-500"
        style={{
          aspectRatio: '1',
        }}
      >
        <p className="text-black text-4xl font-semibold">{count}s</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg aria-disabled:bg-gray-300 aria-disabled:text-gray-800 transition-all"
          aria-disabled={isTimerStarted}
          disabled={isTimerStarted}
          onClick={handleTimerStart}
        >
          Start
        </button>
        <button
          className="px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg aria-disabled:bg-gray-300 aria-disabled:text-gray-800 transition-all"
          aria-disabled={!isTimerStarted}
          disabled={!isTimerStarted}
          onClick={handleTimerPause}
        >
          Pause
        </button>
      </div>
    </div>
  )
}
