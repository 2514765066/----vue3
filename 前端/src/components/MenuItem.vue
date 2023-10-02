<template>
	<transition
		name="animate__animated animate__bounce"
		enter-active-class="animate__fadeIn"
		appear
	>
		<article class="h-n-c o-h">
			<i class="fa-solid fs-18 mb-2" :class="rIcon" />

			<div class="h-sb-c w-100">
				<p>菜名: {{ data.name }}</p>
				<span>位置: {{ data.address }}</span>
			</div>
		</article>
	</transition>
</template>

<script setup>
	import { computed, defineProps } from "vue";

	const icon = [
		"fa-bowl-food",
		"fa-burger",
		"fa-pizza-slice",
		"fa-shrimp",
		"fa-stroopwafel",
		"fa-wheat-awn",
		"fa-hotdog",
		"fa-cheese",
	];
	const rIcon = computed(() => {
		const index = Math.floor(Math.random() * icon.length);
		return icon[index];
	});
	const rFont = computed(() => {
		return Math.random() * 5 + 3;
	});
	const props = defineProps({
		data: Object,
	});
</script>

<style scoped lang="scss">
	article {
		width: calc(50vw - 0.75rem);
		background-color: #fff;
		border-radius: 0.5rem;
		margin-bottom: 0.5rem;
		padding: 1rem 0;
		> i {
			font-size: 5rem;
			color: var(--oranges);
		}
		> div {
			line-height: 1.875rem;
			> p {
				color: #444;
				font-weight: bold;
				letter-spacing: 0.25rem;
			}
			> span {
				color: #999;
			}
		}
	}
</style>
