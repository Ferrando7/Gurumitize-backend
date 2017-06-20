var Config = {};
Config.db = {};
Config.app={};
Config.auth = {};

Config.db.host = 'localhost:27017';
//Config.db.name = 'moviedb';
Config.db.name = 'gurudb';

// Use environment defined port or 3000
Config.app.port = process.env.PORT || 3000;

Config.auth.jwtSecret = "very secret secret";

module.exports = Config;