import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Required: Add the preset to your config.
  presets: ['@shadow-panda/preset'],

  // Optional: Enable CSS reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
   
  // Use React
  jsxFramework: 'react',
  
  // Optional: Emit artifacts to `node_modules` as a package.
  // The copy-paste component examples use `@chen/styled-system` as the import path of the generated files.
  // If you choose not to use this option, you should rewrite your component imports as needed.
  // @see https://panda-css.com/docs/references/config#emitpackage
  emitPackage: true,

  // The output directory for your css system
  outdir: "@chen/styled-system",
  importMap: '@chen/styled-system',
});
