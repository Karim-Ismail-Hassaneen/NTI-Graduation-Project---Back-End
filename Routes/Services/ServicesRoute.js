const express = require("express");
const router = express.Router();
const upload = require("../../Middlewares/multerConfig");

const {
  getServicesData,
  createServicesData,
  deleteServicesData,
  updateServicesData,
} = require("../../Controllers/Services/ServicesController");

router.post("/", upload.single("image"), createServicesData);
router.patch("/:id", upload.single("image"), updateServicesData);
router.get("/", getServicesData);
router.delete("/:id", deleteServicesData);

module.exports = router;
