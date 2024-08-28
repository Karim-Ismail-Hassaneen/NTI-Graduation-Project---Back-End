const Header = require("../../Models/Header/Header");

const getHeaderData = async (req, res) => {
  const getHeaderData = await Header.find();
  res.status(201).json(getHeaderData);
};

const createHeaderData = async (req, res) => {
  try {
    const {
      logo,
      navbar1,
      navbar2,
      navbar3,
      navbar4,
      navbar5,
      login,
      dashboard,
    } = req.body;
    const image = req.file ? req.file.filename : "";
    const newHeader = new Header({
      logo,
      navbar1,
      navbar2,
      navbar3,
      navbar4,
      navbar5,
      login,
      dashboard,
      image,
    });
    await newHeader.save();
    res.status(201).json(newHeader);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteHeaderData = async (req, res) => {
  const { id } = req.params;
  const deleteOneHeaderData = await Header.findByIdAndDelete(id);
  res.status(201).json(deleteOneHeaderData);
};

const updateHeaderData = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  if (req.file && req.file.filename) {
    updates.image = req.file.filename;
  }
  try {
    const updateHeaderData = await Header.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if (!updateHeaderData) {
      return res.status(404).send({ error: "Service not found" });
    }
    res.send(updateHeaderData);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getHeaderData,
  createHeaderData,
  deleteHeaderData,
  updateHeaderData,
};
