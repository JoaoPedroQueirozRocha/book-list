// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	imports: {
		dirs: ['types', 'types/enum', 'composables', 'components'],
	},
	css: ['~/assets/styles/main.scss'],
	modules: ['nuxt-rating'],
	alias: {
		'@': resolve(__dirname, './'),
	},
	vite: {
		resolve: {
			alias: {
				'@': resolve(__dirname, './'),
				'~': resolve(__dirname, './'),
			},
		},
	},
});
