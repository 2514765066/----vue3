import { defineStore } from "pinia";
import * as api from "@/api";

export default defineStore("useFeedbackStore", {
	state: () => ({
		feedback: [],
	}),
	actions: {
		async getData() {
			const { data } = await api.getData("/feedback");
			this.feedback = data;
		},
		//添加反馈
		postData(data) {
			api.postData("/feedback", data);
			this.feedback.push(data);
			return true;
		},
		//同意
		putData(data) {
			api.putData("/feedback", data);
			const index = this.feedback.findIndex(item => item.id == data.id);
			this.feedback.splice(index, 1, data);
			return true;
		},
		//驳回并删除
		deleteData(data) {
			api.deleteData("/feedback", data);
			const index = this.feedback.findIndex(item => item.id == data.id);
			this.feedback.splice(index, 1);
			return true;
		},
	},
});
