const withPreact = require('next-plugin-preact')
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
})

module.exports = withPreact({})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
})
