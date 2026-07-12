import { CloudUpload, Search, Sparkles } from 'lucide-react';
import Button from '../components/common/Button';
import DocumentCard from '../components/workspace/DocumentCard';

const documents = [
  { title: 'Machine Learning Basics', subtitle: 'Lecture slides and summary notes', badge: 'PDF', accent: 'indigo' },
  { title: 'Marketing Strategy', subtitle: 'Case study and framework notes', badge: 'DOCX', accent: 'violet' },
  { title: 'Chemistry Formula Sheet', subtitle: 'Quick revision reference', badge: 'PDF', accent: 'emerald' },
];

export default function Library() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Library</p>
          <h1 className="text-3xl font-semibold text-slate-900">Organize your study materials</h1>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500 shadow-sm">
            <Search className="h-4 w-4" />
            <input className="bg-transparent outline-none" placeholder="Search documents" />
          </label>
          <Button>Upload</Button>
        </div>
      </div>

      <section className="rounded-[28px] border border-dashed border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1 text-sm text-indigo-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Drag & drop uploads
            </div>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">Drop your PDFs here</h2>
            <p className="mt-2 text-sm text-slate-500">Build an AI-ready library for summaries, quizzes, notes, and chat interactions.</p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white bg-white/80 px-4 py-3 shadow-sm">
            <CloudUpload className="h-5 w-5 text-indigo-600" />
            <span className="text-sm font-medium text-slate-700">Supports PDF and DOCX</span>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Your Documents</h2>
          <span className="text-sm text-slate-500">3 items</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {documents.map((doc) => (
            <DocumentCard key={doc.title} {...doc} />
          ))}
        </div>
      </section>
    </div>
  );
}
