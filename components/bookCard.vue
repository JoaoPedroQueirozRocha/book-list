<template>
	<div class="book-card-container">
		<div class="book-card-image">
			<img :src="book.image" alt="book image" />
		</div>
		<div class="book-card-data">
			<div class="book-card-data-title">
				<h1>{{ book.title }}</h1>
				<p>{{ book.author }}</p>
			</div>
			<hr />
			<div class="book-card-data-description">
				<div class="book-card-data-score">
					<p class="score-title">Score</p>
					<p class="score-value">{{ book.score }}/5</p>
					<div class="score-rating">
						<NuxtRating :rating-value="book.score" />
						<p>({{ book.score }})</p>
					</div>
				</div>
				<div class="book-card-data-genre" v-for="genre in book.genre" :key="genre">
					<GenreTag :genre="genre" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	book: Book;
}>();
</script>

<style lang="scss" scoped>
.book-card-container {
	background-color: white;
	border-radius: 10px;
	padding: 10px;
	width: 600px;
	height: 270px;
	display: flex;
	flex-direction: row;
	gap: 20px;
}

.book-card-image {
	width: 30%;
	height: 100%;
	align-items: center;
	display: flex;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.book-card-data {
	width: 70%;
	height: 100%;
	display: flex;
	flex-direction: column;

	.book-card-data-title {
		display: flex;
		flex-direction: column;

		h1 {
			margin: 0;
		}

		p {
			margin: 0;
		}
	}

	hr {
		border: 1px solid black;
		width: 100%;
	}

	.book-card-data-description {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;

		.book-card-data-score {
			display: flex;
			flex-direction: column;
			gap: 10px;
			width: fit-content;
			justify-content: center;

			.score-title {
				font-size: 20px;
				font-weight: bold;
				align-self: center;
			}

			.score-value {
				font-size: 30px;
				font-weight: bold;
				align-self: center;
				font-family: 'Dancing Script', cursive;
			}

			.score-rating {
				display: flex;
				flex-direction: row;
				align-items: center;
			}
		}
	}
}
</style>
