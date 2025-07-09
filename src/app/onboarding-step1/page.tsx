"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OnboardingStep1() {
  const [handle, setHandle] = useState("yourhandle");
  const isAvailable = true; // Mock availability

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">VibeFrame</h1>
          <h2 className="text-xl text-muted-foreground">Welcome to VibeFrame!</h2>
          <p className="text-sm text-muted-foreground mt-2">Step 1 of 2: Choose your handle</p>
        </div>

        <Card>
          <CardHeader className="text-center pb-8">
            <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔗</span>
            </div>
            <CardTitle>Create your link in bio!</CardTitle>
            <CardDescription>Choose a unique handle for your page</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="handle">Your Handle</Label>
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    vibeframe.com/
                  </span>
                  <Input 
                    id="handle"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    className="pl-[140px]"
                    placeholder="yourhandle"
                  />
                </div>
              </div>
              {handle && (
                <div className="flex items-center space-x-2">
                  <Badge variant={isAvailable ? "default" : "destructive"} className="text-xs">
                    {isAvailable ? "✓ Available" : "✗ Taken"}
                  </Badge>
                </div>
              )}
            </div>

            {handle && (
              <div className="p-4 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Preview:</p>
                <p className="font-medium">vibeframe.com/{handle}</p>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <Button variant="ghost" asChild>
                <Link href="/dashboard">Skip for now</Link>
              </Button>
              <Button asChild>
                <Link href="/onboarding-step2">Continue to Step 2</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-muted"></div>
          </div>
        </div>
      </div>

      <Link href="/" className="absolute top-4 left-4">
        <Button variant="ghost" size="sm">
          ← Back to Home
        </Button>
      </Link>
    </main>
  );
}