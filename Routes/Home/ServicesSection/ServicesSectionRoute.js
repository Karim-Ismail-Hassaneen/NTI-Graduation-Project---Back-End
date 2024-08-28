const express = require("express");
const router = express.Router();
const upload = require("../../../Middlewares/multerConfig");
const {
  getServicesSectionData,
  createServicesSectionData,
  deleteServicesSectionData,
  updateServicesSectionData,
} = require("../../../Controllers/Home/ServicesSectionController/ServicesSectionController");

router.post("/", upload.single("image"), createServicesSectionData);

router.patch("/:id", upload.single("image"), updateServicesSectionData);

router.get("/", getServicesSectionData);

router.delete("/:id", deleteServicesSectionData);

module.exports = router;
