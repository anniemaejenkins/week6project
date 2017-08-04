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
      where: {
        id: req.params.id
      },
      include: [{
        model: models.like,
        as: 'likes',
        include: [{
          model: models.User,
          as: 'user'
        }]
      }]
    }).then(results=>{
      // console.log("results",results);
     context.models = results

      res.render('detail', context);
      console.log(context);
    });
}
};
