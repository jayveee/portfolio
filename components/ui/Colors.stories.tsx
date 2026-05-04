import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'UI/Colors',
  parameters: {
    controls: { disable: true },
  },
}

export default meta

const palette = [
  {
    group: 'Base',
    colors: [
      { name: 'Black', usage: 'Primary text, borders, headings', bg: 'bg-black', text: 'text-white', hex: '#000000' },
      { name: 'White', usage: 'Page background, nav background', bg: 'bg-white border border-neutral-200', text: 'text-black', hex: '#FFFFFF' },
    ],
  },
  {
    group: 'Text',
    colors: [
      { name: 'neutral-900', usage: 'Body default (antialiased)', bg: 'bg-neutral-900', text: 'text-white', hex: '#171717' },
      { name: 'neutral-700', usage: 'Case study overview body', bg: 'bg-neutral-700', text: 'text-white', hex: '#404040' },
      { name: 'neutral-600', usage: 'Section body copy, descriptions', bg: 'bg-neutral-600', text: 'text-white', hex: '#525252' },
      { name: 'neutral-500', usage: 'Tag text, secondary copy', bg: 'bg-neutral-500', text: 'text-white', hex: '#737373' },
      { name: 'neutral-400', usage: 'Mono labels, captions, footer', bg: 'bg-neutral-400', text: 'text-white', hex: '#A3A3A3' },
      { name: 'neutral-300', usage: 'Project number, mono path', bg: 'bg-neutral-300', text: 'text-black', hex: '#D4D4D4' },
    ],
  },
  {
    group: 'Borders',
    colors: [
      { name: 'black', usage: 'Work section top rule', bg: 'bg-black', text: 'text-white', hex: '#000000' },
      { name: 'neutral-200', usage: 'Tag pill border', bg: 'bg-neutral-200', text: 'text-black', hex: '#E5E5E5' },
      { name: 'neutral-100', usage: 'Section dividers, nav border, footer', bg: 'bg-neutral-100', text: 'text-black', hex: '#F5F5F5' },
    ],
  },
  {
    group: 'Project Thumbnails',
    colors: [
      { name: 'stone-200', usage: 'Una thumbnail', bg: 'bg-stone-200', text: 'text-black', hex: '#E7E5E4' },
      { name: 'neutral-800', usage: "Chef's Choice thumbnail (dark)", bg: 'bg-neutral-800', text: 'text-white', hex: '#262626' },
      { name: 'amber-50', usage: 'BeeKind thumbnail', bg: 'bg-amber-50', text: 'text-black', hex: '#FFFBEB' },
      { name: 'slate-200', usage: 'Presafe thumbnail', bg: 'bg-slate-200', text: 'text-black', hex: '#E2E8F0' },
      { name: 'zinc-900', usage: 'BHS thumbnail (dark)', bg: 'bg-zinc-900', text: 'text-white', hex: '#18181B' },
    ],
  },
]

export const AllColors: StoryObj = {
  name: 'All Colors',
  render: () => (
    <div className="bg-white p-12 space-y-12 max-w-4xl">
      {palette.map((group) => (
        <div key={group.group}>
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-6">{group.group}</p>
          <div className="grid grid-cols-2 gap-3">
            {group.colors.map((c) => (
              <div key={c.name} className="flex items-stretch rounded overflow-hidden border border-neutral-100">
                <div className={`${c.bg} w-16 shrink-0`} />
                <div className="p-3 space-y-0.5">
                  <p className="text-xs font-mono font-medium text-black">{c.name}</p>
                  <p className="text-[11px] text-neutral-400">{c.usage}</p>
                  <p className="text-[10px] font-mono text-neutral-300">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}
