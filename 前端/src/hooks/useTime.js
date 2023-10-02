export const getTime = () => {
	const date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();

	hour = hour.toString().padStart(2, "0");
	minute = minute.toString().padStart(2, "0");
	second = second.toString().padStart(2, "0");

	return hour + ":" + minute + ":" + second;
};

export const getDate = () => {
	return new Date()
		.toLocaleDateString("zh-CN", {
			year: "numeric",
			month: "numeric",
			day: "numeric",
		})
		.replace(/\//g, "-");
};

export const getFullTime = () => getDate() + "  " + getTime();
