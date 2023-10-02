import express from "express";
import fs from "fs";

const router = express.Router();

const filepath = "./db/foods.json";

router.post("/", (req, res) => {
	fs.readFile(filepath, (e, data) => {
		let all = JSON.parse(data);

		all.push(req.body);

		fs.writeFile(filepath, JSON.stringify(all), () => {
			res.send(true);
		});
	});
});

router.delete("/", (req, res) => {
	fs.readFile(filepath, (e, data) => {
		const all = JSON.parse(data);

		const index = all.findIndex(item => item.name == req.body.name && item.address == req.body.address);
		all.splice(index, 1);

		fs.writeFile(filepath, JSON.stringify(all), () => {
			res.send(true);
		});
	});
});

export default router;
