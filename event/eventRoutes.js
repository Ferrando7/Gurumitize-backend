module.exports = eventRoutes;


function eventRoutes(passport) {

    var eventController = require('./eventController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route('/')
        .post(eventController.postEvent)
        .get(eventController.getEvents);

    router.route('/:event_id')
        .get(eventController.getEvent)
        .put(eventController.putEvent)
        .delete(eventController.deleteEvent);

    return router;
}
