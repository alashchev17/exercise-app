'use client'

import { useEffect, useState } from 'react'
import { useCountdown } from 'usehooks-ts'

interface TimerProps {
  countStart: number
  onFinished: () => void
}

export const Timer = ({ countStart, onFinished }: TimerProps) => {
  const [count, { startCountdown, stopCountdown, resetCountdown }] = useCountdown({
    countStart,
    intervalMs: 1000,
    countStop: 0,
  })

  const [isStarted, setIsStarted] = useState(false)

  const handleTimerStart = () => {
    startCountdown()
    setIsStarted(true)
  }

  const handleTimerPause = () => {
    stopCountdown()
    setIsStarted(false)
  }

  useEffect(() => {
    let timeoutID: NodeJS.Timeout
    if (count === 0) {
      timeoutID = setTimeout(() => {
        resetCountdown()
        setIsStarted(false)
        onFinished()
      }, 1000)
    }

    return () => {
      clearTimeout(timeoutID)
    }
  }, [count, onFinished, resetCountdown])

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
          className="px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg aria-disabled:bg-gray-400 aria-disabled:text-gray-800 transition-all"
          aria-disabled={isStarted}
          disabled={isStarted}
          onClick={handleTimerStart}
        >
          Start
        </button>
        <button
          className="px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg aria-disabled:bg-gray-400 aria-disabled:text-gray-800 transition-all"
          aria-disabled={!isStarted}
          disabled={!isStarted}
          onClick={handleTimerPause}
        >
          Pause
        </button>
      </div>
    </div>
  )
}
