//Dependencies
const express = require("express");
const connectDb = require("./database");
const cors = require('cors')
const path = require("path")

//Middleware
const morgan = require('morgan')
// const logger = require('./middleware/logger')
const errorHandler =require('./middleware/errorHandler')

//Routes
const productRoutes = require("./apis/products/routes");
const shopRoutes = require("./apis/shops/routes");

//Database connection
connectDb();
//Express calls
const app = express();
app.use(express.json())

//Misc Middleware
app.use(cors())
app.use("/media", express.static(path.join(__dirname, "media")))
app.use(morgan("dev"))
// app.use((req, res, next)=> {
//     console.log(logger(req))
//     next()
// })

//Home Route
app.get("/", (req, res) => {
    res.json({task: "done"})
})
//Alternate Routes
app.use("/api/products", productRoutes)
app.use("/api/shops", shopRoutes)

//Error Handling Middleware
app.use(errorHandler)

//Server Activation
const PORT = 8000;
app.listen(PORT, () => {
    console.log("The application is running on localhost:8000")
})