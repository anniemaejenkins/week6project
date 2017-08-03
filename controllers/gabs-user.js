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
     let context = {}
     models.Gab.findAll({}).then(results=>{
       console.log("results",results);
      context.models = results

       res.render('Gab', context);
     });

   },
  //  create does an instance, which is a row on the table
  // in mongoose the row is called a document, in the table it's called a collection
    createGab: function(req, res){
      models.Gab.create({message: req.body.gab, user_id: req.session.userId}).then(results =>{
        console.log("stuff", results);
        res.redirect("/gab");
      });
    },
    deleteGab: function(req, res){
      models.Gab.destroy({where: {id: req.params.id}}).then(results =>{
        res.redirect("/gab");
      });
    },
    logOut: function(req, res){
      req.session.destroy();
      res.redirect("/welcome");
    }
};
