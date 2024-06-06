interface VideoProps {
  videoUrl: string
}

export const Video = ({ videoUrl }: VideoProps) => {
  return (
    <div className="flex items-center justify-center">
      <iframe width="300" height="168" src={`${videoUrl}&autoplay=1&loop=1&mute=1`}></iframe>
    </div>
  )
}
