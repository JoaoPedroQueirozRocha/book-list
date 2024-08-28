<template>
	<div class="review-modal">
		<div class="book-data">
			<h2>{{ book?.title }}</h2>
			<h3>{{ book?.author }}</h3>
		</div>
		<div class="review-content">
			<p>{{ book?.review?.review }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	book?: Book;
}>();
</script>

<style lang="scss" scoped>
.review-modal {
	display: flex;
	flex-direction: column;
	width: 60%;
	height: 70%;
	gap: 1rem;
}
</style>
