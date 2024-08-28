const express = require("express");
const router = express.Router();
const upload = require("../../Middlewares/multerConfig");
const {
  getAboutData,
  createAboutData,
  deleteAboutData,
  updateAboutData,
} = require("../../Controllers/About/AboutController");


// create About Main Data
router.post("/", upload.single("image"), createAboutData);
// Get The About Data
router.get("/", getAboutData);
// Delete About Data [Only One]
router.delete("/:id", deleteAboutData);
// Update The About Data
router.patch("/:id", upload.single("image"), updateAboutData);

module.exports = router;
