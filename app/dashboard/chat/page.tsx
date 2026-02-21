'use client'

import { useState } from 'react'
import { Settings, FileText, Pencil, Search, Plus, Mic, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const sampleChats = [
  { id: 1, title: 'How can I help you today', active: true },
  { id: 2, title: 'Script ideas for tech review', active: false },
  { id: 3, title: 'Content calendar planning', active: false },
]

export default function ChatPage() {
  const [message, setMessage] = useState('')
  const [chats] = useState(sampleChats)

  return (
    <div className="flex -m-6 md:-m-8 h-[calc(100vh-4rem)] min-h-[500px]">
      {/* Chat Sidebar */}
      <aside className="w-64 border-r border-border bg-sidebar flex flex-col flex-shrink-0">
        <div className="p-3 space-y-3 border-b border-border">
          <div className="flex gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition-colors">
              <Settings className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition-colors">
              <FileText className="h-4 w-4" />
            </button>
          </div>
          <Button className="w-full justify-start gap-2" variant="outline" size="sm">
            <Pencil className="h-4 w-4" />
            New chat
          </Button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search chats"
              className="pl-9 h-9 bg-muted/50 border-0"
            />
          </div>
        </div>
        <div className="flex-1 overflow-auto p-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Chats</p>
          <div className="space-y-1">
            {chats.map((chat) => (
              <button
                key={chat.id}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  chat.active ? 'bg-accent text-accent-foreground' : 'hover:bg-sidebar-accent text-muted-foreground'
                }`}
              >
                {chat.title}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-background">
        {/* Subtle gradient background */}
        <div
          className="flex-1 flex flex-col overflow-auto"
          style={{
            background: 'linear-gradient(180deg, rgba(249,115,22,0.03) 0%, rgba(59,130,246,0.02) 50%, rgba(234,179,8,0.02) 100%)',
          }}
        >
          {/* Chat content - centered when empty */}
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            {/* AI Orb */}
            <div
              className="w-24 h-24 rounded-full mb-6 opacity-90"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(251,146,60,0.4), rgba(249,115,22,0.2))',
                boxShadow: '0 0 60px rgba(249,115,22,0.15)',
              }}
            />
            <h2 className="text-2xl font-bold mb-2">Hello Creator!</h2>
            <p className="text-muted-foreground text-center max-w-md mb-8">
              I&apos;m Jesters AI, your creative assistant. Ask me anything about scripts, content planning, or creator tips.
            </p>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-border bg-background">
          <div className="max-w-3xl mx-auto flex items-end gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors flex-shrink-0">
              <Plus className="h-5 w-5" />
            </button>
            <div className="flex-1 relative">
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="h-12 pr-24 rounded-xl border-border bg-muted/30 focus:bg-background"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                  <Mic className="h-4 w-4" />
                </button>
                <Button
                  size="icon"
                  className="h-8 w-8 rounded-lg bg-[#f97316] hover:bg-[#ea580c] text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
