'use client'

import { useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ToolDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const demos = [
    {
      title: 'Script Generator',
      description: 'Generate viral scripts in seconds',
      video: '🎬',
    },
    {
      title: 'Content Planner',
      description: 'Plan your entire month in minutes',
      video: '📅',
    },
    {
      title: 'Faceless Media Engine',
      description: 'Create videos without showing your face',
      video: '🎥',
    },
    {
      title: 'Prompt Optimizer',
      description: 'Perfect your AI prompts',
      video: '✨',
    },
  ]

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {/* Video Player Area */}
      <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-7xl opacity-20">{demos[activeTab].video}</div>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative z-10 h-20 w-20 rounded-full bg-primary text-primary-foreground hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-110"
        >
          {isPlaying ? (
            <Pause className="h-8 w-8 mx-auto" />
          ) : (
            <Play className="h-8 w-8 mx-auto ml-1" />
          )}
        </button>
      </div>

      {/* Controls */}
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">{demos[activeTab].title}</h3>
            <p className="text-sm text-muted-foreground">{demos[activeTab].description}</p>
          </div>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Volume2 className="h-5 w-5 text-muted-foreground" />
            )}
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {demos.map((demo, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveTab(idx)
                setIsPlaying(false)
              }}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === idx
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-accent/10 text-foreground hover:bg-accent/20'
              }`}
            >
              {demo.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Info Tabs */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-accent/5 rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-1">Time to Create</p>
            <p className="font-bold">30 seconds</p>
          </div>
          <div className="bg-accent/5 rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-1">Quality Score</p>
            <p className="font-bold">4.9/5.0</p>
          </div>
        </div>

        <Button className="w-full">Try Now</Button>
      </div>
    </div>
  )
}
