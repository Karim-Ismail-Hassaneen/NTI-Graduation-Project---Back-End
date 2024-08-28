const Portfolio = require('../../Models/Portfolio/Portfolio')

const getPortfolioData = async (req, res) => {
    const getPortfolioData = await Portfolio.find();
    res.status(201).json(getPortfolioData)
}

const createPortfolioData = async (req, res) => {
    try {
        const { pageTitle, pageSubTitle, title, subTitle, desc } = req.body;
        const image = req.file ? req.file.filename : '';
        const newPortfolio = new Portfolio({
            pageTitle,
            pageSubTitle,
            title,
            subTitle,
            desc,
            image
        });
        await newPortfolio.save();
        res.status(201).json(newPortfolio);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deletePortfolioData = async (req, res) => {
    const { id } = req.params;
    const deleteOnePortfolioData = await Portfolio.findByIdAndDelete(id);
    res.status(201).json(deleteOnePortfolioData)
}

const updatePortfolioData = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    if (req.file && req.file.filename) {
        updates.image = req.file.filename;
    }
    try {
        const updatePortfolioData = await Portfolio.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!updatePortfolioData) {
            return res.status(404).send({ error: 'Portfolio Data Not Found' });
        }
        res.send(updatePortfolioData);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}


module.exports = { getPortfolioData, createPortfolioData, deletePortfolioData, updatePortfolioData }