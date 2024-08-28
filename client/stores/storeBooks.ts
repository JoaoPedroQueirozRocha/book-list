import { defineStore } from 'pinia';

export const useStoreBooks = defineStore('books', {
	state: () => ({
		books: [] as Book[],
	}),
	actions: {
		async fetchBooks() {
			const { data } = await useFetch('/api/books');
			this.books = data.value as Book[];
		},
	},
});
