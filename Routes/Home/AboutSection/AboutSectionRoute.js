const express = require("express");
const router = express.Router();
const upload = require("../../../Middlewares/multerConfig");
const {
  getAboutSectionData,
  createAboutSectionData,
  deleteAboutSectionData,
  updateAboutSectionData,
} = require("../../../Controllers/Home/AboutSectionController/AboutSectionController");

router.post("/", upload.single("image"), createAboutSectionData);

router.get("/", getAboutSectionData);

router.delete("/:id", deleteAboutSectionData);

router.patch("/:id", upload.single("image"), updateAboutSectionData);

module.exports = router;
