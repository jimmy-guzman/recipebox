module.exports = {
  stories: [
    '../libs/*/src/**/*.stories.@(tsx)',
    '../apps/*/src/**/*.stories.@(tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
}
