const mongoose = require('mongoose');
const { Schema } = mongoose;

const HeroSectionSchema = new Schema({
    title: String,
    subTitle: String,
    image: String
})

const HeroSection = mongoose.model('HeroSection', HeroSectionSchema)

module.exports = HeroSection;