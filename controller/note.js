const Note = require("../model/Note.js")

// CREATE NOTE
const createNote = async (req, res, next) => {
    const newNote = new Note(req.body)
    try {
        const savedNote = await newNote.save()
        res.status(200).json(savedNote)
    } catch (error) {
        next(error)
    }
}

// UPDATE NOTE
const updateNote = async (req, res, next) => {
    try {
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedNote)
    } catch (error) {
        next(error)
    }
}

// DELETE NOTE
const deleteNote = async (req, res, next) => {
    try {
        await Note.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted")
        
    } catch (error) {
        next(error)
    }
}


// GET ALL NOTES
const getAllNotes = async (req, res, next) => {
    try {
        const allNotes = await Note.find()
        res.status(200).json(allNotes)
    } catch (error) {
        next(error)
    }
}


// GET ONE NOTE
const getOneNote = async (req, res, next) => {
    try {
        const oneNote = await Note.findById(req.params.id)
        res.status(200).json(oneNote)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createNote,
    updateNote,
    deleteNote,
    getAllNotes,
    getOneNote
}
