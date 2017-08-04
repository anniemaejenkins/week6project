const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const session = require('express-session');
const models = require('../models');
const parseurl = require('parseurl');

module.exports = {
  createLike: function(req, res){
    models.like.create({user_id: req.session.userId, gab_id: req.body.gab.id}).then(results =>{
      console.log("like", results);
    });
  }
};
