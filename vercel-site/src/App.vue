<script setup lang="ts">
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Image,
  Layers,
  Menu,
  Music,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Video,
  Wallet,
  Wand2,
  X,
  Zap,
} from '@lucide/vue';
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const assets = {
  logo: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/8228/images/4e61418-f758-6236-4be3-4eb4f0221be_Prompt_Edit_Logo_Black_Background_.png',
  hero: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159239506/settings_images/7cabac-1ca3-fb4d-188-dfb33dd0c7f_customize_order_mobile_.png',
  before: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/8228/images/821c2a-37e6-8b-b36-c8bad0746f1_Before_promptedit_copy.png',
  after: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/8228/images/c6cb82f-c0-1f2-b48-2eec5ff2d80d_After_promptedit_copy.png',
  imageTools: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/8228/images/233e63c-6d6f-0ca4-808b-806fa65dfad_photo_logos_arc_up.png',
  videoTools: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/8228/images/63d33-ef2a-bc4a-56ab-b70fca84f6eb_Video_tools.png',
  audioTools: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/8228/images/4d4fb-2ee3-06c6-a4a1-d8713a31744_audio_tools.png',
  pluginTools: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/8228/images/b3ee60-8322-eb08-ad-dcfada228c_ai_editing_plugins.png',
  payments: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159239506/settings_images/1d3e432-247a-f31b-eb7b-e30c840ddf_Payments_Image.png',
  lut: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159239506/settings_images/c3c1411-e65a-c6bd-ed30-85b2f3d04_CCT_LUT_software_boxes-min.png',
  sfx: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159239506/settings_images/a034f08-b326-36ed-f6fe-50306155df3_CCT_SFX_software_boxes-min.png',
  titles: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159239506/settings_images/ff6f173-68b-106-a30a-85f15cee8eaf_CCT_TITLE_software_boxes-min.png',
  overlays: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159239506/settings_images/a8bdaf0-73a-aea-7e84-4528311ad72_CCT_OVERLAY_software_boxes-min.png',
  guarantee: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159239506/settings_images/1f0177c-fcd5-a400-d321-00c6f66532_wQYLmC5ETUStuMB0TZ5X_eLWaGR9tRXaCrbFrZLsu_Satisfaction_Guarantee.png',
};

const navItems = ['Tools', 'Workflow', 'Pricing', 'Templates', 'FAQ'];

const modelChips = [
  'Veo',
  'Nano Banana',
  'KlingAI',
  'Seedance',
  'HeyGen',
  'ElevenLabs',
  'Suno',
  'Grok',
  'Ideogram',
  'GPT Image',
  'AI Clones',
  'Voice Swaps',
];

const categories = [
  {
    title: 'Image Studio',
    kicker: 'Nano Banana Pro, Ideogram, GPT Image',
    description: 'Generate thumbnails, ad creative, product scenes, clones, and social visuals without leaving one workspace.',
    image: assets.imageTools,
    icon: Image,
    accent: 'from-lime-300/90 to-emerald-400/80',
  },
  {
    title: 'Video Studio',
    kicker: 'Veo, Kling, Seedance',
    description: 'Move from prompt to cinematic shots, UGC hooks, reels, short-form ads, and visual effects with pay-as-you-go credits.',
    image: assets.videoTools,
    icon: Video,
    accent: 'from-cyan-300/90 to-blue-500/80',
  },
  {
    title: 'Audio Lab',
    kicker: 'ElevenLabs, Suno, voiceover tools',
    description: 'Create voiceovers, clone voices, swap audio, generate music beds, and produce sound effects for creator videos.',
    image: assets.audioTools,
    icon: Music,
    accent: 'from-amber-300/90 to-orange-500/80',
  },
  {
    title: 'Editing Plugins',
    kicker: 'Premiere Pro and DaVinci Resolve',
    description: 'Bring generation tools inside the editor so creators can create, preview, and drop assets straight into projects.',
    image: assets.pluginTools,
    icon: Wand2,
    accent: 'from-fuchsia-300/90 to-rose-500/80',
  },
];

