<template>
	<main class="wh-100v h-c-c">
		<section class="v-c-c mb-4">
			<img :src="img" class="c-img" />
		</section>
		<h2 class="mb-4">今天吃什么呢？</h2>
		<button class="fs-18 fw-b mb-4" @click="RandomFood">点击抽签</button>
		<p class="c-te">
			没有你想吃的?
			<router-link to="/feedback">反馈</router-link>
		</p>
	</main>
	<Mask :isShow="isShow" :func="() => (isShow = false)">
		<MenuItem :data="showFood" />
	</Mask>
</template>

<script setup>
	import img from "@/assets/xiaolian.png";
	import MenuItem from "@/components/MenuItem.vue";
	import useFoodStore from "@/store/useFoodStore";
	import { ref } from "vue";
	import { $bus } from "@/hooks/useBus";
	import Mask from "@/components/Mask.vue";
	import {storeToRefs} from "pinia"

	const { foods } = storeToRefs(useFoodStore());

	const showFood = ref({});
	const isShow = ref(false);

	function RandomFood() {
		const rIndex = Math.floor(Math.random() * foods.value.length);
		const item = foods.value.splice(rIndex, 1)[0];
		if (!item) {
			$bus.emit("tipShow", {
				title: "所有菜谱都展示了，没有你喜欢的？反馈试试",
				type: false,
			});
			return;
		}
		showFood.value = item;
		isShow.value = true;
	}
</script>

<style scoped lang="scss">
	main {
		section {
			width: 15.625rem;
			height: 15.625rem;
			box-shadow: inset 5px 5px 5px #c1c1c1, inset -5px -5px 10px #ffffff;
			border-radius: 2rem;
			> img {
				width: 12.5rem;
				height: 12.5rem;
			}
		}
		> h2 {
			color: var(--l-pink);
		}
		> button {
			width: 18.75rem;
			height: 3.75rem;
			box-shadow: 5px 5px 10px #c1c1c1, -5px -5px 10px #ffffff;
			border-radius: 3.75rem;
			color: var(--cyan);
			&:active {
				box-shadow: inset 3px 3px 5px #c1c1c1, inset -5px -5px 10px #ffffff;
			}
		}
		> p > * {
			color: var(--oranges);
			transition: 0.5s;
			&:hover {
				color: var(--l-blue);
				text-decoration: underline;
			}
		}
	}
</style>
