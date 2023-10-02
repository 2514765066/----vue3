<template>
	<main class="v-sb-n f-w">
		<MenuItem v-for="(item, index) of menu" :key="index" :data="item" @click="deleteMenu(item)" />
	</main>
</template>

<script setup>
	import MenuItem from "@/components/MenuItem.vue";
	import useFoodStore from "@/store/useFoodStore";
	import { storeToRefs } from "pinia";
	import useMainStore from "@/store/useMainStore";
	import { $bus } from "@/hooks/useBus";

	const { isAdmin } = storeToRefs(useMainStore());
	const { menu } = useFoodStore();
	const foodStore = useFoodStore();

	function deleteMenu(data) {
		if (!isAdmin.value) return;
		$bus.emit("dialogShow", {
			title: "提示",
			subtitle: "确定要删除吗?",
			func: () => {
				foodStore.deleteData(data);
			},
		});
	}
</script>

<style scoped>
	main {
		padding: 0.5rem 0.5rem 4rem;
		margin-top: 3.125rem;
	}
</style>
