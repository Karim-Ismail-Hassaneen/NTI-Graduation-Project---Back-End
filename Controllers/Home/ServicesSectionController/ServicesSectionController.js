const ServicesSection = require("../../../Models/Home/ServicesSection/ServicesSection");

const getServicesSectionData = async (req, res) => {
  const getAllServicesSection = await ServicesSection.find();
  res.send(getAllServicesSection);
};

const createServicesSectionData = async (req, res) => {
  try {
    const { pageTitle, pageSubTitle, title, desc } = req.body;
    const image = req.file ? req.file.filename : "";
    const newServicesSection = new ServicesSection({
      pageTitle,
      pageSubTitle,
      title,
      desc,
      image,
    });
    await newServicesSection.save();
    res.status(201).json(newServicesSection);
  } catch (err) {
    res.status(500).json({ error: "Failed to save the product." });
  }
};

const deleteServicesSectionData = async (req, res) => {
  const { id } = req.params;
  const deleteServicesSection = await ServicesSection.findByIdAndDelete(id);
  res.send(deleteServicesSection);
};

const updateServicesSectionData = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  if (req.file && req.file.filename) {
    updates.image = req.file.filename;
  }
  try {
    const updateServicesSection = await ServicesSection.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );
    if (!updateServicesSection) {
      return res.status(404).send({ error: "service not found" });
    }
    res.send(updateServicesSection);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getServicesSectionData,
  createServicesSectionData,
  deleteServicesSectionData,
  updateServicesSectionData,
};
