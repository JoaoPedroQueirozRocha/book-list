<template>
	<div class="genre-tag" :class="genre">
		{{ genre }}
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	genre: BookGenre;
}>();
</script>

<style lang="scss" scoped>
.genre-tag {
	padding: 5px 10px;
	border-radius: 5px;
	width: 100%;
	color: black;

	&.romance {
		background-color: #d6035b;
	}

	&.fantasy {
		background-color: #0e3acc;
	}

	& .thriller {
		background-color: #000000;
	}
}
</style>
