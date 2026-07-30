import React from 'react';
import { Section } from './Section';
import { ASSETS } from '../constants';
import { Mic, AudioLines, Brain, Sparkles, Layers } from 'lucide-react';
import { Reveal } from './Reveal';

const llms = ['GPT‑4 class models', 'Claude', 'Gemini', 'Llama 3', 'Custom fine‑tuned APIs'];
const sttModels = ['Whisper', 'Deepgram', 'AssemblyAI', 'Google Speech'];
const ttsModels = ['ElevenLabs', 'Azure Neural TTS', 'Google Cloud TTS', 'Amazon Polly'];

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-2 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] text-zinc-300">
    {children}
  </span>
);

export const Expertise: React.FC = () => {
  return (
    <Section
      index="04"
      id="expertise"
      title="Voice Agent Expertise"
      subtitle="Designing human, fast, and reliable voice agents - LLMs, STT, TTS, RAG, and flows."
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <Reveal className="lg:col-span-1 space-y-5" delay={0}>
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono uppercase tracking-widest text-brand-300">
            <Mic className="w-3 h-3" />
            voice · llm · flows
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed">
            I build voice agents that feel less like IVRs and more like real people - streaming STT, low‑latency TTS,
            strong prompt + tool design, and RAG for grounded answers.
          </p>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-400" />
              What matters most
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>• <span className="text-zinc-300 font-medium">Humanize</span> - natural tone, turn‑taking, graceful fallbacks.</li>
              <li>• <span className="text-zinc-300 font-medium">Latency obsessed</span> - streaming, pre‑warming, minimal round‑trips.</li>
              <li>• <span className="text-zinc-300 font-medium">Efficient prompts</span> - structured tools, predictable costs.</li>
              <li>• <span className="text-zinc-300 font-medium">Task‑first flows</span> - goal‑driven conversations.</li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="space-y-4" delay={100}>
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-brand-400" />
            <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wide">LLMs · STT · TTS</h3>
          </div>
          {[
            ['LLMs', llms],
            ['Speech‑to‑Text', sttModels],
            ['Text‑to‑Speech', ttsModels],
          ].map(([label, items], i) => (
            <div key={label as string} className={`glass shape-card p-4 ${i % 2 === 0 ? 'shape-expertise' : 'shape-expertise-alt'}`}>
              <p className="text-xs font-semibold text-zinc-500 mb-3">{label}</p>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((item) => <Pill key={item}>{item}</Pill>)}
              </div>
            </div>
          ))}
          <div className="glass shape-card shape-expertise p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-400" />
              <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wide">RAG &amp; flows</p>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Clarify → fetch context → act → confirm, instead of one giant prompt.
            </p>
          </div>
        </Reveal>

        <Reveal className="space-y-5" delay={200}>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AudioLines className="w-5 h-5 text-brand-400" />
              <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wide">Platforms &amp; tools</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Vapi', img: ASSETS('pics/vapi.png') },
                { name: 'Retell', img: ASSETS('pics/retell.png') },
                { name: 'Twilio Voice', img: ASSETS('pics/twilio.png') },
                { name: 'Daily / WebRTC', img: ASSETS('pics/daily.png') },
              ].map((tool) => (
                <div key={tool.name} className="glass shape-card shape-social flex items-center gap-2 px-3 py-2">
                  <div className="h-7 w-7 rounded-lg bg-white/5 flex items-center justify-center">
                    <img src={tool.img} alt={tool.name} className="h-6 w-6 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  </div>
                  <span className="text-xs text-zinc-300">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-3 flex items-center gap-2">
              <Mic className="w-4 h-4 text-brand-400" />
              Domains I build for
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Customer support', 'Lead qualification', 'Appointment booking', 'IT helpdesk', 'Sales discovery', 'Status updates'].map((d) => (
                <Pill key={d}>{d}</Pill>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
