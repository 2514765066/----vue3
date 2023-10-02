import { createRouter, createWebHashHistory } from "vue-router";
import useMainStore from "@/store/useMainStore";
import pinia from "@/store";
import { storeToRefs } from "pinia";

const { isAdmin } = storeToRefs(useMainStore(pinia));

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			redirect: "/home",
		},
		{
			path: "/home",
			component: () => import("@/view/Home/index.vue"),
		},
		{
			path: "/menu",
			component: () => import("@/view/Menu/index.vue"),
		},
		{
			path: "/feedback",
			component: () => import("@/view/Feedback/index.vue"),
		},
		{
			path: "/message",
			component: () => import("@/view/Message/index.vue"),
			beforeEnter(to, from, next) {
				if (isAdmin.value) next();
				else next("/home");
			},
		},
	],
});
