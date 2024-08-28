const express = require("express");
const router = express.Router();
const upload = require("../../Middlewares/multerConfig");
const {
  getPortfolioData,
  createPortfolioData,
  deletePortfolioData,
  updatePortfolioData,
} = require("../../Controllers/Portfolio/PortfolioController");

// create Portfolio Main Data
router.post("/", upload.single("image"), createPortfolioData);
// Get The Portfolio Data
router.get("/", getPortfolioData);
// Delete Portfolio Data [Only One]
router.delete("/:id", deletePortfolioData);
// Update The Portfolio Data
router.patch("/:id", upload.single("image"), updatePortfolioData);

module.exports = router;
