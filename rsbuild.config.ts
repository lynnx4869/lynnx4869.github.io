import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSass } from '@rsbuild/plugin-sass'

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
      html: '../',
    },
  },
  tools: {
    rspack(_, { addRules }) {
      addRules([
        {
          test: /\.md$/,
          type: 'asset/source',
        },
      ])
    },
  },
})
