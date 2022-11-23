const express = require("express");
const router = express.Router();

const { getResourcesAndNotes, addResource} = require("../models/resources.js")/////////

router.get("/", async function (req, res) {
    const result = await getResourcesAndNotes();
    res.json({ success: true, payload: result });
  });
//////////down
  router.post("/", async function (req, res) {
    const resource = req.body;
    console.log(data)
    const result = await addResource(resource);
    res.json({ success: true, payload: result });
  });
////////up
//////// another post for description
  module.exports = router;