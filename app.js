const express = require("express");
const productRoutes = require("./apis/products/routes");
const connectDb = require("./database");
const morgan = require('morgan')
const logger = require('./middleware/logger')
const errorHandler =require('./middleware/errorHandler')

const app = express();
app.use(express.json())



//https://www.npmjs.com/package/morgan
app.use(morgan("dev"))
// app.use(logger)
// const logger = (req) => {
//     return (`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl} ${new Date()}`)
// }

app.use((req, res, next)=> {
    console.log(logger(req))
    next()
})




app.get("/", (req, res) => {
    res.json({task: "done"})
})


app.use("/api/products", productRoutes)

// app.use((req, res) => {
//     const err = new Error("Not Found");
//     console.log(`Path Not Found ${logger(req)}`)
//     res.status(404).json({
//       error: 
//     `Path ${err.message}`
//     });
// });


app.use(errorHandler)
// app.use((err, req, res, next) => {
//     res.status(
//         err.status || 500
//     ).json(
//         err.message || {
//         message: "Something Broke! Internal Server Error!"
//     })
// })

connectDb();

const PORT = 8000;

app.listen(PORT, () => {
    console.log("The application is running on localhost:8000")
})