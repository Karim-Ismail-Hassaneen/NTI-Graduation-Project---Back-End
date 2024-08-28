const mongoose = require('mongoose');
const { Schema } = mongoose;


const ServicesSectionSchema = new Schema({
    pageTitle: String,
    pageSubTitle:String,
    title: String,
    desc: String,
    image: String
})
const ServicesSection = mongoose.model('ServicesSection', ServicesSectionSchema);
module.exports = ServicesSection