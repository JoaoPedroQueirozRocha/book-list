<template>
	<span class="material-symbols-outlined" :class="{ filled: filled }" :style="{ color: backgroundColor }">
		{{ iconName }}
	</span>
</template>

<script lang="ts" setup>
defineProps<{
	iconName: string;
	filled?: boolean;
	backgroundColor?: string;
}>();
</script>

<style scoped>
.material-symbols-outlined {
	font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
	font-size: 18px;
}

.material-symbols-outlined.filled {
	font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
	font-size: 18px;
}
</style>
