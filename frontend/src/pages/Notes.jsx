import { Download, Search } from 'lucide-react';
import Button from '../components/common/Button';

const notes = [
  { title: 'Revision Summary', topic: 'Biology', preview: 'Key concepts for exam prep and fast review.', tag: 'AI Generated' },
  { title: 'Study Map', topic: 'History', preview: 'Timeline and causation branches for revision.', tag: 'Structured' },
  { title: 'Concept Checklist', topic: 'Chemistry', preview: 'Important formulas and conceptual checkpoints.', tag: 'Quick Review' },
];

export default function Notes() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Notes</p>
          <h1 className="text-3xl font-semibold text-slate-900">Turn ideas into clear revision notes</h1>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500 shadow-sm">
            <Search className="h-4 w-4" />
            <input className="bg-transparent outline-none" placeholder="Search notes" />
          </label>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {notes.map((note) => (
          <article key={note.title} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600">{note.tag}</span>
              <span className="text-sm text-slate-400">{note.topic}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{note.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{note.preview}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
