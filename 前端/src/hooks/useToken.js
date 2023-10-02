import { nanoid } from "nanoid";

export default () => {
	if (!localStorage.getItem("cq_token")) {
		localStorage.setItem(
			"cq_token",
			JSON.stringify({
				username: nanoid(),
			})
		);
	}
	return JSON.parse(localStorage.getItem("cq_token"));
};
