<template>
	<div class="genre-tag" :class="genre">
		{{ genre }}
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	genre: string;
}>();
</script>

<style lang="scss" scoped>
.genre-tag {
	padding: 5px 10px;
	border-radius: 16px;
	width: 100%;
	color: white;
	width: fit-content;

	&.Romance {
		background-color: #d6035b;
	}

	&.Fantasy {
		background-color: #0e3acc;
	}

	&.Thriller {
		background-color: #000000;
	}
}
</style>
