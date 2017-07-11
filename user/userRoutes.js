module.exports = userRoutes;

function userRoutes(passport) {

    var userController = require('./userController');
    var router = require('express').Router();


    router.post('/login', userController.login);
    router.post('/signup', userController.signup);
    router.post('/unregister', passport.authenticate('jwt', {session: false}), userController.unregister);
    router.get('/:user_id', passport.authenticate('jwt', {session: false}), userController.getUser);
    router.put('/:user_id', passport.authenticate('jwt', {session: false}), userController.putUser);

    return router;

}
