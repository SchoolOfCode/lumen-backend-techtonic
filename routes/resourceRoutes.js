import { Router } from "express";
const router = Router(); //create a new router object

// Functions imported from models
import { getResources, addResource } from "../models/resources.js";

// GET request router
router.get("/", async function (req, res) {
  const result = await getResources();
  res.status(200).json({ success: true, payload: result });
});

// POST request router
router.post("/", async function (req, res) {
  const resource = req.body;
  const result = await addResource(resource);
  res.status(200).json({ success: true, payload: result });
});

export default router;
