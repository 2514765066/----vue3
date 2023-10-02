<template>
<transition name="animate__animated animate__bounce" enter-active-class="animate__fadeIn" appear>
	<article class="w-100 h">
		<header class="v-sb-c mb-1r">
			<div class="fs-12 v-c-c fw-b">{{ props.data.status }}</div>
			<span class="fs-14">{{ props.data.time }}</span>
		</header>
		<div class="v-sb-c mr-1 ml-1">
			<p class="c-t">菜名: {{ props.data.name }}</p>
			<span class="c-te">位置: {{ props.data.address }}</span>
		</div>
	</article>
</transition>
</template>

<script setup>
	import { reactive, defineProps } from "vue";

	const props = defineProps({
		data: Object,
	});
</script>

<style scoped lang="scss">
	article {
		padding: 0.8rem;
		border-radius: 1rem;
		background-color: #fff;
		border-top-left-radius: 0;		
		header {
			> div {
				color: var(--l-blue);
				width: 60px;
				height: 24px;
				border-radius: 24px;
				border: 1.5px solid var(--l-blue);
			}
			> span {
				color: #999;
			}
		}
	}
</style>
