import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'ghost'] },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Get in touch' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'View work →' },
}

export const Disabled: Story = {
  args: { variant: 'primary', children: 'Unavailable', disabled: true },
}
