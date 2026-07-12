import { BookOpen, Compass, FileText, MessageSquareText, Sparkles } from 'lucide-react';
import ContinueCard from '../components/workspace/ContinueCard';
import ActionCard from '../components/workspace/ActionCard';
import DocumentCard from '../components/workspace/DocumentCard';
import ChatCard from '../components/workspace/ChatCard';

const actionItems = [
  { title: 'Generate Summary', description: 'Turn a PDF into a concise study guide.', icon: Sparkles },
  { title: 'Create Quiz', description: 'Build a revision quiz in seconds.', icon: Compass },
  { title: 'Make Notes', description: 'Extract key ideas into structured notes.', icon: FileText },
  { title: 'Ask AI', description: 'Chat with your documents using RAG.', icon: MessageSquareText },
];

const documents = [
  { title: 'Biology Notes', subtitle: 'Photosynthesis and cell respiration', badge: 'PDF', accent: 'indigo' },
  { title: 'History Essay', subtitle: 'World War II lecture notes', badge: 'PDF', accent: 'violet' },
  { title: 'Physics Review', subtitle: 'Kinematics summaries', badge: 'PDF', accent: 'emerald' },
];

const chats = [
  { title: 'Explain this chapter', preview: 'Summarize the key takeaways from my uploaded notes.', time: '10m ago' },
  { title: 'Quiz me on calculus', preview: 'Generate 5 practice questions from this worksheet.', time: '1h ago' },
];

export default function Workspace() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Welcome back</p>
          <h1 className="text-3xl font-semibold text-slate-900">Your AI study workspace is ready.</h1>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
          3 documents synced • 2 AI sessions today
        </div>
      </div>

      <ContinueCard />

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Quick AI Actions</h2>
          <span className="text-sm text-slate-500">Start in one click</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {actionItems.map((item) => (
            <ActionCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Recently Opened Documents</h2>
            <button className="text-sm font-medium text-indigo-600">View all</button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {documents.map((doc) => (
              <DocumentCard key={doc.title} {...doc} />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Recent AI Conversations</h2>
            <button className="text-sm font-medium text-indigo-600">Open</button>
          </div>
          <div className="space-y-3">
            {chats.map((chat) => (
              <ChatCard key={chat.title} {...chat} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
