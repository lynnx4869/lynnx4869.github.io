/// <reference types="@rsbuild/core/types" />

declare module '*.md' {
  const content: string
  export default content
}

interface ImportMetaEnv {
  readonly PUBLIC_IMAGE_PATH: string
  readonly PUBLIC_HTML_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
