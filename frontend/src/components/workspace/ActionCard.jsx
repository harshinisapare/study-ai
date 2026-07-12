import { ArrowRight } from 'lucide-react';

export default function ActionCard({ title, description, icon: Icon }) {
  return (
    <button className="flex items-start justify-between rounded-[24px] border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
      <ArrowRight className="h-4 w-4 text-slate-400" />
    </button>
  );
}
