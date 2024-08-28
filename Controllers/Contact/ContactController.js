const Contact = require("../../Models/Contact/Contact");

const getContactData = async (req, res) => {
    const getContactData = await Contact.find();
    res.status(201).json(getContactData);
  }

const createContactData = async (req, res) => {
    try {
      const { pageTitle, pageSubTitle, desc } = req.body;
      const image = req.file ? req.file.filename : "";
      const newContact = new Contact({
        pageTitle,
        pageSubTitle,
        desc,
        image,
      });
      await newContact.save();
      res.status(201).json(newContact);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

const deleteContactData = async (req, res) => {
    const { id } = req.params;
    const deleteOneContactData = await Contact.findByIdAndDelete(id);
    res.status(201).json(deleteOneContactData);
  }

const updateContactData = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    if (req.file && req.file.filename) {
      updates.image = req.file.filename;
    }
    try {
      const updateContactData = await Contact.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
      });
      if (!updateContactData) {
        return res.status(404).send({ error: "Service not found" });
      }
      res.send(updateContactData);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  module.exports = { getContactData, createContactData, deleteContactData, updateContactData }