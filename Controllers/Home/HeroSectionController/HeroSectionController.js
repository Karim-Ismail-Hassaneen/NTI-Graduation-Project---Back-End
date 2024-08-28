const HeroSection = require("../../../Models/Home/HeroSection/HeroSection");

const getHeroSectionData = async (req, res) => {
    const getHeroSectionData = await HeroSection.find();
    res.status(201).json(getHeroSectionData);
  }

const createHeroSectionData = async (req, res) => {
    try {
      const { title, subTitle } = req.body;
      const image = req.file ? req.file.filename : "";
      const newHeroSection = new HeroSection({
        title,
        subTitle,
        image,
      });
      await newHeroSection.save();
      res.status(201).json(newHeroSection);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

const deleteHeroSectionData = async (req, res) => {
    const { id } = req.params;
    const deleteOneHeroSectionData = await HeroSection.findByIdAndDelete(id);
    res.status(201).json(deleteOneHeroSectionData);
  }

const updateHeroSectionData = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    if (req.file && req.file.filename) {
      updates.image = req.file.filename;
    }
    try {
      const updateHeroSectionData = await HeroSection.findByIdAndUpdate(
        id,
        updates,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!updateHeroSectionData) {
        return res.status(404).send({ error: "Service not found" });
      }
      res.send(updateHeroSectionData);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

module.exports = {
  getHeroSectionData,
  createHeroSectionData,
  deleteHeroSectionData,
  updateHeroSectionData,
};