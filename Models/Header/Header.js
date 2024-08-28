const mongoose = require("mongoose");
const { Schema } = mongoose;

const HeaderSchema = new Schema({
  logo: String,
  logoImage: String,
  navbar1: String,
  navbar2: String,
  navbar3: String,
  navbar4: String,
  navbar5: String,
  login: String,
  dashboard: String
});

const Header = mongoose.model("Header", HeaderSchema);

module.exports = Header;
