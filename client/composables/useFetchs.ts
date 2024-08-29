import { useStoreBooks } from '../stores/storeBooks';

export const useFetchOperations = () => {
	const fetchBooks = async () => {
		try {
			const response = await $fetch('http://localhost:3001/books/', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			return response;
		} catch (error) {
			console.error('Erro ao buscar livros:', error);
			throw error;
		}
	};

	return {
		fetchBooks,
	};
};
