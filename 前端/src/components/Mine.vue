<template>
	<transition name="animate__animated animate__bounce" enter-active-class="animate__bounceInRight" appear>
		<main id="mine" class="shadow">
			<section class="fs-18 mb-2">
				<i class="fa-solid fa-user mr-2" />
				<span class="c-t">我的</span>
			</section>
			<section class="c-s v-sb-c fs-14">
				<strong>账号:</strong>
				{{ data.username }}
			</section>
		</main>
	</transition>
</template>

<script setup>
	import useToken from "@/hooks/useToken";

	const data = useToken();
</script>

<style scoped lang="scss">
	main#mine {
		background-color: #fff;
		padding: 1rem;
		> section {
			line-height: 25px;
			> i {
				color: var(--pink);
			}
		}
	}
</style>
