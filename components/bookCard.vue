<template>
	<div class="book-card-container">
		<div class="book-card-image">
			<img :src="book.image" alt="book image" />
		</div>
		<div class="book-card-data">
			<div class="book-card-top-data">
				<div class="data-title">
					<h1>{{ book.title }}</h1>
					<p>{{ book.author }}</p>
				</div>
				<div class="data-status">
					<StatusTag :status="book.status" />
				</div>
			</div>
			<hr />
			<h2 class="information-label">{{ $t('card.information') }}</h2>
			<div class="book-card-data-description">
				<BookDescription :book="book" />
				<div class="description-right">
					<div class="book-card-data-score">
						<p class="score-title">{{ $t('card.score') }}</p>
						<p class="score-value">{{ book.score }}/5</p>
						<div class="score-rating">
							<NuxtRating :rating-value="book.score" />
							<p>({{ book.score }})</p>
						</div>
						<p class="review-label" @click="$emit('openReview')">{{ $t('card.review') }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	book: Book;
}>();

const openReviewModal = () => {
	console.log('open review modal');
};
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

	.book-card-top-data {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.data-title {
			display: flex;
			flex-direction: column;

			h1 {
				margin: 0;
			}

			p {
				margin: 0;
			}
		}

		.data-status {
			display: flex;
			margin-right: 1rem;
		}
	}

	hr {
		border: 1px solid black;
		width: 100%;
	}

	.information-label {
		margin: 0px;
		text-decoration: underline;
		font-family: 'Macondo';
	}

	.book-card-data-description {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.description-right {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 30%;
			height: 100%;

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

			.review-label {
				cursor: pointer;
				text-decoration: underline;
				color: blue;
				font-weight: bold;
				font-size: 14px;
				font-family: 'Macondo';
			}
		}
	}
}
</style>
