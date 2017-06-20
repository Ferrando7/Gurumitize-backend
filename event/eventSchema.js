// Load required packages
var mongoose = require('mongoose');

// Define our event schema
var Event   = new mongoose.Schema({
    title: String,
    year: String,
    location: String,
    date: String,
    date2: String,
    time: String,
    time2: String,
    synopsis: String,
    //assistants: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Event', Event);

