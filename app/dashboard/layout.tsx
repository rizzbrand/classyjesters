'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sparkles, LayoutDashboard, BookOpen, Zap, Settings, LogOut, Menu, X, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Jesters AI', href: '/dashboard/chat', icon: MessageSquare },
    { label: 'Courses', href: '/dashboard/courses', icon: BookOpen },
    { label: 'AI Playground', href: '/dashboard/tools', icon: Zap },
    { label: 'Settings', href: '/dashboard/settings', icon: Settings },
  ]

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between border-b border-border px-4 py-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f97316] text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-bold">Classy Jesters</span>
        </Link>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-sidebar transition-transform md:relative md:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:block`}
          style={{ paddingTop: 'env(safe-area-inset-top)' }}
        >
          <div className="hidden md:flex items-center gap-2 border-b border-border px-6 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f97316] text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-bold">Classy Jesters</span>
          </div>

          <nav className="space-y-2 px-3 py-6">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <Link key={item.href} href={item.href}>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? 'bg-accent text-accent-foreground font-medium'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </button>
                </Link>
              )
            })}
          </nav>

          <div className="absolute bottom-0 w-full border-t border-border px-3 py-4">
            <Button variant="outline" size="sm" className="w-full justify-start" asChild>
              <Link href="/">
                <LogOut className="mr-2 h-4 w-4" />
                Log Out
              </Link>
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full flex-1">
          {/* Top Bar */}
          <header className="hidden md:flex items-center justify-between border-b border-border px-8 py-4">
            <h1 className="text-2xl font-bold">
              {pathname === '/dashboard/chat' ? 'Jesters AI' : pathname.startsWith('/dashboard/courses') ? 'Courses' : pathname.startsWith('/dashboard/tools') ? 'AI Playground' : pathname.startsWith('/dashboard/settings') ? 'Settings' : 'Dashboard'}
            </h1>
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-secondary p-2 hover:bg-accent/10 transition-colors">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="h-8 w-8 rounded-full bg-[#f97316] text-white flex items-center justify-center text-sm font-medium">
                C
              </div>
            </div>
          </header>

          {/* Page Content */}
          <div className="p-6 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
