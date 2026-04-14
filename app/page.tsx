import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center text-4xl mb-8 shadow-lg shadow-emerald-500/20">
        💰
      </div>
      <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
        Smart <span className="text-emerald-500">Expense</span> Tracker
      </h1>
      <p className="text-slate-400 text-lg max-w-md mb-10">
        AI-powered insights to help you manage your wealth, categorize spending, and hit your financial goals.
      </p>
      <div className="flex gap-4">
        <Link 
          href="/auth/signup" 
          className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105"
        >
          Get Started
        </Link>
        <Link 
          href="/auth/login" 
          className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3 rounded-xl font-bold transition-all"
        >
          Sign In
        </Link>
      </div>
    </div>
  )
}