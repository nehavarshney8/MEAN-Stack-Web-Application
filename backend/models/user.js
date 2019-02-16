const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//schema of the collection(user)
//if collection is not there, create a collection in mongoDb with the name : user
//command: use 'name of db'
//db.createCollection('user')
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String

});
module.exports = mongoose.model('users', userSchema);