const workflows = [
  {
    title: 'Create viral hooks',
    body: 'Turn one product or creator idea into UGC openers, short ads, thumbnails, and caption-ready visuals.',
    icon: Zap,
  },
  {
    title: 'Compare models faster',
    body: 'Try different generation engines without committing to multiple monthly subscriptions or separate dashboards.',
    icon: Search,
  },
  {
    title: 'Pay only when creating',
    body: 'Credits make the marketplace feel like buying gas for a project instead of renting every tool forever.',
    icon: Wallet,
  },
  {
    title: 'Finish inside the editor',
    body: 'Plugins support Premiere Pro and DaVinci workflows, so AI assets can land closer to the editing timeline.',
    icon: Layers,
  },
];

const pricingPlans = [
  {
    name: 'Creator Credits',
    price: '$98',
    period: 'one payment',
    badge: 'No subscription',
    description: 'Get $110 worth of AI credits today and spend them across the entire marketplace.',
    features: ['Use credits on any AI tool', 'Test image, video, and audio models', 'Buy more only when you need them'],
    cta: 'Claim credit deal',
    highlighted: false,
  },
  {
    name: 'Creator Plus',
    price: '$39',
    period: 'per month',
    badge: 'Best value',
    description: 'Get $49 in monthly credits, 10% off extra credits, faster generation, and the full template library.',
    features: ['20% monthly credit boost', '100,000+ creator templates', 'Faster and parallel generations'],
    cta: 'Start Creator Plus',
    highlighted: true,
  },
];

const templatePacks = [
  { title: '4,000+ LUTs', image: assets.lut, description: 'Cinematic color presets for fast before and after transformations.' },
  { title: '60,000+ SFX', image: assets.sfx, description: 'Professional sound effects organized for quick search and drag-and-drop edits.' },
  { title: '3,000+ Titles', image: assets.titles, description: 'Ready-made text animations for Reels, Shorts, ads, and YouTube edits.' },
  { title: '2,000+ Overlays', image: assets.overlays, description: 'Visual textures, effects, and scene polish for social-first videos.' },
];

const faqs = [
  {
    question: 'What is Prompt Edit?',
    answer: 'Prompt Edit is an AI marketplace where creators can access image, video, audio, and editing tools from one account using credits.',
  },
  {
    question: 'Do I need a subscription?',
    answer: 'No. Credits let you pay as you go. The monthly plan is optional for creators who want more credits, discounts, and the template library.',
  },
  {
    question: 'Does this replace editing software?',
    answer: 'No. Prompt Edit helps generate creative assets and includes plugins that support workflows inside Premiere Pro and DaVinci Resolve.',
  },
];
</script>

