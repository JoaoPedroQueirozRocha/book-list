<template>
	<div class="status-tag" :class="status">
		<span class="status-icon" v-html="statusIcon(status)" :class="status"></span>
		<p class="status-text">{{ status[0].toUpperCase() + status.slice(1) }}</p>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	status: string;
}>();

function statusIcon(status: string) {
	switch (status) {
		case 'reading':
			return '<span class="material-symbols-outlined">book_5</span>';
		case 'finished':
			return '<span class="material-symbols-outlined">book_2</span>';
		case 'to-read':
			return '<span class="material-symbols-outlined">bookmark</span>';
	}
}
</script>

<style lang="scss" scoped>
.status-tag {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
	text-align: center;

	.status-text {
		font-size: 18px;
		font-weight: 500;
	}
}
</style>
