const mongoose = require('mongoose');
const { Schema } = mongoose;


const PortfolioSchema = new Schema({
    pageTitle: String,
    pageSubTitle:String,
    title: String,
    desc: String,
    image: String
})
const Portfolio = mongoose.model('Portfolio', PortfolioSchema);
module.exports = Portfolio