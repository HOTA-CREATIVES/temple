'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

export const SpiritualAssistantModal: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ sender: 'user' | 'ai'; text: string }[]>([
    {
      sender: 'ai',
      text:
        language === 'te'
          ? 'నమస్కారం! నేను ఆలయ దివ్య AI సహాయకుడిని. దర్శనం వేళలు, సేవా వివరాలు లేదా పంచాంగం గురించి నన్ను అడగండి.'
          : language === 'kn'
          ? 'నమస్కార! నాను దేవాలయ దివ్య AI సహాయక. దర్శన సమయగల బగ్గె కేళి.'
          : language === 'ta'
          ? 'வணக்கம்! நான் கோயில் AI సహాయకన్. தரிசன நேரங்களை கேளுங்கள்.'
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
          text:
            language === 'te'
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
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[var(--color-primary)] text-white shadow-2xl hover:scale-110 transition-all flex items-center justify-center space-x-2"
      >
        <span className="text-2xl">✨</span>
        <span className="text-xs font-bold hidden sm:inline">
          {language === 'te' ? 'AI సహాయకుడు' : 'AI Assistant'}
        </span>
      </button>

      {/* Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-[var(--bg-card)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[480px]">
          <div className="p-4 bg-[var(--color-primary)] text-white font-serif font-bold flex items-center justify-between">
            <span>✨ Devalaya AI Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-sm">
              ✕
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
                      : 'bg-[var(--bg-card)] border border-[var(--color-border)] text-[var(--color-text-main)] rounded-bl-none shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 border-t border-[var(--color-border)] bg-[var(--bg-card)] flex items-center space-x-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={language === 'te' ? 'మీ ప్రశ్నను టైప్ చేయండి...' : 'Ask a question...'}
              className="flex-1 px-3 py-2 text-xs border border-[var(--color-border)] rounded-lg bg-[var(--bg-base)] text-[var(--color-text-main)]"
            />
            <button
              type="submit"
              className="px-3 py-2 text-xs font-bold rounded-lg bg-[var(--color-primary)] text-white"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};
