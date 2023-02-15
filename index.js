const logger = require("./utils/logger");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
	// test catch error
	if (!true) {
		//logger.error("Oops! Il y a une erreur!");
		throw new Error("Oops! Il y a une erreur!");
	} else {
		logger.info("Hello World!");
		res.send("Hello World!");
	}
});

app.listen(3000, () => {
	logger.info("Server is running on port 3000");
});
