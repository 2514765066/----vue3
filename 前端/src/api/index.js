import axios from "axios";

export const baseURL = "http://zhangmingyang.love"
// export const baseURL = "http://localhost:5173";

const api = axios.create({
	baseURL: `${baseURL}/api`,
	timeout: 5000,
});

export const getData = url =>
	api({
		url,
		method: "get",
	});

export const postData = (url, data) =>
	api({
		url,
		method: "post",
		data,
	});

export const putData = (url, data) =>
	api({
		url,
		method: "put",
		data,
	});

export const deleteData = (url, data) =>
	api({
		url,
		method: "delete",
		data,
	});
