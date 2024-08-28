const Services = require("../../Models/Services/Services");

const getServicesData = async (req, res) => {
  const getAllServices = await Services.find();
  res.send(getAllServices);
};

const createServicesData = async (req, res) => {
  try {
    const { pageTitle, pageSubTitle, title, desc } = req.body;
    const image = req.file ? req.file.filename : "";
    const newServices = new Services({
      pageTitle,
      pageSubTitle,
      title,
      desc,
      image,
    });

    await newServices.save();

    res.status(201).json(newServices);
  } catch (err) {
    res.status(500).json({ error: "Failed to save the product." });
  }
};

const deleteServicesData = async (req, res) => {
  const { id } = req.params;
  const deleteServices = await Services.findByIdAndDelete(id);
  res.send(deleteServices);
};

const updateServicesData = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  if (req.file.filename) {
    updates.image = req.file.filename;
  }
  try {
    const updateServices = await Services.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if (!updateServices) {
      return res.status(404).send({ error: "service not found" });
    }
    res.send(updateServices);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getServicesData,
  createServicesData,
  deleteServicesData,
  updateServicesData,
};
