'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Play, Pause, Volume2, VolumeX, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface OptimizedVideoProps {
  /** Base filename without extension (e.g., 'turf-pro-putting-green-residential-home') */
  baseName: string
  /** Alt text for accessibility */
  alt: string
  /** Poster image source */
  posterSrc?: string
  /** CSS classes for the video container */
  className?: string
  /** Whether to autoplay (muted) */
  autoplay?: boolean
  /** Whether to loop */
  loop?: boolean
  /** Whether to show controls */
  controls?: boolean
  /** Whether to start muted */
  muted?: boolean
  /** Callback when video loads */
  onLoad?: () => void
  /** Callback when video errors */
  onError?: (error: string) => void
}

interface VideoSource {
  src: string
  type: string
  quality: 'high' | 'medium' | 'low'
}

export default function OptimizedVideo({
  baseName,
  alt,
  posterSrc,
  className = '',
  autoplay = false,
  loop = true,
  controls = false,
  muted = true,
  onLoad,
  onError
}: OptimizedVideoProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(muted)
  const [hasError, setHasError] = useState(false)
  const [currentQuality, setCurrentQuality] = useState<'high' | 'medium' | 'low'>('high')
  const [isIntersecting, setIsIntersecting] = useState(false)
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Generate video sources for different formats and qualities
  const getVideoSources = useCallback((): VideoSource[] => {
    const formats = ['webm', 'mp4'] // WebM first for better compression
    const qualities: ('high' | 'medium' | 'low')[] = ['high', 'medium', 'low']
    
    const sources: VideoSource[] = []
    
    // Prioritize WebM for better compression, then MP4 for compatibility
    formats.forEach(format => {
      qualities.forEach(quality => {
        sources.push({
          src: `/videos/optimized/${baseName}-${quality}.${format}`,
          type: `video/${format}`,
          quality
        })
      })
    })
    
    return sources
  }, [baseName])

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Load video when intersecting
  useEffect(() => {
    if (isIntersecting && videoRef.current && isLoading) {
      loadVideo()
    }
  }, [isIntersecting, isLoading])

  const loadVideo = async () => {
    if (!videoRef.current) return

    const sources = getVideoSources()
    const video = videoRef.current
    console.log('Available video sources:', sources)

    // Try to load the best quality first, fallback to lower qualities
    const loadSource = async (quality: 'high' | 'medium' | 'low', format: 'mp4' | 'webm') => {
      const source = sources.find(s => s.quality === quality && s.type === `video/${format}`)
      if (!source) return false

      try {
        const response = await fetch(source.src, { method: 'HEAD' })
        if (response.ok && response.headers.get('content-length') !== '0') {
          video.src = source.src
          video.load()
          setCurrentQuality(quality)
          return true
        }
      } catch (error) {
        console.warn(`Failed to load ${quality} quality ${format}:`, error)
      }
      return false
    }

    // Try MP4 first (more reliable), then WebM
    const loaded = await loadSource('high', 'mp4') || 
                  await loadSource('high', 'webm') ||
                  await loadSource('medium', 'mp4') || 
                  await loadSource('medium', 'webm') ||
                  await loadSource('low', 'mp4') || 
                  await loadSource('low', 'webm')

    if (!loaded) {
      setHasError(true)
      onError?.('Failed to load video')
    }
  }

  const handleLoadedData = () => {
    console.log('Video loaded successfully:', videoRef.current?.src)
    setIsLoading(false)
    onLoad?.()
    
    if (autoplay && muted) {
      playVideo()
    }
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.('Video failed to load')
  }

  const playVideo = async () => {
    if (!videoRef.current) return
    
    try {
      await videoRef.current.play()
      setIsPlaying(true)
    } catch (error) {
      console.warn('Autoplay failed:', error)
    }
  }

  const pauseVideo = () => {
    if (!videoRef.current) return
    videoRef.current.pause()
    setIsPlaying(false)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseVideo()
    } else {
      playVideo()
    }
  }

  const handleVideoClick = () => {
    if (!controls) {
      togglePlayPause()
    }
  }

  const handleVideoEnd = () => {
    if (!loop) {
      setIsPlaying(false)
    }
  }

  const handleVideoPlay = () => setIsPlaying(true)
  const handleVideoPause = () => setIsPlaying(false)

  // Generate poster path if not provided
  const posterPath = posterSrc || `/videos/optimized/${baseName}-poster.jpg`

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="flex flex-col items-center space-y-2">
            <Loader2 className="h-8 w-8 animate-spin text-turf-green" />
            <p className="text-sm text-gray-600">Loading video...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="text-center">
            <p className="text-gray-600 mb-2">Video unavailable</p>
            {posterSrc && (
              <Image
                src={posterSrc}
                alt={alt}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
      )}

      {/* Video Element */}
      {!hasError && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={posterPath}
          muted={isMuted}
          loop={loop}
          playsInline
          controls={controls}
          onLoadedData={handleLoadedData}
          onError={handleError}
          onClick={handleVideoClick}
          onEnded={handleVideoEnd}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          preload="metadata"
        >
          {/* Video sources will be set dynamically */}
        </video>
      )}

      {/* Custom Controls Overlay */}
      {!controls && !isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-20">
          <div className="flex items-center space-x-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={togglePlayPause}
              className="bg-white bg-opacity-90 hover:bg-opacity-100"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleMute}
              className="bg-white bg-opacity-90 hover:bg-opacity-100"
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Quality Indicator (Development) */}
      {process.env.NODE_ENV === 'development' && !isLoading && !hasError && (
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {currentQuality}
        </div>
      )}
    </div>
  )
}
