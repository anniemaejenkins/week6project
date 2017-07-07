const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const session = require('express-session');
const models = require('../models');
const parseurl = require('parseurl');

module.exports = {
   renderGab: function(req, res){
    res.render('gab', {});
}
};
