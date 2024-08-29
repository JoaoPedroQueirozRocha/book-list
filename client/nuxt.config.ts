// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	plugins: ['~/plugins/StartBookStore.ts'],
	app: {
		head: {
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
				},
			],
		},
	},
	imports: {
		dirs: ['types', 'types/enum', 'composables', 'components', 'stores'],
	},
	css: ['~/assets/styles/main.scss'],
	modules: ['nuxt-rating', '@pinia/nuxt'],
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
