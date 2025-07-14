import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/AI/', // փոխարինիր քո repository-ի անունով
  plugins: [react(), tailwindcss()],
});
