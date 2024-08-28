const ContactSection = require("../../../Models/Home/ContactSection/ContactSection");

const getContactSectionData = async (req, res) => {
  const getContactSectionData = await ContactSection.find();
  res.status(201).json(getContactSectionData);
};

const createContactSectionData = async (req, res) => {
  try {
    const { pageTitle, pageSubTitle } = req.body;
    const image = req.file ? req.file.filename : "";
    const newContactSection = new ContactSection({
      pageTitle,
      pageSubTitle,
      image,
    });
    await newContactSection.save();
    res.status(201).json(newContactSection);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteContactSectionData = async (req, res) => {
  const { id } = req.params;
  const deleteOneContactSectionData = await ContactSection.findByIdAndDelete(
    id
  );
  res.status(201).json(deleteOneContactSectionData);
};

const updateContactSectionData = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  if (req.file && req.file.filename) {
    updates.image = req.file.filename;
  }
  try {
    const updateContactSectionData = await ContactSection.findByIdAndUpdate(
      id,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updateContactSectionData) {
      return res.status(404).send({ error: "Service not found" });
    }
    res.send(updateContactSectionData);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getContactSectionData,
  createContactSectionData,
  deleteContactSectionData,
  updateContactSectionData,
};
