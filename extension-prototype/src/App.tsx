import {
  ArrowDownToLine,
  BadgeCheck,
  Clock3,
  Film,
  Image,
  Layers3,
  Mic2,
  PanelTop,
  Play,
  RefreshCw,
  Search,
  Sparkles,
  Wand2,
} from 'lucide-react';

const tabs = [
  { label: 'Video', icon: Film, active: true },
  { label: 'Image', icon: Image, active: false },
  { label: 'Audio', icon: Mic2, active: false },
];

const modelCards = [
  { name: 'Veo', detail: 'Cinematic b-roll', cost: '18 cr', active: true },
  { name: 'KlingAI', detail: 'Fast motion tests', cost: '12 cr', active: false },
  { name: 'Nano Banana', detail: 'Thumbnail stills', cost: '4 cr', active: false },
];

const timelineAssets = [
  { name: 'UGC hook A', type: '9:16 clip', status: 'Ready' },
  { name: 'Voiceover V2', type: 'Audio stem', status: 'Synced' },
  { name: 'Thumbnail set', type: '3 images', status: 'Ready' },
];

const queue = [
  { label: 'Scene extension', progress: 78 },
  { label: 'Color matched still', progress: 52 },
  { label: 'SFX search', progress: 31 },
];

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#151515] p-4 font-sans text-white">
      <section className="w-full max-w-[420px] overflow-hidden rounded-lg border border-white/10 bg-[#070707] shadow-2xl">
        <header className="border-b border-white/10 bg-black px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-lime-300 text-black">
                <Wand2 className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em]">Prompt Edit</p>
                <p className="mt-0.5 text-xs text-zinc-500">Premiere / Resolve panel</p>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:text-white"
              aria-label="Refresh extension panel"
            >
              <RefreshCw className="size-4" aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className="space-y-4 p-4">
          <div className="grid grid-cols-3 gap-1 rounded-lg bg-white/[0.05] p-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.label}
                  type="button"
                  className={`flex items-center justify-center gap-2 rounded-md px-3 py-2 text-xs font-semibold ${
                    tab.active ? 'bg-white text-black' : 'text-zinc-500'
                  }`}
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <section className="rounded-lg border border-white/10 bg-zinc-950 p-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-lime-300">Timeline aware</p>
                <h1 className="mt-2 text-xl font-semibold leading-tight">Generate from selected clip</h1>
              </div>
              <div className="flex size-12 items-center justify-center rounded-lg bg-lime-300 text-black">
                <PanelTop className="size-6" aria-hidden="true" />
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Uses the active sequence, selected clip, and project aspect ratio to create editor-ready AI assets.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">Model</h2>
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-zinc-400">184 credits</span>
            </div>

            {modelCards.map((model) => (
              <button
                key={model.name}
                type="button"
                className={`flex w-full items-center justify-between gap-3 rounded-lg border p-3 text-left ${
                  model.active ? 'border-lime-300 bg-lime-300 text-black' : 'border-white/10 bg-zinc-950 text-white'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold">{model.name}</p>
                    {model.active ? <BadgeCheck className="size-4" aria-hidden="true" /> : null}
                  </div>
                  <p className={`mt-1 text-xs ${model.active ? 'text-black/60' : 'text-zinc-500'}`}>{model.detail}</p>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${model.active ? 'bg-black text-lime-200' : 'bg-white/10 text-zinc-400'}`}>
                  {model.cost}
                </span>
              </button>
            ))}
          </section>

          <section>
            <label className="text-sm font-semibold" htmlFor="extension-prompt">
              Prompt
            </label>
            <textarea
              id="extension-prompt"
              rows={5}
              className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-black px-3 py-2 text-sm leading-6 text-white outline-none placeholder:text-zinc-600 focus:border-lime-300"
              placeholder="Extend this product shot into a 5-second UGC hook with handheld camera movement and clean studio lighting..."
            />
          </section>

          <div className="grid grid-cols-2 gap-2">
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-zinc-200">
              <Search className="size-4" aria-hidden="true" />
              Find SFX
            </button>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-300 px-3 py-3 text-sm font-bold text-black">
              <Sparkles className="size-4" aria-hidden="true" />
              Generate
            </button>
          </div>

          <section className="rounded-lg border border-white/10 bg-zinc-950 p-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">Render queue</h2>
              <Clock3 className="size-4 text-zinc-500" aria-hidden="true" />
            </div>

            <div className="mt-3 space-y-3">
              {queue.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-300">{item.label}</span>
                    <span className="text-zinc-500">{item.progress}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-lime-300" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-white/10 bg-zinc-950 p-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">Ready for timeline</h2>
              <Layers3 className="size-4 text-zinc-500" aria-hidden="true" />
            </div>

            <div className="mt-3 space-y-2">
              {timelineAssets.map((asset) => (
                <div key={asset.name} className="flex items-center justify-between rounded-md bg-black px-3 py-2">
                  <div>
                    <p className="text-sm font-medium">{asset.name}</p>
                    <p className="mt-0.5 text-xs text-zinc-500">{asset.type}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-zinc-300">{asset.status}</span>
                </div>
              ))}
            </div>
          </section>

          <footer className="grid grid-cols-[1fr_auto] gap-2">
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-3 text-sm font-semibold text-zinc-300">
              <Play className="size-4" aria-hidden="true" />
              Preview
            </button>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-black">
              <ArrowDownToLine className="size-4" aria-hidden="true" />
              Insert
            </button>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default App;
