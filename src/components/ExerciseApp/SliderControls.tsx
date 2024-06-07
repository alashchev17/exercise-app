interface SliderControlsProps {
  next: () => void
  prev: () => void
  prevDisabled: boolean
  nextDisabled: boolean
}

export const SliderControls = ({ next, prev, prevDisabled, nextDisabled }: SliderControlsProps) => {
  return (
    <div className="w-full left-0 bottom-4 text-center fixed bg-white z-10" style={{ textAlign: 'center' }}>
      <button
        className=" w-[calc(50%-1.5rem)] mr-4 px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg aria-disabled:bg-gray-300 aria-disabled:text-gray-800 transition-all"
        onClick={prev}
        disabled={prevDisabled}
        aria-disabled={prevDisabled}
      >
        Previous
      </button>
      <button
        className="w-[calc(50%-1.5rem)] px-6 py-4 bg-zinc-800 text-white font-semibold shadow-lg aria-disabled:bg-gray-300 aria-disabled:text-gray-800 transition-all"
        onClick={next}
        disabled={nextDisabled}
        aria-disabled={nextDisabled}
      >
        Next
      </button>
    </div>
  )
}
