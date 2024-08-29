<template>
	<div>
		<CardContainer :books="books" />
		<Modal v-if="selectedBook" v-model="showReview" type="review" :book="selectedBook" />
	</div>
</template>

<script setup lang="ts">
import { useStoreBooks } from '@/stores/storeBooks';

const showReview = ref(false);
const selectedBook = ref(null);

const storeBooks = useStoreBooks();

const books = computed(() => storeBooks.books);
</script>

<style lang="scss" scoped>
.review-modal {
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
}
</style>
