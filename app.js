const express = require("express");
const app = express();
app.use(express.json())
let data = require("./data")

app.get("/", (req, res) => {
    res.json({task: "done"})
})

app.get("/api/products", (req, res) => {
    res.json(data)
})

app.post("/api/products", (req, res) => {
    data.push(req.body)
    res.status(200).json(data)
})

app.delete("/api/products/:productId", (req, res) => {
    const reqId = +req.params.productId
    let search = data.find(product => +product.id === reqId)
    try{
        if (!search) res.status(400).json('There nothing to delete')
        if (search){
            let tempData = data.filter(product => product.id !== reqId)
            data = tempData
            res.status(204).json(data)
        }
    } catch (err) {
        console.log(err)
    }
})

console.log('outside the function',data)
const PORT = 8000;

app.listen(PORT, () => {
    console.log("The application is running on localhost:8000")
})