const express = require("express");
const productRoutes = require("./apis/products/routes");
const connectDb = require("./database");

const app = express();

app.get("/", (req, res) => {
    res.json({task: "done"})
})


app.use(express.json())
app.use("/api/products", productRoutes)


connectDb();

const PORT = 8000;

app.listen(PORT, () => {
    console.log("The application is running on localhost:8000")
})