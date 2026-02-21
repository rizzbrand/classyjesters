'use client'

import Link from 'next/link'
import { ArrowLeft, PlayCircle, Clock, CheckCircle, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const [expandedModule, setExpandedModule] = useState(0)

  // Mock course data - in a real app, this would be fetched based on params.id
  const course = {
    id: params.id,
    title: 'Video Production 101',
    instructor: 'Sarah Chen',
    rating: 4.9,
    students: 2400,
    duration: '8 weeks',
    level: 'Beginner',
    progress: 100,
    description: 'Learn the fundamentals of professional video production. From planning and shooting to editing and publishing, master all aspects of creating stunning video content.',
    image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    modules: [
      {
        id: 1,
        title: 'Getting Started with Video',
        lessons: [
          { id: 1, title: 'Course Overview', duration: 5, completed: true },
          { id: 2, title: 'Equipment Basics', duration: 15, completed: true },
          { id: 3, title: 'Studio Setup', duration: 12, completed: true },
        ],
      },
      {
        id: 2,
        title: 'Filming Techniques',
        lessons: [
          { id: 4, title: 'Camera Settings', duration: 20, completed: true },
          { id: 5, title: 'Lighting Fundamentals', duration: 18, completed: true },
          { id: 6, title: 'Audio Recording', duration: 16, completed: true },
        ],
      },
      {
        id: 3,
        title: 'Post-Production Editing',
        lessons: [
          { id: 7, title: 'Editing Basics', duration: 25, completed: true },
          { id: 8, title: 'Color Grading', duration: 22, completed: false },
          { id: 9, title: 'Sound Design', duration: 20, completed: false },
        ],
      },
      {
        id: 4,
        title: 'Publishing & Optimization',
        lessons: [
          { id: 10, title: 'Platform Guidelines', duration: 15, completed: false },
          { id: 11, title: 'SEO for Videos', duration: 18, completed: false },
          { id: 12, title: 'Final Project', duration: 120, completed: false },
        ],
      },
    ],
  }

  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const completedLessons = course.modules.reduce(
    (acc, m) => acc + m.lessons.filter(l => l.completed).length,
    0
  )

  return (
    <div className="space-y-8">
      {/* Header with Back Button */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/courses" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Link>
        </Button>
      </div>

      {/* Course Header */}
      <div className="rounded-lg border border-border overflow-hidden">
        <div className={`h-48 bg-gradient-to-br ${course.image} relative`}>
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="bg-card p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded">
                {course.level}
              </span>
              <span className="text-xs text-muted-foreground">
                {course.progress}% Complete
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-muted-foreground mb-4">{course.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 py-6 border-t border-b border-border">
            <div>
              <p className="text-xs text-muted-foreground">Instructor</p>
              <p className="font-semibold">{course.instructor}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Rating</p>
              <p className="font-semibold">{course.rating} ★</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="font-semibold">{course.duration}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Students</p>
              <p className="font-semibold">{course.students.toLocaleString()}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Overall Progress</span>
              <span className="text-sm text-muted-foreground">
                {completedLessons} of {totalLessons} lessons
              </span>
            </div>
            <div className="h-3 w-full rounded-full bg-accent/10">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Modules and Lessons */}
        <div className="lg:col-span-2 space-y-3">
          <h2 className="text-2xl font-bold mb-6">Course Content</h2>

          {course.modules.map((module, idx) => {
            const moduleCompleted = module.lessons.every(l => l.completed)
            const moduleLessonsCompleted = module.lessons.filter(l => l.completed).length

            return (
              <div key={module.id} className="border border-border rounded-lg overflow-hidden bg-card">
                <button
                  onClick={() => setExpandedModule(expandedModule === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between p-4 hover:bg-accent/5 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 text-left">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-semibold">{module.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {moduleLessonsCompleted} of {module.lessons.length} lessons
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <p className="text-xs font-medium">
                        {moduleLessonsCompleted}/{module.lessons.length}
                      </p>
                      <div className="h-1 w-12 rounded-full bg-accent/10 mt-1">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{
                            width: `${(moduleLessonsCompleted / module.lessons.length) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </button>

                {expandedModule === idx && (
                  <div className="border-t border-border space-y-2 p-4 bg-accent/2">
                    {module.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors text-left group"
                      >
                        {lesson.completed ? (
                          <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        ) : (
                          <PlayCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary flex-shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium">{lesson.title}</p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground flex-shrink-0">
                          <Clock className="h-3 w-3" />
                          {lesson.duration}m
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Certificate */}
          <div className="rounded-lg border border-border bg-accent/5 p-6 space-y-4 text-center">
            <h3 className="font-bold">Certificate of Completion</h3>
            {course.progress === 100 ? (
              <>
                <p className="text-sm text-muted-foreground">
                  You've completed this course! Download your certificate.
                </p>
                <Button className="w-full">
                  Download Certificate
                </Button>
              </>
            ) : (
              <>
                <p className="text-sm text-muted-foreground">
                  Complete all lessons to earn your certificate.
                </p>
                <div className="h-2 w-full rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </>
            )}
          </div>

          {/* Course Resources */}
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h3 className="font-bold">Resources</h3>
            <div className="space-y-2">
              {[
                'Course Slides',
                'Project Files',
                'Equipment Guide',
                'Glossary',
              ].map((resource, i) => (
                <button
                  key={i}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent/10 transition-colors text-sm font-medium"
                >
                  {resource}
                </button>
              ))}
            </div>
          </div>

          {/* Instructor Info */}
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h3 className="font-bold">About Instructor</h3>
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                SC
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">{course.instructor}</p>
                <p className="text-xs text-muted-foreground">Video Producer & Educator</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Sarah has over 10 years of experience in video production and has helped thousands of creators launch their careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
