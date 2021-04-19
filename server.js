// IMPORT DEPENDENCIES
const express = require("express");
const cors = require("cors");
const user = require("./Controllers/UserController");
const app = express();

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// ROUTE CONTROLLER
app.use("/api/users", user);

// LISTENER
app.listen(8000, () => console.log("Server berjalan di port 8000"))