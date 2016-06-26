var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// mongoose model for user and expose it to outside of the module
module.exports = mongoose.model('User', new Schema({ 
    name: String, 
    password: String, 
    admin: Boolean 
}, {collection: 'User'}));