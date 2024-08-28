const mongoose = require('mongoose');
const { Schema } = mongoose;


const ContactSectionSchema =  new Schema({
    pageTitle: String,
    pageSubTitle: String,
    image: String
})

const ContactSection =  mongoose.model('ContactSection', ContactSectionSchema);
module.exports = ContactSection;