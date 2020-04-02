'use strict';

exports.getUsers = function () {
    var fs = require('fs');
    var path = require('path');

    var jsonPath = path.join(__dirname, '.', 'userList.json');
    var userList = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    return userList;
};
