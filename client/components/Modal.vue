<template>
	<Teleport to="body">
		<div v-if="modelValue" class="modal-overlay" @click="closeModal">
			<div class="modal-content" @click.stop>
				{{ book?.author }}
				<ModalTypesReviewModal v-if="type === 'review'" :book="book" />
			</div>
		</div>
	</Teleport>
</template>

<script lang="ts" setup>
defineProps<{
	modelValue: boolean;
	book?: Book;
	type: 'review' | 'addReview' | 'addBook' | 'editBook';
}>();

const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void;
}>();

const closeModal = () => {
	emit('update:modelValue', false);
};
</script>

<style lang="scss" scoped>
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
}

.modal-content {
	background-color: white;
	border-radius: 8px;
	width: 80%;
	height: 80%;
	max-width: 600px;
	max-height: 80vh;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	border-bottom: 1px solid #e0e0e0;

	h2 {
		margin: 0;
		font-size: 1.5rem;
	}
}

.modal-body {
	padding: 1rem;
	flex-grow: 1;
}

.modal-footer {
	padding: 1rem;
	border-top: 1px solid #e0e0e0;
	display: flex;
	justify-content: flex-end;
}

.close-button {
	background: none;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
	padding: 0;
	color: #666;

	&:hover {
		color: #000;
	}
}
</style>
