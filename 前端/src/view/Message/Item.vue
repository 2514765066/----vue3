<template>
	<article class="h mb-1r">
		<FeedbackItem :data="props.data" />
		<div class="v-sb-c">
			<button @click="putData">同意</button>
			<button @click="deleteData">驳回</button>
		</div>
	</article>
</template>

<script setup>
	import { $bus } from "@/hooks/useBus";
	import { reactive, defineProps } from "vue";
	import FeedbackItem from "@/components/FeedbackItem.vue";
	import useFeedbackStore from "@/store/useFeedbackStore";
	import useFoodStore from "@/store/useFoodStore";

	const feedbackStore = useFeedbackStore();
	const foodStore = useFoodStore();

	const props = defineProps({
		data: Object,
	});

	function putData() {
		$bus.emit("dialogShow", {
			title: "提示",
			subtitle: "你确定要同意吗？",
			func: () => {
				//切换状态
				const status = feedbackStore.putData({
					...props.data,
					status: "已添加",
				});
				//添加
				foodStore.postData({
					name: props.data.name,
					address: props.data.address,
				});

				if (status) {
					$bus.emit("tipShow", {
						title: "已添加",
					});
				}
			},
		});
	}
	function deleteData() {
		$bus.emit("dialogShow", {
			title: "提示",
			subtitle: "你确定要驳回吗？",
			func: () => {
				const status = feedbackStore.deleteData(props.data);
				if (status) {
					$bus.emit("tipShow", {
						title: "已驳回并删除",
					});
				}
			},
		});
	}
</script>

<style scoped lang="scss">
	article {
		background-color: #fff;
		border-radius: 1rem;
		> div {
			padding: 0 1rem 0.5rem;
			> button {
				background-color: var(--l-pink);
				color: #fff;
				padding: 0.5rem 1rem;
				border-radius: 0.5rem;
			}
			> button:last-child {
				background-color: transparent;
				border: 1.5px solid #dcdfe6;
				color: #666;
			}
		}
	}
</style>
