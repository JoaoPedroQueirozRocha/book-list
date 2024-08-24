<template>
	<div>
		<BookCard :book="book" />
	</div>
</template>

<script setup lang="ts">
const book: Book = {
	id: 1,
	title: 'Caraval',
	author: 'Stephanie Garber',
	description: 'Description 1',
	image: 'https://m.media-amazon.com/images/I/81+3j4jf2kL._AC_UF894,1000_QL80_.jpg',
	score: 5,
	review: 'Review 1',
	genre: [BookGenre.Fantasy],
	status: BookStatus.Reading,
	titleFont: '',
};
</script>
