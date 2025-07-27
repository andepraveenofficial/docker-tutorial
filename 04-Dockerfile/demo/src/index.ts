import express, { Request, Response } from "express";

/* -----> Create express server Instance <----- */
const app = express();

/* -----> Start the Server <----- */
const PORT = 5000;
app.listen(PORT, () => {
	console.log(`⚙️  server listening on port ${PORT}`);
});

/* -----> Database <----- */
const db = {
	products: [
		{
			id: 1,
			name: "Product 1",
			quantity: 10,
		},
		{
			id: 2,
			name: "Product 2",
			quantity: 20,
		},
	],
};

/* -----> Routes <----- */

app.get("/", (req: Request, res: Response) => {
	console.log("I am Home Route");
	console.log("--------------");
	console.log(req.ip);
	console.log(req.method);
	console.log(req.originalUrl);
	console.log("--------------");
	res.send("I am Home route");
});

app.get("/health", (req, res) => {
	console.log("I am Health Route");

	const uptimeInSeconds = Math.floor(process.uptime());

	const hours = Math.floor(uptimeInSeconds / 3600);
	const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
	const seconds = uptimeInSeconds % 60;

	const formattedUptime = `${hours}h ${minutes}m ${seconds}s`;

	res.status(200).send({
		status: "OK",
		timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
		uptime: formattedUptime,
	});
});

app.get("/products", (req: Request, res: Response) => {
	console.log("I am products Route");
	const data = db.products;
	res.status(200).json(data);
});
