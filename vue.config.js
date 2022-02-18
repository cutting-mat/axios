module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ?
    '/axios/' : '/',
  css: {
    extract: false
  }
}