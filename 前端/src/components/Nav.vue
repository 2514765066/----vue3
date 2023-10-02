<template>
	<nav class="v-sb-n p-f w-100">
		<button class="v-c-c" @click="navShow">
			<i class="fa-solid fa-bars-staggered c-te fs-20" />
		</button>

		<div class="v-c-c f-1">{{ title }}</div>

		<button class="v-c-c as-e" @click="reload">
			<i class="fa-solid fa-rotate-right c-te fs-20" />
		</button>
	</nav>

	<Mask :isShow="isShow" :func="() => (isShow = false)" />
	<transition name="animate__animated animate__bounce animate__faster 50ms" enter-active-class="animate__slideInRight" leave-active-class="animate__slideOutRight" appear>
		<section class="h-100v w-70v h p-f" v-if="isShow">
			<Bulletin />
			<Mine />
			<MenuInfo/>
			<Admin />
		</section>
	</transition>
</template>

<script setup>
	import Mask from "@/components/Mask.vue";
	import Admin from "@/components/Admin.vue";
	import Bulletin from "@/components/Bulletin.vue";
	import Mine from "@/components/Mine.vue";
	import MenuInfo from "@/components/MenuInfo.vue";
	import { ref, watch } from "vue";
	import { useRoute } from "vue-router";
	import { $bus } from "@/hooks/useBus";

	const route = useRoute();

	const bgc = ref("transparent");
	const isShow = ref(false);
	const title = ref("");

	watch(
		() => route.path,
		value => {
			switch (value) {
				case "/home":
					title.value = "抽签大转盘";
					break;
				case "/menu":
					title.value = "所有的菜单";
					break;
				case "/feedback":
					title.value = "所有的反馈";
					break;
				case "/message":
					title.value = "管理员专属页面";
					break;
			}
		}
	);

	function navShow() {
		$bus.emit("maskShow", {
			type: "click",
			func: () => {
				isShow.value = false;
			},
		});
		isShow.value = true;
	}
	function reload() {
		location.reload();
	}
</script>

<style scoped lang="scss">
	nav {
		background-color: #f1f1f1;
		padding: 0.625rem;
		top: 0;
		left: 0;
		> * {
			height: 2.5rem;
			border-radius: 0.5rem;
			background-color: #fff;
		}
		> div {
			margin: 0 0.625rem;
			color: var(--l-pink);
			font-weight: bold;
		}
		> button {
			width: 2.5rem;
			&:hover > .fa-rotate-right {
				transition: 0.3s;
				transform: rotate(360deg);
			}
		}
	}
	section {
		top: 0;
		right: 0;
		z-index: 998;
		background-color: #fff;
		padding: 1rem;
		> * {
			margin-bottom: 1rem;
		}
	}
</style>
