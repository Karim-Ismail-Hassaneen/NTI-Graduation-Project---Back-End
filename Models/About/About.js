const mongoose = require('mongoose');
const { Schema } = mongoose;


const AboutSchema =  new Schema({
    pageTitle: String,
    pageSubTitle:String,
    title: String,
    subTitle: String,
    desc: String,
    image: String
})

const About =  mongoose.model('About', AboutSchema);
module.exports = About;