const express = require("express");
const router = express.Router();

const { getResources, addResource } = require("../models/resources.js"); /////////

router.get("/", async function (req, res) {
  const result = await getResources();
  res.status(200).json({ success: true, payload: result });
});
//////////down
router.post("/", async function (req, res) {
  const resource = req.body;
  const result = await addResource(resource);
  res.status(200).json({ success: true, payload: result });
});
////////up
//////// another post for description
module.exports = router;
