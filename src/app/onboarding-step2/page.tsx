"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface LinkData {
  title: string;
  url: string;
}

export default function OnboardingStep2() {
  const [links, setLinks] = useState<LinkData[]>([
    { title: "My Portfolio", url: "https://myportfolio.com" },
    { title: "Twitter", url: "https://twitter.com/myhandle" },
    { title: "", url: "" }
  ]);

  const updateLink = (index: number, field: keyof LinkData, value: string) => {
    const newLinks = [...links];
    newLinks[index][field] = value;
    setLinks(newLinks);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">VibeFrame</h1>
          <h2 className="text-xl text-muted-foreground">Add Your Links</h2>
          <p className="text-sm text-muted-foreground mt-2">Step 2 of 2: Add up to 3 links to get started</p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-6">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg">
                <h3 className="font-medium text-sm text-muted-foreground">Link {index + 1}</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`title-${index}`}>Title</Label>
                    <Input
                      id={`title-${index}`}
                      value={link.title}
                      onChange={(e) => updateLink(index, "title", e.target.value)}
                      placeholder={index === 2 ? "Add a title..." : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`url-${index}`}>URL</Label>
                    <Input
                      id={`url-${index}`}
                      value={link.url}
                      onChange={(e) => updateLink(index, "url", e.target.value)}
                      placeholder={index === 2 ? "Add a URL..." : ""}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between pt-4">
              <Button variant="ghost" asChild>
                <Link href="/dashboard">Skip for now</Link>
              </Button>
              <Button asChild>
                <Link href="/dashboard">Create My Page</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-muted"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
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