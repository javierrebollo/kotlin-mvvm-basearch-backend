'use strict';

var userController = require('../controllers/userController');

module.exports = function(app) {
  app.route('/getUsers')
    .get(userController.getUserList);
};
