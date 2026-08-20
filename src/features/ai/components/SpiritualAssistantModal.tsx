'use client';

import React, { useState } from 'react';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

export const SpiritualAssistantModal: React.FC = () => {
  const { currentLanguage } = useLanguageTheme();
  const isTe = currentLanguage === 'te';
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ sender: 'user' | 'ai'; text: string }[]>([
    {
      sender: 'ai',
      text: isTe
        ? 'నమస్కారం! నేను ఆలయ దివ్య AI సహాయకుడిని. దర్శనం వేళలు, సేవా వివరాలు లేదా పంచాంగం గురించి నన్ను అడగండి.'
        : 'Namaste! I am the temple AI Assistant. Ask me about Darshan timings, Seva details, or daily Panchangam.',
    },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMsg = query;
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setQuery('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: isTe
            ? 'ప్రధాన ఆలయ దర్శనం ఉదయం 6:00 నుండి రాత్రి 8:30 వరకు తెరిచి ఉంటుంది. నిత్య అన్నదానం మధ్యాహ్నం 11:30 కి ప్రారంభమవుతుంది.'
            : 'Main temple Darshan is open from 6:00 AM to 8:30 PM. Nitya Annadanam begins at 11:30 AM.',
        },
      ]);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[var(--color-primary)] text-white shadow-2xl hover:scale-110 transition-all flex items-center justify-center space-x-2 cursor-pointer"
      >
        <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
        <span className="text-xs font-bold hidden sm:inline">
          {isTe ? 'AI సహాయకుడు' : 'AI Assistant'}
        </span>
      </button>

      {/* Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 right-3 left-3 sm:left-auto sm:right-6 z-50 w-auto sm:w-96 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[460px] sm:h-[480px]">
          <div className="p-4 bg-[var(--color-secondary)] text-white font-serif font-bold flex items-center justify-between">
            <span className="flex items-center gap-2"><i className="fa-solid fa-wand-magic-sparkles text-[var(--color-accent-gold)]"></i> Devalaya AI Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-sm hover:opacity-80 cursor-pointer">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[var(--bg-base)]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[var(--color-primary)] text-white rounded-br-none'
                      : 'bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] rounded-bl-none shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center space-x-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={isTe ? 'మీ ప్రశ్నను టైప్ చేయండి...' : 'Ask a question...'}
              className="flex-1 px-3 py-2 text-xs border border-[var(--border-subtle)] rounded-xl bg-[var(--bg-elevated)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)]"
            />
            <button
              type="submit"
              className="px-4 py-2 text-xs font-bold rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};
