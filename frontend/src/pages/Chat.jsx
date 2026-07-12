import { MessageCircleMore, SendHorizontal } from 'lucide-react';
import Button from '../components/common/Button';

const messages = [
  { role: 'assistant', text: 'I can help summarize your uploaded documents and answer questions from them.' },
  { role: 'user', text: 'What are the key ideas from my latest PDF?' },
];

const Chat = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">AI Workspace</p>
          <h1 className="text-3xl font-semibold text-slate-900">Chat with your documents</h1>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
          RAG-powered conversation • 2 active sources
        </div>
      </div>

      <section className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-2xl rounded-[24px] px-4 py-3 ${message.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                <div className="mb-1 flex items-center gap-2 text-sm font-medium">
                  {message.role === 'assistant' && <MessageCircleMore className="h-4 w-4" />}
                  {message.role === 'assistant' ? 'LearnFlow AI' : 'You'}
                </div>
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-[24px] border border-slate-200 bg-slate-50 p-3">
          <input className="flex-1 bg-transparent px-2 py-2 text-sm outline-none" placeholder="Ask about your documents..." />
          <Button className="rounded-2xl px-3 py-2">
            <SendHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Chat;
