const express = require('express');
const auth = express.Router();
var mongoose = require('mongoose');
const db = "mongodb://localhost:27017/travelapp";
const user = require('../models/user');
const jwt = require('jsonwebtoken');

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if (err) {
        console.log('Error connecting');
    }
});

auth.post('/login', function(req, res) {
    user.findOne({ email: req.body.email }, function(err, loginUser) {
        if (err) throw err;

        if (!loginUser) {
            res.send({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        } else {
            // Check if password matches
            if (loginUser.password == req.body.password) {
                // Create token if the password matched and no error was thrown
                console.log("Matched");
                sendToken(loginUser, res);
                // var token = jwt.sign(loginUser.id, '123');
                // res.json({ firstName: loginUser.firstName, token });
            } else {
                res.send({
                    success: false,
                    message: 'Authentication failed. Passwords did not match.'
                });
            }
        }
    });

    // if (!loginUser)
    //     sendAuthError(res);

    // if (user.password == req.body.password)
    //     sendToken(newUser, res);
    // else
    //     sendAuthError(res);
});

auth.post('/createUser', function(req, res) {
    let newUser = new user();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.save(function(err, user) {
        if (err) {
            console.log('Error connecting');
        }
    });

    sendToken(newUser, res);
});

function sendToken(user, res) {
    var token = jwt.sign(user.id, '123');
    res.json({ firstName: user.firstName, token });
}

function sendAuthError(res) {
    return res.json({ success: false, message: 'email or password incorrect' });
}



module.exports = auth;