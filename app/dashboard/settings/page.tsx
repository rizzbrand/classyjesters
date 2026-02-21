'use client'

import { User, Bell, Lock, Palette, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account')

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Lock },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'billing', label: 'Billing', icon: CreditCard },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* Tabs */}
      <div className="grid gap-6 lg:grid-cols-4">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent text-accent-foreground'
                      : 'hover:bg-accent/5 text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Account Settings */}
          {activeTab === 'account' && (
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6 space-y-6">
                <h2 className="text-xl font-bold">Profile Information</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue="John Creator"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Bio</label>
                    <textarea
                      defaultValue="Passionate content creator and AI enthusiast"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      rows={4}
                    />
                  </div>
                </div>

                <Button>Save Changes</Button>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === 'notifications' && (
            <div className="space-y-4">
              {[
                { title: 'Course Updates', description: 'Get notified when new content is added' },
                { title: 'Tool Notifications', description: 'Alerts about your generated content' },
                { title: 'Weekly Digest', description: 'Summary of your activity and learning progress' },
                { title: 'Promotional', description: 'New features and special offers' },
              ].map((notif, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
                >
                  <div>
                    <p className="font-medium">{notif.title}</p>
                    <p className="text-sm text-muted-foreground">{notif.description}</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5 cursor-pointer" />
                </div>
              ))}
              <Button>Save Preferences</Button>
            </div>
          )}

          {/* Privacy & Security */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6 space-y-4">
                <h2 className="text-xl font-bold">Change Password</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Password</label>
                    <input
                      type="password"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button>Update Password</Button>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 space-y-4">
                <h2 className="text-xl font-bold">Two-Factor Authentication</h2>
                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                <Button variant="outline">Enable 2FA</Button>
              </div>
            </div>
          )}

          {/* Appearance */}
          {activeTab === 'appearance' && (
            <div className="rounded-lg border border-border bg-card p-6 space-y-6">
              <h2 className="text-xl font-bold">Theme</h2>
              <div className="space-y-3">
                {[
                  { label: 'Light', value: 'light' },
                  { label: 'Dark', value: 'dark' },
                  { label: 'Auto', value: 'auto' },
                ].map((theme) => (
                  <label key={theme.value} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/5 cursor-pointer">
                    <input type="radio" name="theme" defaultChecked={theme.value === 'dark'} />
                    <span className="font-medium">{theme.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Billing */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6 space-y-4">
                <h2 className="text-xl font-bold">Current Plan</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Plan Type</span>
                    <span className="font-bold">Pro Annual</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Renewal Date</span>
                    <span className="font-bold">Dec 15, 2025</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Manage Billing</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
