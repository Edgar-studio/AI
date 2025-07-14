import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/repo-name/', // փոխարինիր քո repository-ի անունով
  plugins: [react(), tailwindcss()],
});
