const express = require("express");
const router = express.Router();
const upload = require("../../Middlewares/multerConfig");
const {
  getContactData,
  createContactData,
  deleteContactData,
  updateContactData,
} = require("../../Controllers/Contact/ContactController");

// create Contact Main Data
router.post("/", upload.single("image"), createContactData);
// Get The Contact Data
router.get("/", getContactData);
// Delete Contact Data [Only One]
router.delete("/:id", deleteContactData);

// Update The Contact Data
router.patch("/:id", upload.single("image"), updateContactData);

module.exports = router;
