module.exports = {
  stories: [
    './meta/*.stories.mdx',
    '../src/**/*.stories.mdx'
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
