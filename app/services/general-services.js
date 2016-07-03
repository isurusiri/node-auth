var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
//var User   = require('./app/models/user.js'); // get our mongoose model


var setUpUser = function (req, res) {
  // create a sample user
  var isuru = new User({ 
    name: 'isuru', 
    password: 'password',
    admin: true 
  });

  // save the sample user
  isuru.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
}

module.exports = setUpUser;