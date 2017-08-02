//controllers sort code by topic
const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const session = require('express-session');
const models = require('../models');
const parseurl = require('parseurl');



module.exports = {
  renderWelcome: function(req, res){
    res.render('welcome', {});
  }

  , signupWelcome: function(req, res){
    models.User.create({
      first_name: req.body.first_name
      ,  last_name: req.body.last_name
      ,  username: req.body.username
      ,  password: req.body.password
      //this is storing the information so every page knows if you're signed in
    }).then(function(newUser){
      req.session.userId = newUser.id;
    });
    res.redirect('/');
  }
  , signinWelcome: function(req, res){
    //this takes the username input from the mustache page
    var signin_username = req.body.username;
    var signin_password = req.body.password;
    //user validation

  //User is referencing the table
    models.User.findOne(
      {where:
        {username: signin_username}
      }
    ).then(function(user){
      //tells the session to create a new property called username because the session is an object
      //set the property = to the username they are providing as long as it validates
      req.session.username = user.username;
      req.session.userId = user.id;
      // console.log(req.session.username);

      res.redirect('/gab');
    });

  }
};
