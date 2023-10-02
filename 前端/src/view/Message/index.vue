<template>
	<main class="h p-2">
		<Item v-for="(item, index) of needFeedback" :data="item" :key="index" />
		<aside class="w-100 c-te t-c" v-if="isTipShow">没有更多内容</aside>
	</main>
</template>

<script setup>
	import { $bus } from "@/hooks/useBus";
	import Item from "./Item.vue";
	import useFeedbackStore from "@/store/useFeedbackStore";
	import { computed } from "vue";

	const feedbackStore = useFeedbackStore();

	const feedback = feedbackStore.feedback;

	const needFeedback = computed(() => feedback.filter(item => item.status == "审核中"));
	const isTipShow = computed(() => {
		if (needFeedback.value.length == 0) return true;
		return false;
	});
</script>

<style scoped lang="scss">
	main {
		padding-bottom: 4rem;
		margin-top: 3.125rem;
	}
</style>
