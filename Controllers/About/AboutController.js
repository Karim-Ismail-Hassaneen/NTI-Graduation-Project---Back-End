const About = require("../../Models/About/About");

const getAboutData = async (req, res) => {
  const getAboutData = await About.find();
  res.status(201).json(getAboutData);
};

const createAboutData = async (req, res) => {
  try {
    const { pageTitle, pageSubTitle, title, subTitle, desc } = req.body;
    const image = req.file ? req.file.filename : "";
    const newAbout = new About({
      pageTitle,
      pageSubTitle,
      title,
      subTitle,
      desc,
      image,
    });
    await newAbout.save();
    res.status(201).json(newAbout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAboutData = async (req, res) => {
  const { id } = req.params;
  const deleteOneAboutData = await About.findByIdAndDelete(id);
  res.status(201).json(deleteOneAboutData);
};

const updateAboutData = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  if (req.file && req.file.filename) {
    updates.image = req.file.filename;
  }
  try {
    const updateAboutData = await About.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if (!updateAboutData) {
      return res.status(404).send({ error: "Service not found" });
    }
    res.send(updateAboutData);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getAboutData,
  createAboutData,
  deleteAboutData,
  updateAboutData,
};
