import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../common/Button';

export default function ContinueCard() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 p-6 text-white shadow-xl shadow-indigo-100">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <div className="mb-3 flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm">
            <Sparkles className="h-4 w-4" />
            Continue studying
          </div>
          <h2 className="text-2xl font-semibold">Pick up your Biology revision session</h2>
          <p className="mt-2 text-sm text-indigo-50">
            Your last session was focused on photosynthesis and cellular respiration. Resume where you left off.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="bg-white text-indigo-700 hover:bg-indigo-50">
            Resume
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">
            View summary <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
