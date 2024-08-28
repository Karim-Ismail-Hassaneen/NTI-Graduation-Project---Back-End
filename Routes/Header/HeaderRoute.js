const express = require("express");
const router = express.Router();
const upload = require("../../Middlewares/multerConfig");
const {
  getHeaderData,
  createHeaderData,
  deleteHeaderData,
  updateHeaderData,
} = require("../../Controllers/Header/HeaderController");

// create Header Main Data
router.post("/", upload.single("image"), createHeaderData);
// Get The Header Data
router.get("/", getHeaderData);
// Delete Header Data [Only One]
router.delete("/:id", deleteHeaderData);

// Update The Header Data
router.patch("/:id", upload.single("image"), updateHeaderData);

module.exports = router;
