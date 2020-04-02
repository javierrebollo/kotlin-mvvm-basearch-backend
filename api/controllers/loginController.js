'use strict';

exports.login = function(req, res) {
  if (USER_USER == req.body.user && USER_PASSWORD == req.body.password) {
    res.status(200);
    res.json({'token':USER_TOKEN});

  }else{
    res.status(401);
    res.json({'error':'invalid user and password'});
  }
};
