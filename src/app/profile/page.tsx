import Link from "next/link";
import { Button } from "@/components/ui/button";
import { mockLinks } from "@/lib/mock-data/links";
import { mockUser } from "@/lib/mock-data/users";

export default function ProfilePage() {
  const displayLinks = mockLinks.slice(0, 3); // Show first 3 links

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-md mx-auto px-4 py-16">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl">👤</span>
          </div>
          <h1 className="text-xl font-bold mb-2">@{mockUser.handle}</h1>
          <p className="text-gray-600 dark:text-gray-400">{mockUser.bio}</p>
        </div>

        {/* Links Section */}
        <div className="space-y-4 mb-16">
          {displayLinks.map((link) => (
            <Button
              key={link.id}
              variant="outline"
              className="w-full h-16 text-base font-medium hover:scale-[1.02] transition-transform"
              asChild
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title}
              </Link>
            </Button>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400">
          Powered by VibeFrame
        </footer>
      </div>

      <Link href="/" className="fixed top-4 left-4">
        <Button variant="ghost" size="sm">
          ← Back to Home
        </Button>
      </Link>
    </main>
  );
}