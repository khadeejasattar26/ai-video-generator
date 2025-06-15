import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center px-4">
      <div className="relative z-10 w-full max-w-md p-8 rounded-3xl shadow-lg backdrop-blur-xl bg-white/5 border border-white/10 space-y-6 text-center text-white">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
          AI Video Generator
        </h1>
        <p className="text-white/80">Select a generator to get started:</p>

        <div className="space-y-4">
          <Link
            href="/marketing"
            className="block w-full px-6 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-pink-500/40"
          >
             Marketing Video Generator
          </Link>

          <Link
            href="/realestate"
            className="block w-full px-6 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-teal-500/40"
          >
             Real Estate Video Generator
          </Link>
        </div>

        <footer className="text-xs text-white/50 pt-6 border-t border-white/10">
          Built with  using Next.js + Tailwind
        </footer>
      </div>

      {/* Decorative background blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  );
}
