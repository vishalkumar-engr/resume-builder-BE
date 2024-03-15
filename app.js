const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const mongo = require("./src/connections/mongoDb/connection");
const routes = require("./src/routes/routes");

const app = express();
const PORT = process.env.PORT | 8000;

//Handel application/json data
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "50mb" }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//setting up cors
app.use(cors());

// Db Connection
mongo.connect();

//setting up Routes.
app.use(routes);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
