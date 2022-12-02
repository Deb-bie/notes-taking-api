const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT

const app = express()

app.get("/", (req, res) => {
    res.send("My Notes")
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
