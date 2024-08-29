<template>
	<div class="card-container">
		<BookCard v-for="book in books" :key="book.id" :book="book" />
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	books: Book[];
}>();
</script>

<style scoped lang="scss">
.card-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr); // Alterado de 3 para 4
	gap: 20px;
	width: 80%; // Aumentado de 60% para 80% para acomodar mais colunas
	margin: 0 auto; // Centraliza o container
}

// Adicione media queries para responsividade
@media (max-width: 1200px) {
	.card-container {
		grid-template-columns: repeat(2, 1fr);
		width: 90%;
	}
}

@media (max-width: 900px) {
	.card-container {
		grid-template-columns: repeat(1, 1fr);
		width: 95%;
	}
}

@media (max-width: 600px) {
	.card-container {
		grid-template-columns: 1fr;
		width: 100%;
	}
}
</style>
