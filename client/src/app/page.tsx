import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center text-white px-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-2">100xCode</h1>
        <p className="text-xl">Competitive coding challenges with real-time rewards</p>
      </header>

      <main className="text-center mb-8">
        <p className="mb-6 max-w-md">
          Join live coding battles, face AI-generated challenges, and compete for real rewards.
          Create a room, set the stakes, and prove your coding skills against others in real-time.
        </p>
      </main>

      <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 rounded-lg py-2 px-4">
        <Link href="/signin">Sign In</Link>
      </Button>
    </div>
  )
}
