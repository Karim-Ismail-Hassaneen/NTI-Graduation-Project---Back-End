const mongoose = require('mongoose');
const { Schema } = mongoose;


const PortfolioSectionSchema = new Schema({
    pageTitle: String,
    pageSubTitle:String,
    title: String,
    desc: String,
    image: String
})
const PortfolioSection = mongoose.model('PortfolioSection', PortfolioSectionSchema);
module.exports = PortfolioSection