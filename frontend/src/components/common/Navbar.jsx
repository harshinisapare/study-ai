import { Bell, Search, UserCircle2 } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white/80 px-4 py-4 sm:px-6 lg:px-8">
      <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500 shadow-sm sm:min-w-[320px]">
        <Search className="h-4 w-4" />
        <input
          className="w-full bg-transparent outline-none placeholder:text-slate-400"
          placeholder="Search notes, documents, quizzes"
        />
      </label>

      <div className="flex items-center gap-3">
        <button className="relative rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-600 shadow-sm transition hover:text-indigo-600">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-indigo-600" />
        </button>
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 shadow-sm">
          <UserCircle2 className="h-8 w-8 text-slate-400" />
          <div>
            <p className="text-sm font-semibold text-slate-900">Ava</p>
            <p className="text-xs text-slate-500">Student</p>
          </div>
        </div>
      </div>
    </header>
  );
}
