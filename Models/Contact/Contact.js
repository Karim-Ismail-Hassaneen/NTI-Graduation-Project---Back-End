const mongoose = require('mongoose');
const { Schema } = mongoose;


const ContactSchema =  new Schema({
    pageTitle: String,
    pageSubTitle:String,
    desc: String,
    image: String
})

const Contact =  mongoose.model('Contact', ContactSchema);
module.exports = Contact;