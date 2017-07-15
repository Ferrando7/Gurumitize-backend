module.exports = friendsRoutes;


function friendsRoutes(passport) {

    var friendsController = require('./friendsController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['OPTIONS']}));

    router.route('/')
        .post(friendsController.postfriends)
        .get(friendsController.getfriendss);

    router.route('/:friends_id')
        .get(friendsController.getfriends)
        .put(friendsController.putfriends)
        .delete(friendsController.deletefriends);

    return router;
}
