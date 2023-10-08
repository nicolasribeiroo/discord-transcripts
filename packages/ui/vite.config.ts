import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [react(), dts()],
	build: {
		lib: {
			entry: ['src/lib/index.ts', 'src/lib/components/Button.tsx'],
			formats: ['es'],
			name: 'ui',
		},

		rollupOptions: {
			external: ['react', 'react-dom'],
		},
	},
});
