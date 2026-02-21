'use client'

import Link from 'next/link'
import { Heart, Brain, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

const recommendations = [
  { title: 'Stay consistent:', description: 'Post regularly to build audience trust and algorithm favor.' },
  { title: 'Plan ahead:', description: 'Use the Content Planner to schedule posts and maintain a steady flow.' },
  { title: 'Engage your audience:', description: 'Reply to comments and create content that sparks conversation.' },
  { title: 'Optimize your scripts:', description: 'Use AI tools to refine your messaging for maximum impact.' },
  { title: 'Analyze performance:', description: 'Review analytics to understand what resonates with your audience.' },
  { title: 'Experiment with formats:', description: 'Try short-form, long-form, and different content types.' },
  { title: 'Batch create content:', description: 'Record multiple pieces in one session to stay efficient.' },
]

export default function DashboardPage() {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Profile + Information */}
        <div className="lg:w-80 border-b lg:border-b-0 lg:border-r border-border p-6 space-y-6">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f97316] text-white text-2xl font-semibold">
              C
            </div>
            <p className="mt-3 font-semibold">Creator</p>
            <p className="text-sm text-muted-foreground">Member since 2024</p>
          </div>
          <Button className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white" asChild>
            <Link href="/dashboard/settings">Update Profile</Link>
          </Button>
          <div>
            <h3 className="font-semibold mb-3">Information</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="text-foreground font-medium">Niche:</span> Content Creation</p>
              <p><span className="text-foreground font-medium">Content Type:</span> Video, Shorts</p>
              <p><span className="text-foreground font-medium">Active Projects:</span> 3</p>
              <p><span className="text-foreground font-medium">Tools Used:</span> Script Generator, Content Planner</p>
            </div>
          </div>
        </div>

        {/* Right: Quick Links + Recommendations */}
        <div className="flex-1 p-6 space-y-6">
          {/* Quick Link Cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            <Link href="/dashboard">
              <div className="rounded-xl border border-border bg-background/50 p-4 hover:border-[#f97316]/30 hover:bg-[#f97316]/5 transition-colors">
                <p className="font-semibold text-red-500 text-sm">Your content status</p>
                <div className="mt-2 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">Evaluate your content performance</p>
                </div>
              </div>
            </Link>
            <Link href="/dashboard/chat">
              <div className="rounded-xl border border-border bg-background/50 p-4 hover:border-[#f97316]/30 hover:bg-[#f97316]/5 transition-colors">
                <p className="font-semibold text-purple-500 text-sm">Virtual assistant</p>
                <div className="mt-2 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">Chat with Jesters AI</p>
                </div>
              </div>
            </Link>
            <Link href="/dashboard/courses">
              <div className="rounded-xl border border-border bg-background/50 p-4 hover:border-[#f97316]/30 hover:bg-[#f97316]/5 transition-colors">
                <p className="font-semibold text-blue-500 text-sm">Creator tips</p>
                <div className="mt-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">Get tips and advice</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Recommendations */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Content Recommendations</h3>
            <ul className="space-y-3">
              {recommendations.map((rec, i) => (
                <li key={i} className="text-sm">
                  <span className="font-semibold text-foreground">{rec.title}</span>{' '}
                  <span className="text-muted-foreground">{rec.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
