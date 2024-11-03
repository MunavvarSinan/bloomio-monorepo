import { createConfig } from '@repo/tailwind-config'
export default createConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
});