var mongoose = require('mongoose');

var FriendsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    friendname:{
        type: String,
        required: true,
        unique: true,

    },
 type:{
     type: Boolean,
     required: true,


 },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});



var Friends = mongoose.model('Friends', FriendsSchema);

module.exports = Friends;

