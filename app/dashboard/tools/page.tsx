'use client'

import Link from 'next/link'
import { FileText, BarChart3, Film, Zap, ArrowRight, Sparkles, TrendingUp, Heart, Copy, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const aiProducts = [
  {
    id: 1,
    name: 'Script Generator',
    tagline: 'Generate compelling scripts in seconds',
    icon: FileText,
    color: 'bg-[#0071e3]',
    badge: null,
    category: 'Writing',
    features: ['AI-powered writing', 'Multi-format support', 'SEO optimization'],
    stats: { used: 342, created: '12 today' },
  },
  {
    id: 2,
    name: 'Content Planner',
    tagline: 'Plan your content calendar with AI',
    icon: BarChart3,
    color: 'bg-[#bf5af2]',
    badge: 'Popular',
    category: 'Planning',
    features: ['Calendar view', 'Topic suggestions', 'Scheduling'],
    stats: { used: 89, created: '3 today' },
  },
  {
    id: 3,
    name: 'Faceless Media Engine',
    tagline: 'Create videos without showing your face',
    icon: Film,
    color: 'bg-[#ff9500]',
    badge: 'New',
    category: 'Video',
    features: ['AI avatars', 'Auto voiceover', 'Scene transitions'],
    stats: { used: 56, created: '2 today' },
  },
  {
    id: 4,
    name: 'Prompt Optimizer',
    tagline: 'Perfect your AI prompts for better results',
    icon: Zap,
    color: 'bg-[#30d158]',
    badge: null,
    category: 'Productivity',
    features: ['Prompt analysis', 'Suggestions', 'Testing tools'],
    stats: { used: 128, created: '5 today' },
  },
]

const recentOutputs = [
  { id: 1, title: 'YouTube Script - Tech Review', tool: 'Script Generator', date: '2 hours ago', status: 'Ready' },
  { id: 2, title: 'Content Calendar - Q1 2025', tool: 'Content Planner', date: '1 day ago', status: 'Ready' },
  { id: 3, title: 'Video - Product Demo', tool: 'Faceless Media Engine', date: '3 days ago', status: 'Processing' },
  { id: 4, title: 'Optimized Prompt - AI Illustration', tool: 'Prompt Optimizer', date: '5 days ago', status: 'Ready' },
]

export default function ToolsPage() {
  const [likedOutputs, setLikedOutputs] = useState<number[]>([])
  const [copiedId, setCopiedId] = useState<number | null>(null)

  return (
    <div className="space-y-12">
      {/* Header - Apple style */}
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">AI Playground</h1>
        <p className="text-muted-foreground">Explore and use AI products designed for creators</p>
      </div>

      {/* AI Products Grid - Apple Store style */}
      <section>
        <h2 className="text-xl font-semibold mb-6">All AI Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aiProducts.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                className="group flex flex-col rounded-2xl bg-card border border-border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-border/80"
              >
                <div className="relative mb-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${product.color} text-white shadow-sm`}>
                    <Icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  {product.badge && (
                    <span className="absolute -top-1 -right-1 rounded-full bg-[#f97316] px-2.5 py-0.5 text-[10px] font-semibold text-white">
                      {product.badge}
                    </span>
                  )}
                </div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{product.category}</span>
                <h3 className="mt-1 text-lg font-semibold">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.features.slice(0, 2).map((f, i) => (
                    <span key={i} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{product.stats.used}</span> uses · {product.stats.created}
                  </div>
                  <Button size="sm" className="rounded-full">
                    <Sparkles className="mr-2 h-3.5 w-3.5" />
                    Open
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Recent Outputs - Clean list style */}
      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Outputs</h2>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
              <TrendingUp className="h-3.5 w-3.5" />
              {likedOutputs.length} saved
            </span>
          </div>
          <div className="space-y-3">
            {recentOutputs.map((output) => (
              <div
                key={output.id}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-all hover:border-border/80 hover:shadow-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex-shrink-0">
                    {output.status === 'Ready' ? (
                      <div className="h-2.5 w-2.5 rounded-full bg-[#30d158]" />
                    ) : (
                      <div className="h-2.5 w-2.5 rounded-full border-2 border-[#ff9500] border-t-transparent animate-spin" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium truncate">{output.title}</p>
                    <p className="text-xs text-muted-foreground">{output.tool} · {output.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => setLikedOutputs(prev => prev.includes(output.id) ? prev.filter(id => id !== output.id) : [...prev, output.id])}
                  >
                    <Heart className={`h-4 w-4 ${likedOutputs.includes(output.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => { setCopiedId(output.id); setTimeout(() => setCopiedId(null), 2000) }}
                  >
                    {copiedId === output.id ? (
                      <span className="text-xs text-[#30d158]">Copied</span>
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar - Usage & Quick actions */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <h3 className="font-semibold">Usage This Month</h3>
            <div className="space-y-4">
              {[
                { label: 'Scripts Created', value: 42, max: 50, color: 'bg-[#0071e3]' },
                { label: 'Videos Generated', value: 8, max: 20, color: 'bg-[#ff9500]' },
                { label: 'Prompts Optimized', value: 15, max: 15, color: 'bg-[#30d158]' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}/{item.max}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color} transition-all`}
                      style={{ width: `${Math.min(100, (item.value / item.max) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-muted/30 p-6 space-y-4">
            <h3 className="font-semibold">Batch Processing</h3>
            <p className="text-sm text-muted-foreground">
              Process multiple scripts or content items at once
            </p>
            <Button className="w-full rounded-full">
              Start Batch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
