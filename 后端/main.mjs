import express from "express";
import path from "path";
import bodyParser from "body-parser";
import useFoodRoute from "./routes/foodRoute.mjs";
import useFeedbackRoute from "./routes/feedbackRoute.mjs";
import { nanoid } from "nanoid";
import fs from "fs";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve("./public")));

app.use("/api/foods", useFoodRoute);
app.use("/api/feedback", useFeedbackRoute);

app.get("/api/:db", (req, res) => {
	res.sendFile(path.resolve(`./db/${req.params.db}.json`));
});

app.post("/api/login", (req, res) => {
	if (req.body.token_key) {
		const token_key = fs.readFileSync("./db/token.json");
		if (req.body.token_key == JSON.parse(token_key).token_key) {
			res.send(true);
			return;
		}
	}
	if (req.body.password == "yxingyuszmy2") {
		const data = {
			token_key: nanoid(),
		};
		res.send(data);
		fs.writeFile(path.resolve("./db/token.json"), JSON.stringify(data), () => {});
		return;
	}
	res.send(false);
});

app.listen(80, () => {
	console.log("启动成功");
});
