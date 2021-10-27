const express = require("express");
const productRoutes = require("./apis/products/routes");
const connectDb = require("./database");

const app = express();

const logger = (req) => {
    console.log(`${req.method} ${req.originalUrl} ${new Date()}`)
}

app.use((req, res, next)=> {
    logger(req)
    next()
})

app.get("/", (req, res) => {
    res.json({task: "done"})
})


app.use(express.json())
app.use("/api/products", productRoutes)

app.use((req, res) => {
    const err = new Error("Not Found");
    res.status(404);
    console.log(`Path Not Found ${req.method} ${req.originalUrl} ${new Date()}`)
    res.json({
      error: 
    `Path ${err.message}`
    });
  });

connectDb();

const PORT = 8000;

app.listen(PORT, () => {
    console.log("The application is running on localhost:8000")
})