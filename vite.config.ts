import path from "path"
import tailwindcss from "@tailwindcss/vite"

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
//  import basicSsl from '@vitejs/plugin-basic-ssl'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(), 
    // basicSsl()
  ],
  // server: { https: true },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "../berryaudio/web/www",
    // outDir is outside the project root, so vite would normally warn and
    // leave stale files behind; prebuild removes the old assets and hashed
    // filenames keep caches correct without manual busting
    emptyOutDir: false,
  },
  // server: {
  //   host: "localhost",
  //   port: 5173,
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, "localhost-key.pem")),
  //     cert: fs.readFileSync(path.resolve(__dirname, "localhost.pem")),
  //   },
  // },
})