<template>
	<main class="h p-2">
		<div class="h p-f">
			<button class="mb-1r fs-12" @click="status = !status">
				{{ status ? "已添加" : "审核中" }}
			</button>
			<button @click="postData">
				<i class="fa-solid fa-plus fs-20"></i>
			</button>
		</div>
		<FeedbackItem v-for="(item, index) of status ? yes : no" :data="item" :key="item.id" />
		<aside class="w-100 c-te t-c" v-if="isTipShow">没有更多内容</aside>
	</main>
</template>

<script setup>
	import { $bus } from "@/hooks/useBus";
	import FeedbackItem from "@/components/FeedbackItem.vue";
	import useFeedbackStore from "@/store/useFeedbackStore";
	import useToken from "@/hooks/useToken";
	import { getFullTime } from "@/hooks/useTime";
	import { computed, reactive, ref } from "vue";

	const feedbackStore = useFeedbackStore();

	const feedback = feedbackStore.feedback;

	const status = ref(false);

	const yes = computed(() => feedback.filter(item => item.username == useToken().username && item.status == "已添加").reverse());
	const no = computed(() => feedback.filter(item => item.username == useToken().username && item.status == "审核中").reverse());
	const isTipShow = computed(() => {
		if (!status.value && no.value.length == 0) return true;
		if (status.value && yes.value.length == 0) return true;
		return false;
	});

	function postData() {
		$bus.emit("dialogShow", {
			title: "添加菜品",
			count: [
				{
					type: "text",
					p: "请输入菜名",
				},
				{
					type: "text",
					p: "请输入位置",
				},
			],
			func: data => {
				feedbackStore.postData({
					username: useToken().username,
					time: getFullTime(),
					status: "审核中",
					name: data[0],
					address: data[1],
				});
			},
		});
	}
</script>

<style scoped lang="scss">
	main {
		> * {
			margin-bottom: 1rem;
		}
		padding-bottom: 4rem;
		margin-top: 3.125rem;
		> div {
			right: 2rem;
			bottom: 5rem;
			> button {
				width: 2.5rem;
				height: 2.5rem;
				border-radius: 50%;
				color: #fff;
			}
			> button:nth-child(1) {
				background-color: var(--l-pink);
			}
			> button:nth-child(2) {
				background-color: var(--l-blue);
			}
		}
	}
</style>
