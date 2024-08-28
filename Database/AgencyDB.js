const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Agency')
.then(() => {console.log(`connected to AgencyDB`)})
.catch((err) => {
    console.log(err);
})