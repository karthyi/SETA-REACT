import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Exportando uma única configuração
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'],
});
