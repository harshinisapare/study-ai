import { CheckCircle2, PlayCircle } from 'lucide-react';
import Button from '../components/common/Button';

const questions = [
  { title: 'What is the main function of mitochondria?', status: 'Answered' },
  { title: 'Which process converts sunlight into chemical energy?', status: 'Pending' },
  { title: 'Define Newton’s second law.', status: 'Review' },
];

export default function Quiz() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Quiz</p>
          <h1 className="text-3xl font-semibold text-slate-900">Practice and track your progress</h1>
        </div>
        <Button className="flex items-center gap-2">
          <PlayCircle className="h-4 w-4" />
          Start Quiz
        </Button>
      </div>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Quiz Overview</h2>
            <p className="mt-2 text-sm text-slate-500">A quick recap of your latest practice set and progress.</p>
          </div>
          <div className="rounded-2xl bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-700">
            7/10 questions completed
          </div>
        </div>

        <div className="mt-5 h-2 rounded-full bg-slate-200">
          <div className="h-2 w-3/4 rounded-full bg-indigo-600" />
        </div>

        <div className="mt-6 space-y-3">
          {questions.map((question) => (
            <div key={question.title} className="flex items-center justify-between rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="text-sm font-medium text-slate-700">{question.title}</span>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="h-4 w-4 text-indigo-500" />
                {question.status}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
