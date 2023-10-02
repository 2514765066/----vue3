<template>
	<router-view></router-view>
	<BottomNav />
	<Dialog />
	<Tip />
	<Nav />
</template>

<script setup>
	import Nav from "@/components/Nav.vue";
	import Dialog from "@/components/Dialog.vue";
	import Tip from "@/components/Tip.vue";
	import BottomNav from "@/components/BottomNav.vue";
	import useFoodStore from "@/store/useFoodStore";
	import useFeedbackStore from "@/store/useFeedbackStore";
	import useMainStore from "@/store/useMainStore";

	const foodStore = useFoodStore();
	const feedbackStore = useFeedbackStore();
	const mainStore = useMainStore();

	foodStore.getData();
	feedbackStore.getData();
	mainStore.getData();
	mainStore.autoLogin();
</script>

<style lang="scss">
	* {
		user-select: none;
	}
	body {
		overflow-x: hidden;
		background-color: #f1f1f1;
	}
	.shadow {
		border-radius: 0.5rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		transition: 0.5s box-shadow;
		&:hover {
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
		}
	}
</style>
