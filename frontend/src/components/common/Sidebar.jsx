import { NavLink, useLocation } from 'react-router-dom';
import { BookOpen, Compass, FileText, Home, Layers, MessageSquareText, Settings, Sparkles } from 'lucide-react';

const navItems = [
  { to: '/workspace', label: 'Workspace', icon: Home },
  { to: '/library', label: 'Library', icon: BookOpen },
  { to: '/chat', label: 'AI Workspace', icon: MessageSquareText },
  { to: '/notes', label: 'Notes', icon: FileText },
  { to: '/flashcards', label: 'Flashcards', icon: Layers },
  { to: '/quiz', label: 'Quiz', icon: Compass },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white/90 px-6 py-7 lg:flex">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-100">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-900">LearnFlow AI</p>
          <p className="text-sm text-slate-500">Study with clarity</p>
        </div>
      </div>

      <nav className="mt-8 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.to;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                active
                  ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-4 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Today&apos;s Goal</p>
        <div className="mt-3 space-y-3 text-sm text-slate-600">
          <div className="flex items-center justify-between">
            <span>Study Time</span>
            <span className="font-semibold text-slate-900">90 min</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Documents</span>
            <span className="font-semibold text-slate-900">4</span>
          </div>
          <div className="flex items-center justify-between">
            <span>AI Chats</span>
            <span className="font-semibold text-slate-900">7</span>
          </div>
          <div className="h-2 rounded-full bg-slate-200">
            <div className="h-2 w-3/4 rounded-full bg-indigo-600" />
          </div>
        </div>
      </div>
    </aside>
  );
}
