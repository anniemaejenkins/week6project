const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const session = require('express-session');
const models = require('../models');
const parseurl = require('parseurl');


module.exports = {
  renderDetails: function(req, res){
    let context = {}
    models.Gab.findOne({
      include: [{
        model: models.like,
        as: 'likes'
      }]
    }).then(results=>{
      // console.log("results",results);
     context.models = results

      res.render('detail', context);
    });
}
};
