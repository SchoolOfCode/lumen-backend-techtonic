const express = require("express");
const router = express.Router();

const { addNote } = require("../models/resources.js")/////////

// router.get("/", async function (req, res) {
//     const result = await getResourcesAndNotes();
//     res.json({ success: true, payload: result });
//   });
//////////down
  router.post("/", async function (req, res) {
    const note = req.body;
    const result = await addNote(note);
    res.json({ success: true, payload: result });
  });
////////up
//////// another post for description
  module.exports = router;