import { defineStore } from "pinia";
import * as api from "@/api";

export default defineStore("useMainStore", {
	state: () => ({
		bulletin: "",
		isAdmin: false,
	}),
	actions: {
		async getData() {
			const { data } = await api.getData("/bulletin");
			this.bulletin = data.bulletin;
		},
		async login(data1) {
			const { data } = await api.postData("/login", data1);
			if (typeof data == "object") {
				this.isAdmin = true;
				localStorage.setItem("token_key", data.token_key);
				return true;
			}
			this.isAdmin = data;
			return data;
		},
		async autoLogin() {
			const { data } = await api.postData("/login", {
				token_key: localStorage.getItem("token_key"),
			});
			if (data) this.isAdmin = true;
		},
	},
});
