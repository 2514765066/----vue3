import { defineStore } from "pinia";
import * as api from "@/api";

export default defineStore("useFoodStore", {
	state: () => ({
		foods: [],
		menu: [],
	}),
	actions: {
		async getData() {
			const { data } = await api.getData("/foods");
			this.foods = data;
			this.menu = [...data];
		},
		postData(data) {
			api.postData("/foods", data);
		},
		deleteData(data) {
			api.deleteData("/foods", data);
			const index = this.menu.findIndex(item => item.name == data.name && item.address == data.address);
			this.menu.splice(index, 1);
		},
	},
});
