import { Moon, Sparkles, UserCircle2 } from 'lucide-react';
import Button from '../components/common/Button';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Settings</p>
        <h1 className="text-3xl font-semibold text-slate-900">Personalize your study experience</h1>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-slate-100 p-3">
              <UserCircle2 className="h-8 w-8 text-slate-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Profile</h2>
              <p className="text-sm text-slate-500">Update your study preferences and personal details.</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-700">Name</p>
              <p className="mt-1 text-sm text-slate-500">Ava Carter</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-700">Study focus</p>
              <p className="mt-1 text-sm text-slate-500">Biology, History, and Physics</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-100 p-2.5">
                <Moon className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Appearance</h3>
                <p className="text-sm text-slate-500">Choose a UI theme that suits your study flow.</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="text-sm text-slate-600">Light mode</span>
              <Button variant="secondary">Edit</Button>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-indigo-50 p-2.5">
                <Sparkles className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">AI Preferences</h3>
                <p className="text-sm text-slate-500">Control how your AI assistant responds and summarizes content.</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">Concise summaries</div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">Quiz generation enabled</div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">Flashcard mode: active</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
