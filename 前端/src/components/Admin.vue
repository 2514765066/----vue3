<template>
	<transition name="animate__animated animate__bounce" enter-active-class="animate__bounceInRight" appear>
		<main id="admin" class="shadow" v-if="!mainStore.isAdmin">
			<section class="fs-18 mb-2">
				<i class="fa-solid fa-lock mr-2" />
				<span class="c-t">管理员</span>
			</section>
			<form class="c-s h-n-e" @submit.prevent="Login">
				<input type="password" class="w-100 p-2 mb-2" placeholder="请输入管理员密码" v-model="password" required />
				<button class="w-100 t-c">登录</button>
			</form>
		</main>
	</transition>
</template>

<script setup>
	import { ref } from "vue";
	import { $bus } from "@/hooks/useBus";
	import useMainStore from "@/store/useMainStore";

	const mainStore = useMainStore();

	const password = ref("");

	function Login() {
		if (password.value.trim() == "") {
			$bus.emit("tipShow", {
				title: "格式不合法",
			});
			return;
		}
		mainStore
			.login({
				password: password.value,
			})
			.then(res => {
				if (!res) {
					$bus.emit("tipShow", {
						title: "密码错误",
						type: false,
					});
					password.value = "";
					return;
				}
				$bus.emit("tipShow", {
					title: "欢迎管理员",
				});
				password.value = "";
			});
	}
</script>

<style scoped lang="scss">
	main#admin {
		background-color: #fff;
		padding: 1rem;
		> section {
			line-height: 25px;
			> i {
				color: var(--l-blue);
			}
		}
		> form {
			> input {
				border-radius: 5px;
				height: 30px;
				border: 1px solid #ccc;
				color: #666;
			}
			> button {
				padding: 0.5rem 0;
				background-color: var(--l-blue);
				color: #fff;
				border-radius: 0.5rem;
			}
		}
	}
</style>
