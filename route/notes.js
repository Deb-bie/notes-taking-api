const express = require("express")
const router = express.Router();

const {createNote, updateNote, patchNote, deleteNote, getAllNotes, getOneNote} = require("../controller/note.js")


// CREATE
router.post("/", createNote)

// UPDATE
router.put("/:id", updateNote)

// PATCH
router.patch("/:id", patchNote)

// DELETE
router.delete("/:id", deleteNote)

// GET ALL
router.get("/", getAllNotes)

// GET ONE
router.get("/:id", getOneNote)

module.exports = router;