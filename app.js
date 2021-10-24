const express = require("express");
const data = require("./data")
const app = express();


app.get("/", (req, res) => {
    res.json({task: "done"})
})

app.get("/api/products", (req, res) => {
    res.json(data)
})

const PORT = 8000;

app.listen(PORT, () => {
    console.log("The application is running on localhost:8000")
})