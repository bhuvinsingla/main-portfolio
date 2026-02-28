import React from 'react';
import { Section } from './Section';
import { ASSETS } from '../constants';
import { Mic, AudioLines, Brain, Sparkles, Layers } from 'lucide-react';

const llms = ['GPT‑4 class models', 'Claude', 'Gemini', 'Llama 3', 'Custom fine‑tuned APIs'];
const sttModels = ['Whisper', 'Deepgram', 'AssemblyAI', 'Google Speech'];
const ttsModels = ['ElevenLabs', 'Azure Neural TTS', 'Google Cloud TTS', 'Amazon Polly'];

export const Expertise: React.FC = () => {
  return (
    <Section
      id="expertise"
      title="Voice Agent Expertise"
      subtitle="Designing human, fast, and reliable voice agents—powered by modern LLMs, STT, TTS, RAG, and flows."
    >
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left: principles */}
        <div className="lg:col-span-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-brand-300">
            <Mic className="w-3 h-3" />
            voice · llm · flows
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            I build voice agents that feel less like IVRs and more like real people—using streaming STT, low‑latency TTS,
            strong prompt + tool design, and RAG for grounded answers.
          </p>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-400" />
              What matters most
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• <span className="font-semibold">Humanize the conversation</span> — natural tone, turn‑taking, clarifications, and graceful fallbacks.</li>
              <li>• <span className="font-semibold">Latency obsessed</span> — streaming STT/TTS, pre‑warming, caching, and minimal round‑trips.</li>
              <li>• <span className="font-semibold">Efficient prompts &amp; tools</span> — concise, structured prompts and clear tool contracts to keep calls cheap and predictable.</li>
              <li>• <span className="font-semibold">Task‑first flows</span> — the agent knows the goal (book, qualify, resolve) and gently drives toward it.</li>
            </ul>
          </div>
        </div>

        {/* Middle: stack (LLM / STT / TTS / RAG / Flow) */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-brand-400" />
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">LLMs · STT · TTS</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
              <p className="text-xs font-semibold text-slate-400 mb-3">LLMs</p>
              <div className="flex flex-wrap gap-2">
                {llms.map((item) => (
                  <span key={item} className="px-2 py-1 rounded-full border border-slate-700/80 bg-slate-900/60 text-[11px] text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
              <p className="text-xs font-semibold text-slate-400 mb-3">Speech‑to‑Text (STT)</p>
              <div className="flex flex-wrap gap-2">
                {sttModels.map((item) => (
                  <span key={item} className="px-2 py-1 rounded-full border border-slate-700/80 bg-slate-900/60 text-[11px] text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
              <p className="text-xs font-semibold text-slate-400 mb-3">Text‑to‑Speech (TTS)</p>
              <div className="flex flex-wrap gap-2">
                {ttsModels.map((item) => (
                  <span key={item} className="px-2 py-1 rounded-full border border-slate-700/80 bg-slate-900/60 text-[11px] text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-400" />
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide">RAG &amp; flows</p>
            </div>
            <p className="text-xs text-slate-400">
              Designing flows with RAG, tools, and memory: clarify → fetch context → act → confirm,
              instead of a single giant prompt.
            </p>
          </div>
        </div>

        {/* Right: tools, images, domains */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AudioLines className="w-5 h-5 text-brand-400" />
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Voice platforms &amp; tools</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Vapi', img: ASSETS('pics/vapi.png') },
                { name: 'Retell', img: ASSETS('pics/retell.png') },
                { name: 'Twilio Voice', img: ASSETS('pics/twilio.png') },
                { name: 'Daily / WebRTC', img: ASSETS('pics/daily.png') },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="relative flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 overflow-hidden"
                >
                  <div className="h-7 w-7 rounded-lg bg-slate-800 flex items-center justify-center text-[10px] text-slate-200 font-semibold">
                    <img
                      src={tool.img}
                      alt={tool.name}
                      className="h-7 w-7 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-xs text-slate-200">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Mic className="w-4 h-4 text-brand-400" />
              Domains I love building for
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Customer support',
                'Lead qualification',
                'Appointment booking',
                'Internal IT helpdesk',
                'Sales discovery',
                'Status updates & reminders',
              ].map((domain) => (
                <span
                  key={domain}
                  className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60 text-[11px] text-slate-200"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

