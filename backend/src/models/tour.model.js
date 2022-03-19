const mongoose = require('mongoose')
const Schema = mongoose.Schema
const tourSchema = new Schema({
    date : String,
    city : String,
    state: String, 
    location: String
    },
    // {
    //     timestamps: true
    // }
)
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour