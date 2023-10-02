<template>
	<main class="w-100 p-f v-se-c">
		<router-link to="/home">
			<div class="wh-100 h-c-c" ref="home">
				<i class="fa-solid fa-house fs-18"></i>
				<span class="fs-13">主页</span>
			</div>
		</router-link>
		<router-link to="/menu">
			<div class="wh-100 h-c-c" ref="menu">
				<i class="fa-solid fa-burger fs-18"></i>
				<span class="fs-13">菜单</span>
			</div>
		</router-link>
		<router-link to="/feedback">
			<div class="wh-100 h-c-c" ref="feedback">
				<i class="fa-solid fa-comment-medical fs-18"></i>
				<span class="fs-13">反馈</span>
			</div>
		</router-link>
		<router-link to="/message" v-if="isAdmin">
			<div class="wh-100 h-c-c" ref="message">
				<i class="fa-solid fa-envelope fs-18"></i>
				<span class="fs-13">消息</span>
			</div>
		</router-link>
	</main>
</template>

<script setup>
	import { getCurrentInstance } from "vue";
	import useSelect from "@/hooks/useSelect";
	import useMainStore from "@/store/useMainStore";
	import { storeToRefs } from "pinia";

	const { isAdmin } = storeToRefs(useMainStore());

	useSelect(getCurrentInstance());
</script>

<style scoped lang="scss">
	main {
		box-shadow: 0 1px 10px #ccc;
		background-color: #fff;
		height: 4rem;
		bottom: 0;
		left: 0;
		border-top-right-radius: 1rem;
		border-top-left-radius: 1rem;
		div {
			height: 3.25rem;
			width: 3.25rem;
			border-radius: 1rem;
		}
		.select {
			background-color: #f1f1f1;
		}
		i {
			margin-bottom: 2px;
			&.fa-house {
				color: var(--cyan);
			}
			&.fa-burger {
				color: var(--oranges);
			}
			&.fa-comment-medical {
				color: var(--l-pink);
			}
			&.fa-envelope {
				color: var(--yellow);
			}
		}
		span {
			color: #888;
		}
	}
</style>
