import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">VibeFrame Mockup</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Click any screen below to view the mockup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>Sign up and login screens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/signup" className="block">
                <Button variant="outline" className="w-full">Sign Up</Button>
              </Link>
              <Link href="/login" className="block">
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Onboarding</CardTitle>
              <CardDescription>New user onboarding flow</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/onboarding-step1" className="block">
                <Button variant="outline" className="w-full">Step 1: Choose Handle</Button>
              </Link>
              <Link href="/onboarding-step2" className="block">
                <Button variant="outline" className="w-full">Step 2: Add Links</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Main App</CardTitle>
              <CardDescription>Dashboard and public profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/dashboard" className="block">
                <Button variant="outline" className="w-full">Dashboard</Button>
              </Link>
              <Link href="/profile" className="block">
                <Button variant="outline" className="w-full">Public Profile</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>This is a static mockup - no functionality is implemented</p>
        </div>
      </div>
    </main>
  );
}
