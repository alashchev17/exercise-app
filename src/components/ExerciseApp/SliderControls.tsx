interface SliderControlsProps {
  next: () => void
  prev: () => void
  prevDisabled: boolean
  nextDisabled: boolean
}

export const SliderControls = ({ next, prev, prevDisabled, nextDisabled }: SliderControlsProps) => {
  return (
    <div className="text-center absolute" style={{ textAlign: 'center' }}>
      <button
        className="fixed left-4 bottom-4 w-[calc(50%-1.5rem)] px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg z-10 aria-disabled:bg-gray-400 aria-disabled:text-gray-800 transition-all"
        onClick={prev}
        disabled={prevDisabled}
        aria-disabled={prevDisabled}
      >
        Previous
      </button>
      <button
        className="fixed right-4 bottom-4 w-[calc(50%-1.5rem)] px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg z-10 aria-disabled:bg-gray-400 aria-disabled:text-gray-800 transition-all"
        onClick={next}
        disabled={nextDisabled}
        aria-disabled={nextDisabled}
      >
        Next
      </button>
    </div>
  )
}
