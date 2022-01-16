const express = require("express")
const morgan = require("morgan")
const websocketConnection = require('./connect.js')
const cors = require("cors")
let app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.get("/",(req,res) => {
    res.send({
        status:200
    })
})

//


const server = app.listen(8000, () => {
    console.log("Server booted")
})

websocketConnection(server)
