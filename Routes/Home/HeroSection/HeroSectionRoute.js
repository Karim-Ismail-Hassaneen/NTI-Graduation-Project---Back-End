const express = require("express");
const router = express.Router();
const upload = require("../../../Middlewares/multerConfig");
const {
  getHeroSectionData,
  createHeroSectionData,
  deleteHeroSectionData,
  updateHeroSectionData
} = require("../../../Controllers/Home/HeroSectionController/HeroSectionController")


router.post("/", upload.single("image"), createHeroSectionData);

router.get("/", getHeroSectionData);

router.delete("/:id", deleteHeroSectionData);

router.patch("/:id", upload.single("image"), updateHeroSectionData);

module.exports = router;
