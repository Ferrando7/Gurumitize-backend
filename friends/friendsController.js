// importing friends model
var friends = require('./friendsSchema');
exports.postfriends = function(req, res) {
    var friends = new friends(req.body);
    //do not allow user to fake identity. The user who created the friends must be the same user that is logged in
    if (!req.user.equals(friends.users[0])) {
        res.sendStatus(401);
    }
    friends.save(function(err, e) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).json(e);
    });
};
// Create endpoint /api/friendss for GET
exports.getfriendss = function(req, res) {
    friends.find(function(err, friendss) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(friendss);
    });
};
// Create endpoint /api/friendss/:friends_id for GET
exports.getfriends = function(req, res) {
    // Use the friends model to find a specific friends
    friends.findById(req.params.friends_id, function(err, friends) {
        if (err) {
            res.status(500).send(err)
            return;
        };

        res.json(friends);
    });
};
// Create endpoint /api/friendss/:friends_id for PUT
exports.putfriends = function(req, res) {
    // Use the friends model to find a specific friends and update it
    friends.findByIdAndUpdate(
        req.params.friends_id,
        req.body,
        {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        }, function (err, friends) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(friends);
        });
};
// Create endpoint /api/friendss/:friends_id for DELETE
exports.deletefriends = function(req, res) {
    // Use the friends model to find a specific friends and remove it
    friends.findById(req.params.friends_id, function(err, e) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        e.remove();
        res.sendStatus(200);
    });
};
