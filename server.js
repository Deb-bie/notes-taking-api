const express = require("express")
const dotenv = require("dotenv").config()
const { dbConnect } = require("./db/config.js")
const notesRoute = require("./route/notes.js")
const PORT = process.env.PORT



// calling the function to connect to the database
dbConnect()

const app = express()

// MIDDLEWARES
app.use(express.json())

// ROUTES
app.use("/", notesRoute)


// ERROR HANDLING MIDDLEWARE
app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(500).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
