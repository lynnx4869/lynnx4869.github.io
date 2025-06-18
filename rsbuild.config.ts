import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSass } from '@rsbuild/plugin-sass'

const PUBLIC_HTML_PATH = process.env.PUBLIC_HTML_PATH

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  html: {
    title: 'LYninG',
    favicon: './public/assets/ico.webp',
  },
  output: {
    assetPrefix: 'auto',
    distPath: {
      root: 'blog',
      html: PUBLIC_HTML_PATH,
    },
  },
})
