import reactRefresh from '@vitejs/plugin-react-refresh'
const {resolve} = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.jsx'),
      name: 'infinite-scroll',
      fileName: (format) => `infinite-scroll.${format}.js`
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
})
