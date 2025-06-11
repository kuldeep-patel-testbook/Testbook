const express = require("express");
const Note = require("../models/Note");
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Get notes for a patient
router.get("/:patientId", verifyToken, async (req, res) => {
  try {
    const notes = await Note.find({ patientId: req.params.patientId });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Add a note for a patient
router.post("/:patientId", verifyToken, async (req, res) => {
  const { content } = req.body;
  const { patientId } = req.params;

  try {
    const note = new Note({ patientId, content });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});


module.exports = router;
