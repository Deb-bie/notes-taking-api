const express = require("express")
const router = express.Router();

const {createNote, updateNote, deleteNote, getAllNotes, getOneNote} = require("../controllers/note.js")


// CREATE
router.post("/", createNote)

// UPDATE
router.update("/:id", updateNote)

// DELETE
router.delete("/:id", deleteNote)

// GET ALL
router.get("/", getAllNotes)

// GET ONE
router.get("/:id", getOneNote)

module.exports = router;