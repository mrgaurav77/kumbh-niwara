const mongoose = require('mongoose');
const imageSchema = mongoose.Schema({
    path: {
        type: String,
        required: true},
        filename: {
            type: String,
            required: true
        }
});
ImageModule = mongoose.model('Images', imageSchema);
module.exports = {ImageModule};