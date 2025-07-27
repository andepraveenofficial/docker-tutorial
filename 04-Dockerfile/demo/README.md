# Basic Setup

## Techstack

1. Environment : `NodeJS`
2. Language : `Typescript`
3. Server : `express`

### Setup

#### 1. Environment

1. Create NodeJS Environment : `npm init -y`
2. Update the `package.json` file with your project information.

```json
{
	"name": "MyNewProject",
	"version": "1.0.0",
	"description": "I am creating basic setup for my new project",
	"main": "index.js",
	"scripts": {
		"start": "node index.js"
	},
	"keywords": ["nodejs", "typescript", "express"],
	"author": "Ande Praveen",
	"license": "ISC"
}
```

3. Create `index.js` file and write `javascript` code and run the Application.

```js
console.log("Hello World");
```

- Start the Application : `node index.js`
- Update the `package.json` file to include a `start` script for running the application.

```json
"scripts": {
  "start": "node index.js"
}
```

- Start the Application : `npm start`

4. Install Auto Restarter : `npm install -D nodemon`

- Start the Application : `nodemon index.js`
- Update the `package.json` file to include a `dev` script for running the application in development mode (Auto restart).

```json
"scripts": {
    "start": "node index.js",
    "dev":"nodemon index.js",
  },
```

- Start the Application : `npm run dev`

#### 2. Language

1. Add Typescript Language : `npm install -D typescript`
2. Create `index.ts` file in the **src** folder and write typescript code.

```ts
let message: string = "Hello World";
// message = 100; // Typescript will throw an error

console.log(message);
```

3. Add Typescript Configuration File : `npx tsc --init`

```ts tsconfig.json
{
  "compilerOptions": {

    "rootDir": "./",
    "outDir": "./dist",
  },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}

```

4. Install node types : `npm install -D @types/node`
5. Run the the Typescript code without compilation : `npm install -D ts-node`

- Run the Application : `ts-node ./src/index.ts`
- Update the `package.json` file to use **TypeScript** for starting the application.

```json package.json
{
	"main": "./dist/index.js",
	"scripts": {
		// "start": "node index.js",
		// "dev": "nodemon index.js",
		"build": "tsc",
		"start": "node ./dist/src/index.js",
		"dev": "nodemon --exec ts-node ./src/index.ts"
	}
}
```

6. Start the Application

- Production
  - `npm run build`
  - `npm start`
- Development
  - `npm run dev`

### 3. Server

1. Instal Server : `npm install express`
2. Install express types : `npm install -D @types/express`
3. Write Sample express code

```ts index.ts
import express, { Request, Response } from "express";

/* -----> Create express server Instance <----- */
const app = express();

/* -----> Start the Server <----- */
const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

/* -----> Routes <----- */

app.get("/", (req: Request, res: Response) => {
	console.log("I am Home Route");
	res.send("I am Home route");
});
```

4. Start the Application : `npm run dev`
5. Create **rest-client** file and check APIs

```http
@baseUrl=http://localhost:5000

### 01 Home
GET {{baseUrl}}
```

### Install the Application

- `npm install`

### Start the Application

- Development : `npm run dev`
- Production
  1. `npm run build`
  2. `npm start`

---
