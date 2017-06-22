// Load required packages
var mongoose = require('mongoose');

// Define our group schema
var Group   = new mongoose.Schema({
    title: String,
    year: String,
    description: String,
    //public: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Group', Group);

