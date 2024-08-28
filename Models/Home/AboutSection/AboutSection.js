const mongoose = require('mongoose');
const { Schema } = mongoose;


const AboutSectionSchema =  new Schema({
    pageTitle: String,
    pageSubTitle:String,
    title: String,
    subTitle: String,
    desc: String,
    image: String
})

const AboutSection =  mongoose.model('AboutSection', AboutSectionSchema);
module.exports = AboutSection;