<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import {
    ArrowLeft,
    ArrowRight,
    BadgeCheck,
    CircleDollarSign,
    Clock3,
    Download,
    Film,
    Image,
    Layers3,
    Menu,
    Mic2,
    PanelRight,
    Play,
    RefreshCw,
    Search,
    SlidersHorizontal,
    Sparkles,
    Wand2,
    X,
} from '@lucide/vue';
import { ref } from 'vue';

const sidebarOpen = ref(false);

const assets = {
    logo: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/8228/images/4e61418-f758-6236-4be3-4eb4f0221be_Prompt_Edit_Logo_Black_Background_.png',
    hero: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/8228/images/c6cb82f-c0-1f2-b48-2eec5ff2d80d_After_promptedit_copy.png',
    imageTools: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/8228/images/233e63c-6d6f-0ca4-808b-806fa65dfad_photo_logos_arc_up.png',
    videoTools: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/8228/images/63d33-ef2a-bc4a-56ab-b70fca84f6eb_Video_tools.png',
    audioTools: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/8228/images/4d4fb-2ee3-06c6-a4a1-d8713a31744_audio_tools.png',
    pluginTools: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/8228/images/b3ee60-8322-eb08-ad-dcfada228c_ai_editing_plugins.png',
};

const navItems = [
    { label: 'Generate', icon: Sparkles, active: true },
    { label: 'Assets', icon: Layers3, active: false },
    { label: 'History', icon: Clock3, active: false },
    { label: 'Exports', icon: Download, active: false },
];

const modes = [
    { label: 'Image', icon: Image, active: false },
    { label: 'Video', icon: Film, active: true },
    { label: 'Audio', icon: Mic2, active: false },
];

const models = [
    {
        name: 'Veo 3.1',
        type: 'Video',
        cost: '18 credits',
        speed: 'Balanced',
        description: 'Cinematic motion, accurate camera direction, strong commercial output.',
        active: true,
    },
    {
        name: 'KlingAI',
        type: 'Video',
        cost: '12 credits',
        speed: 'Fast',
        description: 'Great for social video, product movement, and action-based prompts.',
        active: false,
    },
    {
        name: 'Nano Banana Pro',
        type: 'Image',
        cost: '4 credits',
        speed: 'Fast',
        description: 'High-quality visuals, product shots, thumbnails, and ad concepts.',
        active: false,
    },
    {
        name: 'ElevenLabs',
        type: 'Audio',
        cost: '3 credits',
        speed: 'Instant',
        description: 'Voiceover, voice clone, and narration generation for creator videos.',
        active: false,
    },
];

const presets = [
    'UGC hook',
    'Product ad',
    'YouTube intro',
    'Talking avatar',
    'Cinematic b-roll',
    'AI clone',
];

const generations = [
    {
        title: 'Creator unboxing shot',
        model: 'Veo 3.1',
        status: 'Ready',
        image: assets.hero,
        ratio: '9:16',
    },
    {
        title: 'Product comparison loop',
        model: 'KlingAI',
        status: 'Rendering',
        image: assets.videoTools,
        ratio: '16:9',
    },
    {
        title: 'Thumbnail concept batch',
        model: 'Nano Banana Pro',
        status: 'Ready',
        image: assets.imageTools,
        ratio: '1:1',
    },
];

const queue = [
    { name: 'Storyboard pass', progress: 82 },
    { name: 'Audio voiceover', progress: 45 },
    { name: 'Caption safe-area check', progress: 24 },
];
</script>

