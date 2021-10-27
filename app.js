const express = require("express");
const productRoutes = require("./apis/products/routes");
const connectDb = require("./database");
const morgan = require('morgan')

const app = express();
app.use(express.json())



//https://www.npmjs.com/package/morgan
app.use(morgan("dev"))

const logger = (req) => {
    return (`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl} ${new Date()}`)
}

app.use((req, res, next)=> {
    console.log(logger(req))
    next()
})




app.get("/", (req, res) => {
    res.json({task: "done"})
})


app.use("/api/products", productRoutes)

app.use((req, res) => {
    const err = new Error("Not Found");
    res.status(404);
    console.log(`Path Not Found ${logger(req)}`)
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