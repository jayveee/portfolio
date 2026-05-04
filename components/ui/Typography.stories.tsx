import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'UI/Typography',
  parameters: {
    controls: { disable: true },
  },
}

export default meta

const styles: { name: string; usage: string; className: string; sample: string }[] = [
  {
    name: 'Hero',
    usage: 'Homepage headline',
    className: 'text-7xl font-bold leading-[1.05] tracking-tight',
    sample: 'Product designer crafting thoughtful digital experiences.',
  },
  {
    name: 'Case Study Title',
    usage: 'Case study page h1',
    className: 'text-6xl font-bold tracking-tight leading-[1.02]',
    sample: 'Una',
  },
  {
    name: 'Section Heading',
    usage: 'About page headline',
    className: 'text-5xl font-bold leading-[1.05] tracking-tight',
    sample: 'Designer who cares about the details.',
  },
  {
    name: 'Project Title',
    usage: 'Work card h2',
    className: 'text-lg font-bold tracking-tight uppercase',
    sample: 'Chef\'s Choice',
  },
  {
    name: 'Overview Body',
    usage: 'Case study overview text',
    className: 'text-xl leading-relaxed text-neutral-700',
    sample: 'Una is a cycle-synced wellbeing platform built for women who want to understand how their body works.',
  },
  {
    name: 'Body',
    usage: 'Case study section body, about page copy',
    className: 'text-lg leading-relaxed text-neutral-600',
    sample: 'I\'m most useful when I\'m embedded early — in discovery, not just delivery.',
  },
  {
    name: 'Description',
    usage: 'Project card description',
    className: 'text-sm text-neutral-600 leading-relaxed',
    sample: 'Food ordering MVP built with React, Node, and Stripe. Designed end-to-end from research to launch.',
  },
  {
    name: 'Label Mono',
    usage: 'Section labels, meta info (font-mono)',
    className: 'text-[10px] font-mono uppercase tracking-widest text-neutral-400',
    sample: 'Selected work',
  },
  {
    name: 'Nav',
    usage: 'Header navigation links',
    className: 'text-sm font-semibold tracking-tight',
    sample: 'Joanna Veloria',
  },
  {
    name: 'Tag',
    usage: 'Project tag pills',
    className: 'text-xs text-neutral-500',
    sample: 'Product Design · Design Systems · Agile',
  },
  {
    name: 'Caption',
    usage: 'Footer, timestamps, small metadata',
    className: 'text-xs text-neutral-400',
    sample: '© 2025 Joanna Veloria',
  },
]

export const AllStyles: StoryObj = {
  name: 'All Text Styles',
  render: () => (
    <div className="bg-white p-12 space-y-14 max-w-4xl">
      {styles.map((s) => (
        <div key={s.name} className="grid grid-cols-[180px_1fr] gap-8 items-start border-b border-neutral-100 pb-12">
          <div className="pt-1 space-y-1">
            <p className="text-xs font-mono font-medium text-black uppercase tracking-widest">{s.name}</p>
            <p className="text-[11px] text-neutral-400 leading-snug">{s.usage}</p>
            <p className="text-[10px] font-mono text-neutral-300 leading-snug break-all">{s.className}</p>
          </div>
          <p className={s.className}>{s.sample}</p>
        </div>
      ))}
    </div>
  ),
}
