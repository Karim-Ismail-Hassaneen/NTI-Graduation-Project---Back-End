const mongoose = require('mongoose');
const { Schema } = mongoose;


const ServicesSchema = new Schema({
    pageTitle: String,
    pageSubTitle:String,
    title: String,
    desc: String,
    image: String
})
const Services = mongoose.model('Service', ServicesSchema);
module.exports = Services