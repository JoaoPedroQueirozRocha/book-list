<template>
	<div>
		{{ showReview }}
		<BookCard :book="book" @openReview="showReview = true" />
		<Modal v-model="showReview" type="review" :book="book" />
	</div>
</template>

<script setup lang="ts">
const showReview = ref(false);

const book: Book = {
	id: 1,
	title: 'Caraval',
	author: 'Stephanie Garber',
	description:
		'Legend, o Mestre de Caraval, sequestra Tella, e Scarlett vê-se obrigada a entrar num perigoso jogo de amor, sonhos, meias-verdades e magia, em que nada é o que parece. Realidade ou não, ela dispõe apenas de cinco noites para decifrar todas as pistas que conduzem até à irmã, ou Tella desaparecerá para sempre.',
	image: 'https://m.media-amazon.com/images/I/81+3j4jf2kL._AC_UF894,1000_QL80_.jpg',
	score: 5,
	review: {
		review: 'Review 1',
		readingExperience: 5,
		readingTime: 5,
	},
	genre: ['Fantasy', 'Romance'],
	status: BookStatus.Finished,
	titleFont: '',
	pages: 352,
	needToBuy: false,
	isSeries: true,
	series: {
		totalVolumes: 3,
		volumes: [],
	},
	cover: 'common',
	collectorEdition: false,
};
</script>

<style lang="scss" scoped>
.review-modal {
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
}
</style>
