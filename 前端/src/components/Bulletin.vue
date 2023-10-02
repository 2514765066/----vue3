<template>
	<transition name="animate__animated animate__bounce" enter-active-class="animate__bounceInRight" appear>
		<main id="bulletin" class="shadow">
			<section class="fs-18 mb-2">
				<i class="fa-solid fa-bullhorn fa-shake mr-2" />
				<span class="c-t">公告</span>
			</section>
			<section class="c-s">{{ bulletin }}</section>
		</main>
	</transition>
</template>

<script setup>
	import useMainStore from "@/store/useMainStore";

	const mainStore = useMainStore();

	const bulletin = mainStore.bulletin;
</script>

<style scoped lang="scss">
	main#bulletin {
		background-color: #fff;
		padding: 1rem;
		> section {
			line-height: 25px;
			i {
				color: var(--yellow);
			}
		}
	}
</style>
