const withPreact = require('next-plugin-preact')
const withMDX = require('@next/mdx')

module.exports = () => {
  const plugins = [
    withPreact,
    withMDX({
      extension: /\.mdx?$/,
    }),
  ]
  return plugins.reduce((acc, next) => next(acc), {
    images: {
      domains: ['www.github.com'],
    },
    pageExtensions: ['js', 'jsx', 'mdx'],
  })
}
