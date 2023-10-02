<template>
	<transition name="animate__animated animate__bounce animate__faster 50ms" enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut" appear>
		<div class="wh-100v p-f v-c-c" v-if="props.isShow" @click.self="Hide">
			<slot></slot>
		</div>
	</transition>
</template>

<script setup>
	import { defineProps, onMounted, onUnmounted, reactive, ref } from "vue";
	import { $bus } from "@/hooks/useBus";

	const props = defineProps({
		func: Function,
		isShow:Boolean,
	});

	function Hide() {
		if (props.func) {			
			props.func();
		}
	}
</script>

<style scoped>
	div {
		top: 0;
		left: 0;
		z-index: 997;
		background-color: var(--mask);
	}
</style>
