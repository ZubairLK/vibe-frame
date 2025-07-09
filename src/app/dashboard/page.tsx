"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { mockLinks } from "@/lib/mock-data/links";
import { mockUser } from "@/lib/mock-data/users";

export default function DashboardPage() {
  const [links, setLinks] = useState(mockLinks.slice(0, 3));
  const [handle, setHandle] = useState(mockUser.handle);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation */}
      <header className="bg-white dark:bg-gray-800 border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">VibeFrame</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">Preview</Button>
            <Button variant="outline" size="sm">Share</Button>
            <Button variant="ghost" size="sm">Sign Out</Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 border-r min-h-[calc(100vh-65px)]">
          <nav className="p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="#"><span className="mr-2">🏠</span> Home</Link>
            </Button>
            <Button variant="secondary" className="w-full justify-start">
              <span className="mr-2">🔗</span> Links
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="#"><span className="mr-2">📊</span> Stats</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="#"><span className="mr-2">⚙️</span> Settings</Link>
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Edit Your Page</h2>

            {/* Handle Section */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <Label htmlFor="handle">Handle</Label>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-muted-foreground">vibeframe.com/</span>
                  <Input
                    id="handle"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    className="max-w-xs"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Links Section */}
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold">Your Links</h3>
              {links.map((link, index) => (
                <Card key={link.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-4">
                        <div className="text-sm text-muted-foreground mb-2">Link {index + 1}</div>
                        <div>
                          <Label htmlFor={`title-${link.id}`}>Title:</Label>
                          <Input
                            id={`title-${link.id}`}
                            value={link.title}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`url-${link.id}`}>URL:</Label>
                          <Input
                            id={`url-${link.id}`}
                            value={link.url}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button variant="ghost" size="sm">↑</Button>
                        <Button variant="ghost" size="sm">↓</Button>
                        <Button variant="ghost" size="sm">🗑</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add Link Button */}
            <Button variant="outline" className="w-full mb-6">
              + Add Another Link
            </Button>

            {/* Save Button */}
            <Button className="w-full mb-6" size="lg">
              Save Changes
            </Button>

            {/* Preview Link */}
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">Preview Link:</p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/profile">
                    <span className="mr-2">👁️</span> View Live Page: vibeframe.com/{handle}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      <Link href="/" className="fixed bottom-4 left-4">
        <Button variant="ghost" size="sm">
          ← Back to Home
        </Button>
      </Link>
    </div>
  );
}