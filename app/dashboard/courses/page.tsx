'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Users, Clock, Star, Filter, Search, ChevronDown, Award, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'Video Production', 'Content Strategy', 'AI Tools', 'Monetization']

  const courses = [
    {
      id: 1,
      title: 'Video Production 101',
      category: 'Video Production',
      instructor: 'Sarah Chen',
      rating: 4.9,
      students: 2400,
      duration: '8 weeks',
      level: 'Beginner',
      progress: 100,
      image: '/courses/video-production.jpg',
      description: 'Learn the fundamentals of professional video production from camera setup to post-production.',
      lessons: 32,
      certificate: true,
    },
    {
      id: 2,
      title: 'Content Strategy Masterclass',
      category: 'Content Strategy',
      instructor: 'Alex Thompson',
      rating: 4.8,
      students: 1800,
      duration: '10 weeks',
      level: 'Intermediate',
      progress: 45,
      image: '/courses/ai-content-strategy.jpg',
      description: 'Master the art of creating viral content and building a sustainable content empire.',
      lessons: 42,
      certificate: true,
    },
    {
      id: 3,
      title: 'Faceless Video Mastery',
      category: 'Video Production',
      instructor: 'Jordan Lee',
      rating: 4.7,
      students: 3200,
      duration: '6 weeks',
      level: 'Beginner',
      progress: 0,
      image: '/courses/faceless-video.jpg',
      description: 'Create viral faceless videos without showing your face. Perfect for automation and scaling.',
      lessons: 28,
      certificate: true,
    },
    {
      id: 4,
      title: 'Advanced Prompt Engineering',
      category: 'AI Tools',
      instructor: 'Maya Patel',
      rating: 4.9,
      students: 1500,
      duration: '12 weeks',
      level: 'Advanced',
      progress: 0,
      image: '/courses/prompt-engineering.jpg',
      description: 'Master the art of prompting AI models to generate high-quality content consistently.',
      lessons: 52,
      certificate: true,
    },
    {
      id: 5,
      title: 'Monetization Strategies',
      category: 'Monetization',
      instructor: 'David Kim',
      rating: 4.6,
      students: 980,
      duration: '4 weeks',
      level: 'Intermediate',
      progress: 0,
      image: '/courses/monetization.jpg',
      description: 'Discover proven strategies to turn your content into a sustainable revenue stream.',
      lessons: 18,
      certificate: true,
    },
    {
      id: 6,
      title: 'Social Media Mastery',
      category: 'Content Strategy',
      instructor: 'Emma Wilson',
      rating: 4.8,
      students: 2100,
      duration: '8 weeks',
      level: 'Beginner',
      progress: 0,
      image: '/courses/social-media-mastery.jpg',
      description: 'Build a powerful personal brand that resonates with your audience and stands out.',
      lessons: 36,
      certificate: true,
    },
  ]

  const filteredCourses = selectedCategory === 'all'
    ? courses.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : courses.filter(c => c.category === selectedCategory && c.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Courses & Resources</h1>
        <p className="text-muted-foreground">Learn from industry experts and master content creation</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-card px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat.toLowerCase())}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === cat.toLowerCase()
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-foreground hover:bg-accent/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="group h-full overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/20"
          >
            {/* Course Image */}
            <div className="h-40 relative overflow-hidden bg-card">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
              
              {/* Play Button on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-primary/90 rounded-full p-3">
                  <Play className="h-6 w-6 text-primary-foreground fill-primary-foreground" />
                </div>
              </div>

              {/* Progress Bar */}
              {course.progress > 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              )}
            </div>

            {/* Course Content */}
            <div className="space-y-4 p-6">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {course.level}
                  </span>
                  {course.progress > 0 && (
                    <span className="text-xs text-muted-foreground">{course.progress}%</span>
                  )}
                </div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {course.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-1">{course.instructor}</p>

              {/* Expandable Description */}
              <button
                onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                {expandedCourse === course.id ? 'Show less' : 'Show more'}
                <ChevronDown className={`h-3 w-3 transition-transform ${expandedCourse === course.id ? 'rotate-180' : ''}`} />
              </button>

              {expandedCourse === course.id && (
                <p className="text-sm text-muted-foreground border-t border-border pt-3">
                  {course.description}
                </p>
              )}

              <div className="space-y-3 border-t border-border pt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-xs text-muted-foreground">({course.students})</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {course.lessons} lessons
                  </div>
                </div>

                {course.certificate && (
                  <div className="flex items-center gap-1 text-xs text-primary">
                    <Award className="h-3 w-3" />
                    Certificate included
                  </div>
                )}
              </div>

              <Link href={`/dashboard/courses/${course.id}`}>
                <Button className="w-full" variant={course.progress > 0 ? 'default' : 'outline'} size="sm">
                  {course.progress > 0 ? 'Continue Learning' : 'Enroll Now'}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center">
        <Button variant="outline" size="lg" asChild>
          <Link href="#">Load More Courses</Link>
        </Button>
      </div>
    </div>
  )
}
