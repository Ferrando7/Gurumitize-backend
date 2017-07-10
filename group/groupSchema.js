// Load required packages
var mongoose = require('mongoose');

// Define our group schema
var Group   = new mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    //public: Boolean,
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

// Export the Mongoose model
module.exports = mongoose.model('Group', Group);