<template>
  <main class="min-h-screen bg-[#050505] text-white antialiased selection:bg-lime-300 selection:text-black">
    <section class="relative overflow-hidden">
      <div class="absolute inset-0">
        <img :src="assets.hero" alt="Prompt Edit marketplace interface preview" class="h-full w-full object-cover object-center opacity-30 blur-[1px]" />
        <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.58)_0%,rgba(5,5,5,0.82)_56%,#050505_100%)]"></div>
        <div class="absolute inset-x-0 top-0 h-28 bg-black/70"></div>
      </div>

      <header class="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" class="flex items-center gap-3" aria-label="Prompt Edit home">
          <img :src="assets.logo" alt="Prompt Edit" class="h-9 w-9 rounded-lg object-cover ring-1 ring-white/15" />
          <span class="text-sm font-semibold uppercase tracking-[0.22em] text-white">Prompt Edit</span>
        </a>

        <nav class="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 backdrop-blur md:flex">
          <a
            v-for="item in navItems"
            :key="item"
            :href="`#${item.toLowerCase()}`"
            class="rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            {{ item }}
          </a>
        </nav>

        <div class="hidden items-center gap-2 md:flex">
          <a href="#ai-studio" class="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:bg-white/12 hover:text-white">
            AI Studio
          </a>
          <a href="#pricing" class="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-200">
            Join marketplace
            <ArrowRight class="size-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          class="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white md:hidden"
          aria-label="Open navigation"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <X v-if="mobileMenuOpen" class="size-5" aria-hidden="true" />
          <Menu v-else class="size-5" aria-hidden="true" />
        </button>
      </header>

      <div v-if="mobileMenuOpen" class="relative z-20 mx-4 mb-4 rounded-lg border border-white/10 bg-zinc-950/95 p-3 shadow-2xl md:hidden">
        <a
          v-for="item in navItems"
          :key="item"
          :href="`#${item.toLowerCase()}`"
          class="block rounded-md px-3 py-3 text-sm text-zinc-200"
          @click="mobileMenuOpen = false"
        >
          {{ item }}
        </a>
        <a href="#pricing" class="mt-2 block rounded-md bg-lime-300 px-3 py-3 text-center text-sm font-semibold text-black">
          Join marketplace
        </a>
      </div>

      <div class="relative z-10 mx-auto grid min-h-[88svh] max-w-7xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-20 lg:pt-20">
        <div class="max-w-3xl">
          <div class="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-lime-300/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-lime-200">
            <Sparkles class="size-3.5" aria-hidden="true" />
            AI marketplace for creators
          </div>

          <h1 class="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
            The best AI tools without subscription stacking.
          </h1>

          <p class="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            Prompt Edit gives video creators one place to generate images, videos, audio, voiceovers, and editing assets with credits that work across the entire marketplace.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#pricing" class="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-200">
              Get AI credits
              <ArrowRight class="size-4" aria-hidden="true" />
            </a>
            <a href="#tools" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
              <Play class="size-4 fill-white" aria-hidden="true" />
              Explore tools
            </a>
            <a href="#ai-studio" class="inline-flex items-center justify-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/10 px-6 py-3 text-sm font-semibold text-lime-100 transition hover:bg-lime-300/15">
              AI Studio mockup
              <ArrowRight class="size-4" aria-hidden="true" />
            </a>
          </div>

          <dl class="mt-10 grid max-w-xl grid-cols-3 gap-3">
            <div class="border-l border-white/15 pl-4">
              <dt class="text-2xl font-semibold text-white">100K+</dt>
              <dd class="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">Templates</dd>
            </div>
            <div class="border-l border-white/15 pl-4">
              <dt class="text-2xl font-semibold text-white">10%</dt>
              <dd class="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">Credit savings</dd>
            </div>
            <div class="border-l border-white/15 pl-4">
              <dt class="text-2xl font-semibold text-white">0</dt>
              <dd class="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">Lock-in</dd>
            </div>
          </dl>
        </div>

        <div class="relative">
          <div class="overflow-hidden rounded-lg border border-white/10 bg-zinc-950/70 shadow-[0_34px_120px_rgba(0,0,0,0.65)] backdrop-blur">
            <div class="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div class="flex items-center gap-2">
                <span class="size-2.5 rounded-full bg-red-400"></span>
                <span class="size-2.5 rounded-full bg-amber-300"></span>
                <span class="size-2.5 rounded-full bg-lime-300"></span>
              </div>
              <div class="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-zinc-400">
                <Search class="size-3.5" aria-hidden="true" />
                Search AI tools
              </div>
            </div>

            <div class="grid gap-3 p-3 sm:grid-cols-2">
              <article class="relative overflow-hidden rounded-lg border border-white/10 bg-zinc-900">
                <img :src="assets.after" alt="AI generated creator visual" class="h-64 w-full object-cover" />
                <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4">
                  <p class="text-xs uppercase tracking-[0.16em] text-lime-200">Nano Banana Pro</p>
                  <h2 class="mt-1 text-xl font-semibold">Product shots in seconds</h2>
                </div>
              </article>

              <div class="grid gap-3">
                <article class="overflow-hidden rounded-lg border border-white/10 bg-zinc-900">
                  <img :src="assets.videoTools" alt="AI video model logos" class="h-32 w-full object-cover" />
                  <div class="flex items-center justify-between p-3">
                    <div>
                      <p class="text-xs text-zinc-500">Video</p>
                      <h2 class="text-sm font-semibold">Veo, Kling, Seedance</h2>
                    </div>
                    <ChevronRight class="size-4 text-zinc-500" aria-hidden="true" />
                  </div>
                </article>
                <article class="overflow-hidden rounded-lg border border-white/10 bg-zinc-900">
                  <img :src="assets.audioTools" alt="AI audio tools" class="h-32 w-full object-cover" />
                  <div class="flex items-center justify-between p-3">
                    <div>
                      <p class="text-xs text-zinc-500">Audio</p>
                      <h2 class="text-sm font-semibold">Voice, music, SFX</h2>
                    </div>
                    <ChevronRight class="size-4 text-zinc-500" aria-hidden="true" />
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-5 left-4 right-4 hidden rounded-lg border border-white/10 bg-black/85 p-4 shadow-2xl backdrop-blur sm:block">
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-xs uppercase tracking-[0.18em] text-zinc-500">Current project</p>
                <p class="mt-1 text-sm font-semibold text-white">Generate 12 ad variants for YouTube Shorts</p>
              </div>
              <span class="rounded-full bg-lime-300 px-3 py-1 text-xs font-bold text-black">42 credits</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-white/10 bg-[#0a0a0a] py-5">
      <div class="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 sm:px-6 lg:px-8">
        <span v-for="chip in modelChips" :key="chip" class="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-300">
          {{ chip }}
        </span>
      </div>
    </section>

    <section id="tools" class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-lime-300">Explore the marketplace</p>
          <h2 class="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            One creator workspace for image, video, audio, and editing tools.
          </h2>
        </div>
        <p class="max-w-md text-sm leading-6 text-zinc-400">
          The redesign turns the old long-form sales letter into a product-led marketplace experience that still closes with a clear offer.
        </p>
      </div>

      <div class="mt-10 grid gap-4 md:grid-cols-2">
        <article v-for="category in categories" :key="category.title" class="group overflow-hidden rounded-lg border border-white/10 bg-zinc-950 transition hover:border-white/25">
          <div class="relative h-64 overflow-hidden bg-zinc-900">
            <img :src="category.image" :alt="category.title" class="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105" />
            <div :class="['absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t', category.accent, 'opacity-30']"></div>
          </div>
          <div class="p-5">
            <div class="mb-4 flex items-center justify-between">
              <component :is="category.icon" class="size-5 text-lime-300" aria-hidden="true" />
              <span class="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">{{ category.kicker }}</span>
            </div>
            <h3 class="text-2xl font-semibold text-white">{{ category.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-zinc-400">{{ category.description }}</p>
          </div>
        </article>
      </div>
    </section>

    <section id="workflow" class="bg-white py-20 text-black">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">Why creators join</p>
            <h2 class="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">Built around the actual creator workflow.</h2>
            <p class="mt-5 text-base leading-7 text-zinc-600">
              Prompt Edit is not positioned as another single model. It is the central place to test models, generate assets, and keep moving through a campaign.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <article v-for="workflow in workflows" :key="workflow.title" class="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
              <component :is="workflow.icon" class="size-6 text-black" aria-hidden="true" />
              <h3 class="mt-5 text-xl font-semibold">{{ workflow.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-zinc-600">{{ workflow.body }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="ai-studio" class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-lime-300">AI product UI</p>
          <h2 class="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">
            A marketplace interface for Veo, Nano Banana, KlingAI, and creator tools.
          </h2>
          <p class="mt-5 text-base leading-7 text-zinc-400">
            This deployable Vercel version includes the sales page plus a product mockup section for model routing, prompt generation, credit estimates, and editor handoff.
          </p>
        </div>

        <div class="rounded-lg border border-white/10 bg-zinc-950 p-4">
          <div class="grid grid-cols-3 gap-2 rounded-lg bg-white/[0.04] p-1">
            <button type="button" class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black">Video</button>
            <button type="button" class="rounded-md px-3 py-2 text-sm font-semibold text-zinc-500">Image</button>
            <button type="button" class="rounded-md px-3 py-2 text-sm font-semibold text-zinc-500">Audio</button>
          </div>
          <div class="mt-4 rounded-lg border border-white/10 bg-black p-4">
            <p class="text-xs uppercase tracking-[0.16em] text-lime-300">Campaign generator</p>
            <h3 class="mt-2 text-2xl font-semibold">Generate launch assets across every AI model.</h3>
            <p class="mt-3 text-sm leading-6 text-zinc-400">
              Prompt input, model selection, credits, render queue, and timeline-ready outputs in one interface.
            </p>
          </div>
          <div class="mt-4 grid gap-3">
            <div class="rounded-lg bg-lime-300 p-4 text-black">
              <p class="font-semibold">Veo 3.1</p>
              <p class="mt-1 text-sm text-black/65">Cinematic motion and commercial output.</p>
            </div>
            <div class="rounded-lg border border-white/10 bg-black p-4">
              <p class="font-semibold">KlingAI</p>
              <p class="mt-1 text-sm text-zinc-500">Fast social video and motion tests.</p>
            </div>
            <div class="rounded-lg border border-white/10 bg-black p-4">
              <p class="font-semibold">Nano Banana Pro</p>
              <p class="mt-1 text-sm text-zinc-500">Product shots, thumbnails, and ad concepts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.22em] text-lime-300">Simple offer</p>
        <h2 class="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">Buy credits once or unlock the creator plan.</h2>
        <p class="mt-5 text-base leading-7 text-zinc-400">The pricing section keeps the original offer intact, but makes the choice faster to understand.</p>
      </div>

      <div class="mt-12 grid gap-5 lg:grid-cols-2">
        <article
          v-for="plan in pricingPlans"
          :key="plan.name"
          :class="[
            'rounded-lg border p-6',
            plan.highlighted ? 'border-lime-300 bg-lime-300 text-black shadow-[0_20px_80px_rgba(190,242,100,0.2)]' : 'border-white/10 bg-zinc-950 text-white',
          ]"
        >
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span :class="['rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]', plan.highlighted ? 'bg-black text-lime-200' : 'bg-white/10 text-lime-200']">
                {{ plan.badge }}
              </span>
              <h3 class="mt-6 text-3xl font-semibold">{{ plan.name }}</h3>
            </div>
            <div class="text-right">
              <p class="text-5xl font-semibold">{{ plan.price }}</p>
              <p :class="['mt-1 text-sm', plan.highlighted ? 'text-black/60' : 'text-zinc-500']">{{ plan.period }}</p>
            </div>
          </div>

          <p :class="['mt-5 text-sm leading-6', plan.highlighted ? 'text-black/70' : 'text-zinc-400']">{{ plan.description }}</p>

          <ul class="mt-6 space-y-3">
            <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-3 text-sm">
              <BadgeCheck class="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <span>{{ feature }}</span>
            </li>
          </ul>

          <a href="#" :class="['mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition', plan.highlighted ? 'bg-black text-white hover:bg-zinc-800' : 'bg-white text-black hover:bg-lime-200']">
            {{ plan.cta }}
            <ArrowRight class="size-4" aria-hidden="true" />
          </a>
        </article>
      </div>

      <div class="mt-6 overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
        <div class="grid gap-6 p-5 md:grid-cols-[0.75fr_1.25fr] md:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">Payment preview</p>
            <h3 class="mt-3 text-2xl font-semibold text-white">Credits work across every tool.</h3>
            <p class="mt-3 text-sm leading-6 text-zinc-400">Keep the "grocery store for AI" metaphor, but show it through a marketplace checkout and model catalog.</p>
          </div>
          <img :src="assets.payments" alt="Prompt Edit payment methods" class="w-full rounded-lg object-cover" />
        </div>
      </div>
    </section>

    <section id="templates" class="bg-[#f4f4f1] py-20 text-black">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">Creator Plus bonus</p>
            <h2 class="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">The subscription has a reason to exist beyond credits.</h2>
          </div>
          <p class="max-w-md text-sm leading-6 text-zinc-600">The template library becomes a concise bonus section instead of taking over the full sales page.</p>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="pack in templatePacks" :key="pack.title" class="overflow-hidden rounded-lg border border-zinc-200 bg-white">
            <img :src="pack.image" :alt="pack.title" class="h-44 w-full object-cover" />
            <div class="p-4">
              <h3 class="text-xl font-semibold">{{ pack.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-zinc-600">{{ pack.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="faq" class="border-y border-white/10 bg-[#0a0a0a] py-20">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-lime-300">FAQ</p>
          <h2 class="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">Answer the buying objections early.</h2>
          <div class="mt-8 flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <img :src="assets.guarantee" alt="Satisfaction guarantee" class="size-16 rounded-lg object-cover" />
            <div>
              <p class="font-semibold text-white">30-day satisfaction guarantee</p>
              <p class="mt-1 text-sm text-zinc-500">Clear risk reversal for unused credits.</p>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <details v-for="faq in faqs" :key="faq.question" class="group rounded-lg border border-white/10 bg-zinc-950 p-5">
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
              {{ faq.question }}
              <ChevronRight class="size-5 shrink-0 text-zinc-500 transition group-open:rotate-90" aria-hidden="true" />
            </summary>
            <p class="mt-4 text-sm leading-6 text-zinc-400">{{ faq.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <footer class="border-t border-white/10 px-4 py-8 text-center text-sm text-zinc-500 sm:px-6 lg:px-8">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p>Prompt Edit sales page redesign concept.</p>
        <div class="flex items-center gap-2">
          <ShieldCheck class="size-4" aria-hidden="true" />
          <span>Vercel deployable Vue, TypeScript, and Tailwind build.</span>
        </div>
      </div>
    </footer>
  </main>
</template>
