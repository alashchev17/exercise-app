'use client'

import { useEffect, useState } from 'react'
import { useCountdown } from 'usehooks-ts'

interface TimerProps {
  countStart: number
  onFinished: () => void
}

export const Timer = ({ countStart, onFinished }: TimerProps) => {
  const [count, { startCountdown, stopCountdown }] = useCountdown({
    countStart,
    intervalMs: 100,
    countStop: 0,
  })

  const [timerHeight, setTimerHeight] = useState(300)

  useEffect(() => {
    const handleResize = () => {
      setTimerHeight(Number(((window.innerWidth / 100) * 60).toFixed(0)))
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (count === 0) {
      onFinished()
      console.log(`[INFO]: Timer finished`)
    }
  }, [count, onFinished])

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="flex w-[65%] items-center justify-center rounded-[50%] border-8 border-orange-500"
        style={{
          height: `${timerHeight}px`,
        }}
      >
        <p className="text-black text-6xl font-semibold">{count}s</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg" onClick={startCountdown}>
          Start
        </button>
        <button className="px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg" onClick={stopCountdown}>
          Pause
        </button>
      </div>
    </div>
  )
}
