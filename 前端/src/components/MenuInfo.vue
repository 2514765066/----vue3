<template>
	<transition name="animate__animated animate__bounce" enter-active-class="animate__bounceInRight" appear>
		<main id="menuinfo" class="shadow">
			<section class="fs-18 mb-2">
				<i class="fa-solid fa-burger mr-2" />
				<span class="c-t">菜单</span>
			</section>
			<section class="c-s v-sb-c fs-14">
				<strong>菜单种类:</strong>
				{{ menu.length }}种
			</section>
		</main>
	</transition>
</template>

<script setup>
	import useFoodStore from "@/store/useFoodStore";

	const { menu } = useFoodStore();
</script>

<style scoped lang="scss">
	main#menuinfo {
		background-color: #fff;
		padding: 1rem;
		> section {
			line-height: 25px;
			> i {
				color: var(--oranges);
			}
		}
	}
</style>
