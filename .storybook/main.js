module.exports = {
  stories: [
    './meta/*.stories.mdx',
    '../src/stories/*.stories.mdx',
    '../src/stories/*.stories.js'
  ],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-docs'
  ]
}
