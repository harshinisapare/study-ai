import { Filter } from 'lucide-react';
import Button from '../components/common/Button';

const flashcards = [
  { front: 'What is photosynthesis?', back: 'The process plants use to turn light into chemical energy.', category: 'Biology' },
  { front: 'What is acceleration?', back: 'The rate of change of velocity over time.', category: 'Physics' },
  { front: 'What caused the war?', back: 'A combination of nationalism, militarism, and alliances.', category: 'History' },
];

export default function Flashcards() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Flashcards</p>
          <h1 className="text-3xl font-semibold text-slate-900">Study smarter with spaced review</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary">Shuffle</Button>
          <Button className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {['All', 'Biology', 'Physics', 'History'].map((item) => (
          <button key={item} className={`rounded-full px-3 py-2 text-sm font-medium ${item === 'All' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 shadow-sm'}`}>
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {flashcards.map((card) => (
          <article key={card.front} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">{card.category}</span>
              <span className="text-sm text-slate-400">Flip</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{card.front}</h3>
            <p className="mt-2 text-sm text-slate-500">{card.back}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
