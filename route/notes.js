const express = require("express")
const router = express.Router();

const {createNote, updateNote, deleteNote, getAllNotes, getOneNote} = require("../controller/note.js")


// CREATE
router.post("/", createNote)

// UPDATE
router.put("/:id", updateNote)

// DELETE
router.delete("/:id", deleteNote)

// GET ALL
router.get("/", getAllNotes)

// GET ONE
router.get("/:id", getOneNote)

module.exports = router;