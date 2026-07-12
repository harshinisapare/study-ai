import { FileText, Sparkles } from 'lucide-react';

export default function DocumentCard({ title, subtitle, badge, accent = 'indigo' }) {
  const accentClasses = {
    indigo: 'from-indigo-50 to-white text-indigo-700',
    violet: 'from-violet-50 to-white text-violet-700',
    emerald: 'from-emerald-50 to-white text-emerald-700',
  };

  return (
    <article className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accentClasses[accent]}`}>
        <FileText className="h-5 w-5" />
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{badge}</span>
        </div>
        <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-indigo-600">
        <Sparkles className="h-4 w-4" />
        AI-ready
      </div>
    </article>
  );
}
