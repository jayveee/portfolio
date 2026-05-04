import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    '../app/**/*.stories.@(ts|tsx)',
    '../components/**/*.stories.@(ts|tsx)',
  ],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
}

export default config
