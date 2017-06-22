module.exports = groupRoutes;


function groupRoutes(passport) {

    var groupController = require('./groupController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route('/')
        .post(groupController.postGroup)
        .get(groupController.getGroup);

    router.route('/:group_id')
        .get(groupController.getGroup)
        .put(groupController.putGroup)
        .delete(groupController.deleteGroup);

    return router;
}
