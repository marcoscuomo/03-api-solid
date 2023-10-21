import { defineConfig } from 'vitest/config'
import tsConfigPath from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsConfigPath()]
})