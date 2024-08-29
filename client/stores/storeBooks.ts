import { defineStore } from 'pinia';

export const useStoreBooks = defineStore('books', {
	state: () => ({
		books: [] as Book[],
	}),
	actions: {
		setBooks(books: Book[]) {
			this.books = books;
		},
	},
});
