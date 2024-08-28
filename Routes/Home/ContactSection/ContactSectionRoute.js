const express = require("express");
const router = express.Router();
const upload = require("../../../Middlewares/multerConfig");
const {
  getContactSectionData,
  createContactSectionData,
  deleteContactSectionData,
  updateContactSectionData,
} = require("../../../Controllers/Home/ContactSectionController/ContactSectionController");

router.post("/", upload.single("image"), createContactSectionData);

router.get("/", getContactSectionData);

router.delete("/:id", deleteContactSectionData);

router.patch("/:id", upload.single("image"), updateContactSectionData);

module.exports = router;
