'use client'

import { useEffect, useState } from 'react'

interface TimerProps {
  count: number
  isStarted: boolean
  isPaused: boolean
  isFinished: boolean
  start: () => void
  pause: () => void
  resume: () => void
}

export const Timer = ({ count, isStarted, isPaused, isFinished, start, pause, resume }: TimerProps) => {
  const [timerHeight, setTimerHeight] = useState(300)

  useEffect(() => {
    const handleResize = () => {
      setTimerHeight(Number(((window.innerWidth / 100) * 55).toFixed(0)))
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div
        className="flex w-[65%] items-center justify-center rounded-[50%] border-8 border-orange-500"
        style={{
          height: `${timerHeight}px`,
        }}
      >
        <p className="text-black text-6xl font-semibold">{count}s</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg aria-disabled:bg-gray-400 aria-disabled:text-gray-800"
          aria-disabled={isStarted || isFinished}
          onClick={start}
        >
          Start
        </button>
        <button
          className="px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg aria-disabled:bg-gray-400 aria-disabled:text-gray-800"
          aria-disabled={!isStarted || isFinished}
          onClick={isPaused ? resume : pause}
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>
    </div>
  )
}
