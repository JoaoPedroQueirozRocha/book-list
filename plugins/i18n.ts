import { defineNuxtPlugin } from 'nuxt/app';
import { createI18n } from 'vue-i18n';

import ptBR from '../assets/language/pt-br.json';
import enUS from '../assets/language/en.json';

export default defineNuxtPlugin(({ vueApp }) => {
	const i18n = createI18n({
		legacy: false,
		globalInjection: true,
		locale: 'pt-BR',
		messages: {
			'pt-BR': ptBR,
			'en-US': enUS,
		},
	});

	vueApp.use(i18n);
});
