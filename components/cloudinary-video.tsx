// Cloudinary video component for production
'use client'

import { useState } from 'react'

interface CloudinaryVideoProps {
  publicId: string
  alt: string
  className?: string
  posterSrc?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
}

export default function CloudinaryVideo({
  publicId,
  alt,
  className = '',
  posterSrc,
  autoplay = false,
  loop = true,
  muted = true,
  controls = false
}: CloudinaryVideoProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Cloudinary transformations for different qualities
  const getVideoUrl = (quality: 'high' | 'medium' | 'low') => {
    const transformations = {
      high: 'q_auto,f_mp4,w_1920,h_1080',
      medium: 'q_auto,f_mp4,w_1280,h_720', 
      low: 'q_auto,f_mp4,w_854,h_480'
    }
    
    return `https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/${transformations[quality]}/${publicId}.mp4`
  }

  const handleLoadedData = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
        <p className="text-gray-600">Video unavailable</p>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-turf-green"></div>
        </div>
      )}
      
      <video
        className="w-full h-full object-cover"
        poster={posterSrc}
        muted={muted}
        loop={loop}
        playsInline
        controls={controls}
        autoPlay={autoplay}
        onLoadedData={handleLoadedData}
        onError={handleError}
        preload="metadata"
      >
        <source src={getVideoUrl('high')} type="video/mp4" />
        <source src={getVideoUrl('medium')} type="video/mp4" />
        <source src={getVideoUrl('low')} type="video/mp4" />
      </video>
    </div>
  )
}
