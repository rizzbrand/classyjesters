'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, BookOpen, Zap, ChevronRight, Play, User, FileText, Calendar, BarChart3, Brain, GraduationCap, Film, TrendingUp, Wallet, Heart, LayoutDashboard, Settings, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ backgroundColor: '#ffffff', color: '#0a0a0a' }}>
      {/* Navigation - Cura-inspired clean header */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f97316] text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">Classy Jesters</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Login
          </Link>
          <Button
            asChild
            className="bg-[#f97316] hover:bg-[#ea580c] text-white border-0 rounded-lg px-5"
          >
            <Link href="/signup">Start for free</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section - Cura-inspired with dashboard preview */}
      <section className="relative border-b border-border px-6 py-16 md:px-12 md:py-24 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0a0a0a 1px, transparent 1px),
              linear-gradient(to bottom, #0a0a0a 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative mx-auto max-w-6xl space-y-12">
          {/* Hero content */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl tracking-tight">
              Your personal{' '}
              <span className="text-[#f97316]">creative</span>
              {' '}assistant
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
              Instantly create scripts, plan content, and grow your brand with AI-powered tools designed for modern creators.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="bg-[#f97316] hover:bg-[#ea580c] text-white border-0 rounded-lg px-6 h-12 text-base font-medium"
              >
                <Link href="/signup">
                  Start for free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-foreground rounded-lg px-6 h-12 text-base font-medium bg-transparent hover:bg-foreground/5"
              >
                <Link href="#features" className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-foreground">
                    <Play className="h-3.5 w-3.5 ml-0.5" fill="currentColor" />
                  </span>
                 Get Courses
                </Link>
              </Button>
            </div>
          </div>

          {/* Dashboard preview card - hero image */}
          <div className="relative -mb-24 md:-mb-32">
            <div className="rounded-2xl border border-border bg-white shadow-2xl shadow-black/10 overflow-hidden">
              {/* Dashboard header */}
              <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-[#fafafa]">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f97316] text-white">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <span className="font-bold text-sm">Classy Jesters</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-6 w-6 rounded bg-[#f97316]/20" />
                  <div className="h-6 w-6 rounded-full bg-[#f97316] text-white text-xs font-semibold flex items-center justify-center">C</div>
                </div>
              </div>
              <div className="flex">
                {/* Icon sidebar */}
                <div className="flex flex-col items-center gap-1 border-r border-border py-3 px-2 bg-[#fafafa]">
                  {[LayoutDashboard, Heart, FileText, Calendar, Settings].map((Icon, i) => (
                    <div key={i} className={`flex h-8 w-8 items-center justify-center rounded-lg ${i === 0 ? 'bg-[#f97316]/10 text-[#f97316]' : 'text-muted-foreground'}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                  ))}
                </div>
                {/* Main content preview */}
                <div className="flex-1 flex min-h-[280px]">
                  <div className="w-48 border-r border-border p-4 space-y-3 flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-[#f97316] mx-auto flex items-center justify-center text-white text-lg font-semibold">C</div>
                    <p className="text-center text-xs font-medium">Creator</p>
                    <div className="h-7 rounded bg-[#f97316] w-full" />
                    <div className="space-y-1 text-[10px] text-muted-foreground">
                      <p><span className="text-foreground font-medium">Niche:</span> Content</p>
                      <p><span className="text-foreground font-medium">Projects:</span> 3</p>
                    </div>
                  </div>
                  <div className="flex-1 p-4 space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Content status', color: 'text-red-500' },
                        { label: 'AI Assistant', color: 'text-purple-500' },
                        { label: 'Creator tips', color: 'text-blue-500' },
                      ].map((card, i) => (
                        <div key={i} className="rounded-lg border border-border p-2 bg-white">
                          <p className={`text-[10px] font-semibold ${card.color}`}>{card.label}</p>
                          <p className="text-[9px] text-muted-foreground mt-0.5">Evaluate your content</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-2">Content Recommendations</p>
                      <ul className="space-y-1 text-[10px] text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Stay consistent:</span> Post regularly...</li>
                        <li><span className="font-semibold text-foreground">Plan ahead:</span> Use Content Planner...</li>
                        <li><span className="font-semibold text-foreground">Engage:</span> Reply to comments...</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview - Cura-inspired 2x3 grid */}
      <section id="features" className="border-b border-border px-6 pt-32 pb-20 md:px-12 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl tracking-tight">Features that will amaze you.</h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
              Classy Jesters is packed with features that will help you create content, grow your audience, and build your brand.
            </p>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: User, title: 'Creator Profiles', description: 'Create and manage your personal creator profile with ease.' },
              { icon: FileText, title: 'Script Generator', description: 'Generate compelling scripts for your videos in seconds with AI.' },
              { icon: Calendar, title: 'Content Planning', description: 'Plan your content calendar with AI-suggested topics and strategies.' },
              { icon: BarChart3, title: 'Content Analytics', description: 'Get detailed insights into your content performance over time.' },
              { icon: Brain, title: 'AI Recommendations', description: 'Receive personalized recommendations for your content strategy.' },
              { icon: GraduationCap, title: 'Expert Courses', description: 'Access structured courses and expert tips to master content creation.' },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center text-[#f97316]">
                    <Icon className="h-10 w-10" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Jesters AI Section */}
      <section id="jesters-ai" className="border-b border-border bg-[#fbfbfd] px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f97316] text-white">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-[#f97316]">AI Assistant</span>
              </div>
              <h2 className="text-3xl font-semibold md:text-4xl tracking-tight">
                Meet Jesters AI — your creative co-pilot
              </h2>
              <p className="text-lg text-muted-foreground">
                Chat with our AI assistant for script ideas, content planning, and creator tips. Get instant, personalized help whenever you need it.
              </p>
              <ul className="space-y-3">
                {[
                  'Script ideas and brainstorming',
                  'Content calendar suggestions',
                  'Creator tips and best practices',
                  'Prompt optimization help',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f97316]/10 text-[#f97316] text-xs font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-[#f97316] hover:bg-[#ea580c] text-white">
                <Link href="/signup">
                  Try Jesters AI <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            {/* Chat preview mockup */}
            <div className="rounded-2xl border border-border bg-white shadow-xl overflow-hidden">
              <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-[#fafafa]">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f97316] text-white">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-sm">Jesters AI</span>
                </div>
              </div>
              <div
                className="p-8 min-h-[280px] flex flex-col items-center justify-center"
                style={{
                  background: 'linear-gradient(180deg, rgba(249,115,22,0.04) 0%, rgba(59,130,246,0.02) 50%, rgba(234,179,8,0.02) 100%)',
                }}
              >
                <div
                  className="w-16 h-16 rounded-full mb-4 opacity-80"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(251,146,60,0.5), rgba(249,115,22,0.25))',
                    boxShadow: '0 0 40px rgba(249,115,22,0.2)',
                  }}
                />
                <p className="font-semibold text-lg">Hello Creator!</p>
                <p className="text-sm text-muted-foreground text-center mt-1 max-w-xs">
                  Ask me anything about scripts, content, or creator tips.
                </p>
              </div>
              <div className="p-3 border-t border-border bg-[#fafafa]">
                <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5">
                  <span className="text-sm text-muted-foreground">Type a message...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content - Apple Store style */}
      <section id="courses" className="border-b border-border bg-[#fbfbfd] px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-semibold md:text-4xl tracking-tight">Learn from the best.</h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Curated courses and resources to elevate your creative skills.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Video Production', tagline: 'Camera to post-production', icon: Film, color: 'bg-[#0071e3]', courses: 12, students: '5.2K', badge: null, image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=240&fit=crop' },
              { title: 'Content Strategy', tagline: 'Build a content empire', icon: TrendingUp, color: 'bg-[#bf5af2]', courses: 8, students: '3.8K', badge: 'Popular', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop' },
              { title: 'AI Tools Mastery', tagline: 'Master AI for creators', icon: Sparkles, color: 'bg-[#ff9500]', courses: 15, students: '7.1K', badge: 'New', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop' },
              { title: 'Monetization', tagline: 'Turn content into revenue', icon: Wallet, color: 'bg-[#30d158]', courses: 6, students: '2.4K', badge: null, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=240&fit=crop' },
            ].map((course, i) => {
              const Icon = course.icon
              return (
                <Link key={i} href="/dashboard/courses">
                  <div className="group flex flex-col rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-[#d2d2d7]/50 hover:border-[#d2d2d7] h-full">
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className={`absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl ${course.color} text-white`}>
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      {course.badge && (
                        <span className="absolute top-3 right-3 rounded-full bg-[#f97316] px-2 py-0.5 text-[10px] font-semibold text-white">
                          {course.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-semibold text-foreground">{course.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{course.tagline}</p>
                      <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{course.courses} courses</span>
                        <span>·</span>
                        <span>{course.students} students</span>
                      </div>
                      <div className="mt-4 flex-1 flex items-end">
                        <span className="inline-flex items-center text-sm font-medium text-[#0071e3] group-hover:underline">
                          Browse courses <ChevronRight className="ml-1 h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="text-center pt-4">
            <Link href="/dashboard/courses">
              <Button variant="outline" className="rounded-full px-8">
                View all courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Playground Section - Apple Store style */}
      <section id="tools" className="border-b border-border bg-[#fbfbfd] px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-semibold md:text-4xl tracking-tight">AI Playground</h2>
            <p className="text-lg text-muted-foreground">
              Discover AI products for creators. Try them free.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Script Generator', tagline: 'Write scripts in seconds', icon: FileText, color: 'bg-[#0071e3]', badge: null, image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=240&fit=crop' },
              { title: 'Content Planner', tagline: 'Plan your calendar with AI', icon: Calendar, color: 'bg-[#bf5af2]', badge: 'Popular', image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400&h=240&fit=crop' },
              { title: 'Faceless Media', tagline: 'Create videos without a face', icon: Sparkles, color: 'bg-[#ff9500]', badge: 'New', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=240&fit=crop' },
              { title: 'Prompt Optimizer', tagline: 'Get better AI outputs', icon: Zap, color: 'bg-[#30d158]', badge: null, image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=240&fit=crop' },
            ].map((product, i) => {
              const Icon = product.icon
              return (
                <Link key={i} href="/dashboard/tools">
                  <div className="group flex flex-col rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-[#d2d2d7]/50 hover:border-[#d2d2d7]">
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className={`absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl ${product.color} text-white`}>
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      {product.badge && (
                        <span className="absolute top-3 right-3 rounded-full bg-[#f97316] px-2 py-0.5 text-[10px] font-semibold text-white">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-foreground">{product.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
                      <div className="mt-4">
                        <span className="inline-flex items-center text-sm font-medium text-[#0071e3] group-hover:underline">
                          Try free <ArrowRight className="ml-1 h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="text-center pt-4">
            <Link href="/dashboard/tools">
              <Button variant="outline" className="rounded-full px-8">
                Browse all AI products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#fbfbfd] px-6 py-20 md:px-12 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0a0a0a 1px, transparent 1px),
              linear-gradient(to bottom, #0a0a0a 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold md:text-4xl tracking-tight">Start creating today.</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Join creators worldwide using Classy Jesters to unlock their full potential. No credit card required.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-[#f97316] hover:bg-[#ea580c] text-white border-0 rounded-lg px-8 h-12 text-base font-medium"
            >
              <Link href="/signup">
                Start for free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-foreground rounded-lg px-8 h-12 text-base font-medium bg-transparent hover:bg-foreground/5"
            >
              <Link href="/login">Log in</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Free forever · No credit card · Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-[#fafafa] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Top: Brand + CTA */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-12 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f97316] text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">Classy Jesters</span>
            </div>
            <Button asChild className="w-fit bg-[#f97316] hover:bg-[#ea580c] text-white">
              <Link href="/signup">Get started free</Link>
            </Button>
          </div>

          {/* Links grid */}
          <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="font-semibold text-sm text-foreground">Product</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#jesters-ai" className="hover:text-foreground transition-colors">Jesters AI</Link></li>
                <li><Link href="#tools" className="hover:text-foreground transition-colors">AI Playground</Link></li>
                <li><Link href="#courses" className="hover:text-foreground transition-colors">Courses</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-sm text-foreground">Learning</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/dashboard/courses" className="hover:text-foreground transition-colors">Courses</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Resources</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-sm text-foreground">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Terms</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-sm text-foreground">Connect</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Twitter</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Discord</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Classy Jesters. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
