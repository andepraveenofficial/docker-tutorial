const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

// Create the Express app
const app = express();

app.use(cors());
app.use(express.json());

// Create a connection to the MySQL server (without specifying the database)
const mysqlConfig = {
	host: process.env.DB_HOST || "localhost",
	user: process.env.DB_USER || "root",
	port: process.env.DB_PORT || "3306",
	password: process.env.DB_PASSWORD || "pass123",
};

// Connection to the MySQL server
let db = null;

const connectToServer = () => {
	return new Promise((resolve, reject) => {
		db = mysql.createConnection(mysqlConfig);
		db.connect((err) => {
			if (err) {
				console.error("Error connecting to the server: ", err);
				reject(err);
			} else {
				console.log("Connected to the server");
				resolve();
			}
		});
	});
};

const createDatabase = () => {
	return new Promise((resolve, reject) => {
		db.query("CREATE DATABASE IF NOT EXISTS appdb", (err, results) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				console.log("Database created successfully");
				resolve();
			}
		});
	});
};

// Create a connection to the MySQL database (after creating the database)
const connectToDatabase = () => {
	return new Promise((resolve, reject) => {
		const dbConfigWithDatabase = {
			...mysqlConfig,
			database: process.env.DB_NAME || "appdb",
		};
		db = mysql.createConnection(dbConfigWithDatabase);
		db.connect((err) => {
			if (err) {
				console.error("Error connecting to the database: ", err);
				reject(err);
			} else {
				console.log("Connected to the database");
				resolve();
			}
		});
	});
};

const createTable = () => {
	return new Promise((resolve, reject) => {
		db.query(
			"CREATE TABLE IF NOT EXISTS apptb (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))",
			(err, results) => {
				if (err) {
					console.error(err);
					reject(err);
				} else {
					console.log("Table created successfully");
					resolve();
				}
			}
		);
	});
};

const initializeDBAndServer = async () => {
	try {
		await connectToServer();
		await createDatabase();
		await connectToDatabase();
		await createTable();

		const port = process.env.PORT || 5000;
		app.listen(port, () => {
			console.log(`app listening on port ${port}`);
		});
	} catch (error) {
		console.log(`Database Error : ${error.message}`);
		process.exit(1);
	}
};

initializeDBAndServer();

// Test route
app.get("/", (req, res) => {
	console.log("Hello World");
	res.send("Hello World");
});

// GET request
app.get("/user", (req, res) => {
	console.log("Display Users");

	db.query("SELECT * FROM apptb", (err, results) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error retrieving data from database");
		} else {
			res.json(results);
		}
	});
});

// POST request
app.post("/user", (req, res) => {
	console.log("Add User");

	console.log(req.body);
	const { data } = req.body;
	db.query("INSERT INTO apptb (name) VALUES (?)", [data], (err, results) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error inserting data into database");
		} else {
			res.json(results.insertId);
		}
	});
});
