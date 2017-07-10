// importing Group model
var Group = require('./groupSchema');
exports.postGroup = function(req, res) {
    var group = new Group(req.body);
    //do not allow user to fake identity. The user who created the group must be the same user that is logged in
    if (!req.user.equals(group.users[0])) {
        res.sendStatus(401);
    }
    group.save(function(err, e) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).json(e);
    });
};
// Create endpoint /api/groups for GET
exports.getGroups = function(req, res) {
    Group.find(function(err, groups) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(groups);
    });
};
// Create endpoint /api/groups/:group_id for GET
exports.getGroup = function(req, res) {
    // Use the Group model to find a specific group
    Group.findById(req.params.group_id, function(err, group) {
        if (err) {
            res.status(500).send(err)
            return;
        };

        res.json(group);
    });
};
// Create endpoint /api/groups/:group_id for PUT
exports.putGroup = function(req, res) {
    // Use the Group model to find a specific Group and update it
    Group.findByIdAndUpdate(
        req.params.group_id,
        req.body,
        {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        }, function (err, group) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(group);
    });
};
// Create endpoint /api/groups/:group_id for DELETE
exports.deleteGroup = function(req, res) {
    // Use the group model to find a specific group and remove it
    Group.findById(req.params.group_id, function(err, e) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        e.remove();
        res.sendStatus(200);
    });
};
