<template>
	<div class="description-left">
		<ul>
			<li>
				<span>{{ $t('card.pages') }}:</span> {{ book.pages }}
			</li>
			<li v-if="book.isSeries">
				<span>{{ $t('card.volumes') }}:</span> 1/{{ book.series?.totalVolumes }}
			</li>
			<li>
				<span>{{ $t('card.cover') }}:</span> {{ $t(`card.coverType.${book.cover}`) }}
			</li>
			<li class="boolean-status">
				<span>{{ $t('card.needToBuy') }}:</span>
				<Icon
					:icon-name="book.needToBuy ? 'close' : 'check'"
					:filled="book.needToBuy"
					:background-color="book.needToBuy ? '#ff4d4d' : '#2bed5f'"
				/>
			</li>
			<li class="boolean-status">
				<span>{{ $t('card.collectorEdition') }}:</span>
				<Icon
					:icon-name="book.collectorEdition ? 'check' : 'close'"
					:filled="book.collectorEdition"
					:background-color="book.collectorEdition ? '#2bed5f' : '#ff4d4d'"
				/>
			</li>
		</ul>
		<div class="book-card-data-genre">
			<GenreTag v-for="genre in book.genre" :genre="genre" :key="genre" />
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	book: Book;
}>();
</script>

<style scoped lang="scss">
.description-left {
	display: flex;
	flex-direction: column;
	width: 70%;

	ul {
		list-style: none;
		padding: 0;
		margin: 0;

		li {
			align-items: center;
			font-size: 18px;
			font-family: 'Macondo';

			span {
				font-weight: bold;
			}

			&.boolean-status {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 5px;
			}
		}
	}

	.data-status {
		display: flex;
		flex-direction: row;
		margin-right: 1rem;
		gap: 10px;
	}

	.book-card-data-genre {
		display: flex;
		flex-direction: row;
		gap: 10px;
		margin-top: 1rem;
	}
}
</style>
