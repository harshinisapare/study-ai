import { MessageCircleMore } from 'lucide-react';

export default function ChatCard({ title, preview, time }) {
  return (
    <article className="flex items-start gap-3 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
        <MessageCircleMore className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="truncate font-semibold text-slate-900">{title}</h3>
          <span className="text-xs text-slate-400">{time}</span>
        </div>
        <p className="mt-1 text-sm text-slate-500">{preview}</p>
      </div>
    </article>
  );
}
