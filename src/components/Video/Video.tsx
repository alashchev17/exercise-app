'use client'

import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube'
import styles from './Video.module.css'
import { useState } from 'react'
import { Heading } from '../UI/Heading'

interface VideoProps {
  videoId: string
}

export const Video = ({ videoId }: VideoProps) => {
  const [isVideoReady, setIsVideoReady] = useState(false)

  const playerOptions: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      mute: 1,
      playsinline: 1,
    },
  }

  const handleVideoStart = (event: YouTubeEvent) => {
    event.target.playVideo()
    setIsVideoReady(true)
  }

  const handleVideoRestart = (event: YouTubeEvent) => {
    event.target.playVideo()
  }

  return (
    <div className={`${styles['video-responsive']} shadow-lg`}>
      {!isVideoReady && (
        <Heading level={4} className="flex items-center justify-center text-center h-full">
          Loading video source...
          <br />
          Please wait...
        </Heading>
      )}

      <YouTube videoId={videoId} opts={playerOptions} style={{ height: '100%' }} onReady={handleVideoStart} onEnd={handleVideoRestart} />
    </div>
  )
}
