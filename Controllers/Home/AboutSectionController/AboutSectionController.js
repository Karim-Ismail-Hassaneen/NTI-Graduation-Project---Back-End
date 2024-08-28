const AboutSection = require("../../../Models/Home/AboutSection/AboutSection");

const getAboutSectionData = async (req, res) => {
  const getAboutSectionData = await AboutSection.find();
  res.status(201).json(getAboutSectionData);
};

const createAboutSectionData = async (req, res) => {
  try {
    const { pageTitle, pageSubTitle, title, subTitle, desc } = req.body;
    const image = req.file ? req.file.filename : "";
    const newAboutSection = new AboutSection({
      pageTitle,
      pageSubTitle,
      title,
      subTitle,
      desc,
      image,
    });
    await newAboutSection.save();
    res.status(201).json(newAboutSection);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAboutSectionData = async (req, res) => {
  const { id } = req.params;
  const deleteOneAboutSectionData = await AboutSection.findByIdAndDelete(id);
  res.status(201).json(deleteOneAboutSectionData);
};

const updateAboutSectionData = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  if (req.file && req.file.filename) {
    updates.image = req.file.filename;
  }
  try {
    const updateAboutSectionData = await AboutSection.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );
    if (!updateAboutSectionData) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.send(updateAboutSectionData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAboutSectionData,
  createAboutSectionData,
  deleteAboutSectionData,
  updateAboutSectionData,
};