<template>
    <Head title="Prompt Edit AI Studio" />

    <main class="min-h-screen bg-[#070707] text-white antialiased selection:bg-lime-300 selection:text-black">
        <div class="flex min-h-screen">
            <aside class="hidden w-72 shrink-0 border-r border-white/10 bg-black/80 p-4 lg:block">
                <a href="/" class="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
                    <img :src="assets.logo" alt="Prompt Edit" class="size-9 rounded-lg object-cover" />
                    <div>
                        <p class="text-sm font-semibold uppercase tracking-[0.18em]">Prompt Edit</p>
                        <p class="mt-1 text-xs text-zinc-500">AI creator workspace</p>
                    </div>
                </a>

                <nav class="mt-6 space-y-2">
                    <button
                        v-for="item in navItems"
                        :key="item.label"
                        type="button"
                        :class="[
                            'flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition',
                            item.active ? 'bg-lime-300 text-black' : 'text-zinc-400 hover:bg-white/10 hover:text-white',
                        ]"
                    >
                        <component :is="item.icon" class="size-4" aria-hidden="true" />
                        {{ item.label }}
                    </button>
                </nav>

                <div class="mt-6 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <div class="flex items-center gap-2 text-sm font-semibold text-white">
                        <CircleDollarSign class="size-4 text-lime-300" aria-hidden="true" />
                        Credit wallet
                    </div>
                    <p class="mt-4 text-4xl font-semibold">184</p>
                    <p class="mt-1 text-sm text-zinc-500">credits available</p>
                    <div class="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                        <div class="h-full w-2/3 rounded-full bg-lime-300"></div>
                    </div>
                </div>
            </aside>

            <section class="min-w-0 flex-1">
                <header class="sticky top-0 z-20 border-b border-white/10 bg-black/85 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-3">
                            <button
                                type="button"
                                class="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] lg:hidden"
                                aria-label="Open studio navigation"
                                @click="sidebarOpen = true"
                            >
                                <Menu class="size-5" aria-hidden="true" />
                            </button>
                            <a href="/" class="hidden items-center gap-2 text-sm text-zinc-400 transition hover:text-white sm:flex">
                                <ArrowLeft class="size-4" aria-hidden="true" />
                                Sales page
                            </a>
                            <div class="hidden h-5 w-px bg-white/10 sm:block"></div>
                            <h1 class="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">AI Studio Mockup</h1>
                        </div>

                        <div class="flex items-center gap-2">
                            <div class="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-400 md:flex">
                                <Search class="size-4" aria-hidden="true" />
                                Search models, presets, assets
                            </div>
                            <button type="button" class="inline-flex items-center gap-2 rounded-full bg-lime-300 px-4 py-2 text-sm font-bold text-black transition hover:bg-lime-200">
                                Generate
                                <Sparkles class="size-4" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </header>

                <div
                    v-if="sidebarOpen"
                    class="fixed inset-0 z-30 bg-black/70 lg:hidden"
                    @click.self="sidebarOpen = false"
                >
                    <aside class="h-full w-80 max-w-[86vw] border-r border-white/10 bg-black p-4">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <img :src="assets.logo" alt="Prompt Edit" class="size-9 rounded-lg object-cover" />
                                <p class="text-sm font-semibold uppercase tracking-[0.18em]">Prompt Edit</p>
                            </div>
                            <button type="button" class="size-9 rounded-lg border border-white/10" aria-label="Close navigation" @click="sidebarOpen = false">
                                <X class="mx-auto size-5" aria-hidden="true" />
                            </button>
                        </div>
                        <nav class="mt-6 space-y-2">
                            <button
                                v-for="item in navItems"
                                :key="item.label"
                                type="button"
                                :class="[
                                    'flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium',
                                    item.active ? 'bg-lime-300 text-black' : 'text-zinc-400',
                                ]"
                            >
                                <component :is="item.icon" class="size-4" aria-hidden="true" />
                                {{ item.label }}
                            </button>
                        </nav>
                    </aside>
                </div>

                <div class="grid gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
                    <section class="min-w-0 space-y-6">
                        <div class="overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
                            <div class="grid gap-6 p-4 md:grid-cols-[1fr_0.85fr] md:p-6">
                                <div>
                                    <div class="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-lime-300/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-lime-200">
                                        <Wand2 class="size-3.5" aria-hidden="true" />
                                        Campaign generator
                                    </div>
                                    <h2 class="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                                        Generate launch assets across every AI model.
                                    </h2>
                                    <p class="mt-4 max-w-xl text-sm leading-6 text-zinc-400">
                                        A product UI concept for creators choosing Veo, Nano Banana, KlingAI, voice tools, and editor-ready templates from one credit wallet.
                                    </p>
                                </div>

                                <div class="rounded-lg border border-white/10 bg-black p-3">
                                    <img :src="assets.hero" alt="Generated AI ad concept" class="aspect-video w-full rounded-lg object-cover" />
                                    <div class="mt-3 flex items-center justify-between">
                                        <div>
                                            <p class="text-xs uppercase tracking-[0.16em] text-zinc-500">Preview</p>
                                            <p class="mt-1 text-sm font-semibold">Short-form ad concept</p>
                                        </div>
                                        <button type="button" class="inline-flex size-10 items-center justify-center rounded-full bg-white text-black" aria-label="Play preview">
                                            <Play class="size-4 fill-black" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
                            <section class="rounded-lg border border-white/10 bg-zinc-950 p-4 md:p-5">
                                <div class="flex items-center justify-between">
                                    <h2 class="text-lg font-semibold">Create</h2>
                                    <button type="button" class="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">
                                        <SlidersHorizontal class="size-3.5" aria-hidden="true" />
                                        Advanced
                                    </button>
                                </div>

                                <div class="mt-5 grid grid-cols-3 gap-2 rounded-lg bg-white/[0.04] p-1">
                                    <button
                                        v-for="mode in modes"
                                        :key="mode.label"
                                        type="button"
                                        :class="[
                                            'flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold',
                                            mode.active ? 'bg-white text-black' : 'text-zinc-400',
                                        ]"
                                    >
                                        <component :is="mode.icon" class="size-4" aria-hidden="true" />
                                        <span class="hidden sm:inline">{{ mode.label }}</span>
                                    </button>
                                </div>

                                <label class="mt-5 block text-sm font-medium text-zinc-300" for="prompt">Prompt</label>
                                <textarea
                                    id="prompt"
                                    rows="7"
                                    class="mt-2 w-full resize-none rounded-lg border-white/10 bg-black text-sm text-white placeholder:text-zinc-600 focus:border-lime-300 focus:ring-lime-300"
                                    placeholder="A cinematic UGC video where a creator demonstrates an AI editing workflow on a laptop, energetic lighting, handheld camera, social-first framing..."
                                ></textarea>

                                <div class="mt-4 flex flex-wrap gap-2">
                                    <button
                                        v-for="preset in presets"
                                        :key="preset"
                                        type="button"
                                        class="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-lime-300/40 hover:text-lime-200"
                                    >
                                        {{ preset }}
                                    </button>
                                </div>

                                <div class="mt-5 grid grid-cols-2 gap-3">
                                    <div class="rounded-lg border border-white/10 bg-black p-3">
                                        <p class="text-xs uppercase tracking-[0.16em] text-zinc-500">Aspect</p>
                                        <p class="mt-2 text-sm font-semibold">9:16 vertical</p>
                                    </div>
                                    <div class="rounded-lg border border-white/10 bg-black p-3">
                                        <p class="text-xs uppercase tracking-[0.16em] text-zinc-500">Estimate</p>
                                        <p class="mt-2 text-sm font-semibold">18 credits</p>
                                    </div>
                                </div>

                                <button type="button" class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-200">
                                    Generate 4 variations
                                    <ArrowRight class="size-4" aria-hidden="true" />
                                </button>
                            </section>

                            <section class="rounded-lg border border-white/10 bg-zinc-950 p-4 md:p-5">
                                <div class="flex items-center justify-between gap-4">
                                    <div>
                                        <h2 class="text-lg font-semibold">Model router</h2>
                                        <p class="mt-1 text-sm text-zinc-500">Choose the best model for each creator job.</p>
                                    </div>
                                    <button type="button" class="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-zinc-400" aria-label="Refresh models">
                                        <RefreshCw class="size-4" aria-hidden="true" />
                                    </button>
                                </div>

                                <div class="mt-5 grid gap-3">
                                    <article
                                        v-for="model in models"
                                        :key="model.name"
                                        :class="[
                                            'rounded-lg border p-4',
                                            model.active ? 'border-lime-300 bg-lime-300 text-black' : 'border-white/10 bg-black text-white',
                                        ]"
                                    >
                                        <div class="flex items-start justify-between gap-4">
                                            <div>
                                                <div class="flex items-center gap-2">
                                                    <h3 class="text-lg font-semibold">{{ model.name }}</h3>
                                                    <BadgeCheck v-if="model.active" class="size-4" aria-hidden="true" />
                                                </div>
                                                <p :class="['mt-2 text-sm leading-6', model.active ? 'text-black/70' : 'text-zinc-400']">
                                                    {{ model.description }}
                                                </p>
                                            </div>
                                            <span :class="['shrink-0 rounded-full px-3 py-1 text-xs font-semibold', model.active ? 'bg-black text-lime-200' : 'bg-white/10 text-zinc-300']">
                                                {{ model.type }}
                                            </span>
                                        </div>
                                        <div class="mt-4 flex items-center gap-3 text-sm">
                                            <span>{{ model.cost }}</span>
                                            <span :class="model.active ? 'text-black/35' : 'text-zinc-700'">/</span>
                                            <span>{{ model.speed }}</span>
                                        </div>
                                    </article>
                                </div>
                            </section>
                        </div>

                        <section class="rounded-lg border border-white/10 bg-zinc-950 p-4 md:p-5">
                            <div class="flex items-center justify-between gap-4">
                                <div>
                                    <h2 class="text-lg font-semibold">Generated assets</h2>
                                    <p class="mt-1 text-sm text-zinc-500">Output gallery designed for fast review, export, and timeline insertion.</p>
                                </div>
                                <PanelRight class="size-5 text-zinc-500" aria-hidden="true" />
                            </div>

                            <div class="mt-5 grid gap-4 md:grid-cols-3">
                                <article
                                    v-for="generation in generations"
                                    :key="generation.title"
                                    class="overflow-hidden rounded-lg border border-white/10 bg-black"
                                >
                                    <div class="relative">
                                        <img :src="generation.image" :alt="generation.title" class="aspect-[4/5] w-full object-cover" />
                                        <span class="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white">
                                            {{ generation.status }}
                                        </span>
                                    </div>
                                    <div class="p-4">
                                        <p class="text-sm font-semibold">{{ generation.title }}</p>
                                        <div class="mt-3 flex items-center justify-between text-xs text-zinc-500">
                                            <span>{{ generation.model }}</span>
                                            <span>{{ generation.ratio }}</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </section>
                    </section>

                    <aside class="space-y-6">
                        <section class="rounded-lg border border-white/10 bg-zinc-950 p-5">
                            <h2 class="text-lg font-semibold">Queue</h2>
                            <div class="mt-5 space-y-4">
                                <div v-for="task in queue" :key="task.name">
                                    <div class="flex items-center justify-between text-sm">
                                        <span class="font-medium text-zinc-300">{{ task.name }}</span>
                                        <span class="text-zinc-500">{{ task.progress }}%</span>
                                    </div>
                                    <div class="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                                        <div class="h-full rounded-full bg-lime-300" :style="{ width: `${task.progress}%` }"></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="rounded-lg border border-white/10 bg-zinc-950 p-5">
                            <h2 class="text-lg font-semibold">Editor handoff</h2>
                            <p class="mt-2 text-sm leading-6 text-zinc-500">
                                Export generated clips, thumbnails, voiceovers, and templates into Premiere Pro or DaVinci Resolve.
                            </p>
                            <div class="mt-5 grid gap-3">
                                <div class="rounded-lg border border-white/10 bg-black p-3">
                                    <p class="text-sm font-semibold">Premiere Pro Extension</p>
                                    <p class="mt-1 text-xs text-zinc-500">React + Tailwind panel prototype</p>
                                </div>
                                <div class="rounded-lg border border-white/10 bg-black p-3">
                                    <p class="text-sm font-semibold">DaVinci Resolve Extension</p>
                                    <p class="mt-1 text-xs text-zinc-500">Timeline-safe asset insertion flow</p>
                                </div>
                            </div>
                        </section>

                        <section class="overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
                            <img :src="assets.pluginTools" alt="Prompt Edit editing plugins" class="h-48 w-full object-cover" />
                            <div class="p-5">
                                <p class="text-xs uppercase tracking-[0.16em] text-zinc-500">Extension UI</p>
                                <h2 class="mt-2 text-lg font-semibold">Generate without leaving the edit.</h2>
                            </div>
                        </section>
                    </aside>
                </div>
            </section>
        </div>
    </main>
</template>
