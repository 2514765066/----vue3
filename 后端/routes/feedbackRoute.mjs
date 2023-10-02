import express from "express";
import fs from "fs";
import { nanoid } from "nanoid";
const router = express.Router();

const filepath = "./db/feedback.json";

router.post("/", (req, res) => {
	fs.readFile(filepath, (e, data) => {
		let all = JSON.parse(data);

		req.body.id = nanoid();
		all.push(req.body);

		fs.writeFile(filepath, JSON.stringify(all), () => {
			res.send(true);
		});
	});
});

router.put("/", (req, res) => {
	fs.readFile(filepath, (e, data) => {
		let all = JSON.parse(data);

		const index = all.findIndex(item => item.id == req.body.id);
		all.splice(index, 1, req.body);

		fs.writeFile(filepath, JSON.stringify(all), () => {
			res.send(true);
		});
	});
});

router.delete("/", (req, res) => {
	fs.readFile(filepath, (e, data) => {
		let all = JSON.parse(data);

		const index = all.findIndex(item => item.id == req.body.id);
		all.splice(index, 1);

		fs.writeFile(filepath, JSON.stringify(all), () => {
			res.send(true);
		});
	});
});

export default router;
