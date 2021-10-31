const express = require("express");
const productRoutes = require("./apis/products/routes");
const connectDb = require("./database");
const morgan = require('morgan')
const logger = require('./middleware/logger')
const errorHandler =require('./middleware/errorHandler')
const cors = require('cors')
const path = require("path")

const app = express();
connectDb();
app.use(express.json())
app.use(cors())
app.use("/media", express.static(path.join(__dirname, "media")))



app.use(morgan("dev"))

app.use((req, res, next)=> {
    console.log(logger(req))
    next()
})




app.get("/", (req, res) => {
    res.json({task: "done"})
})


app.use("/api/products", productRoutes)



app.use(errorHandler)


const PORT = 8000;
app.listen(PORT, () => {
    console.log("The application is running on localhost:8000")
})