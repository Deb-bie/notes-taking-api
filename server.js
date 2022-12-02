const express = require("express")
const dotenv = require("dotenv").config()
const { dbConnect } = require("./db/config.js")
const PORT = process.env.PORT


// calling the function to connect to the database
dbConnect()

const app = express()


app.get("/", (req, res) => {
    res.send("My Notes")
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
