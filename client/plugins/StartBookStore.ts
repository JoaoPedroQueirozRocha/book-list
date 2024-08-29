import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(async (nuxtApp) => {
	const bookStore = useStoreBooks();

	// Função para buscar livros da API
	const fetchBooks = async () => {
		try {
			const data = await useFetchOperations().fetchBooks();
			bookStore.setBooks(data as Book[]);
		} catch (error) {
			console.error('Erro ao buscar livros:', error);
		}
	};

	// Busca os livros quando o aplicativo é inicializado
	await fetchBooks();

	// Disponibiliza a função fetchBooks globalmente
	return {
		provide: {
			fetchBooks,
		},
	};
});
