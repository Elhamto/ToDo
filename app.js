require("dotenv").config();
const express = require("express");
const route = require("./routes");

const app = express();

app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

route(app);

app.get("/", (req, res) => {
    return res.send("welcome to ToDo app")
})

app.listen(process.env.PORT || 3000, () => {
    console.log("app listen on port ", process.env.PORT || 3000);
})