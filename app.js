const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const session = require('express-session');
const models = require('./models');
const parseurl = require('parseurl');

//require controllers to link the code together
const welcomeController = require('./controllers/welcome-user.js');
const gabController = require('./controllers/gabs-user.js');
const indexController = require('./controllers/index-user.js');
const likesController = require('./controllers/likes-user.js');

const app = express();

app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator({
  //makes sure the password and the confirm password is the same
  additionalValidators: 'equals'
}));

//our middleware
app.use(session({
  secret: 'Covfefe',
  resave: false,
  saveUninitialized: false
}));

var backToLogin = function(req, res, next){
  //pathname is the last part of the url
  var pathname = parseurl(req).pathname;
  // if there is no session username and the pathname isn't welcome then redirect back to welcome page
  if(!req.session.username && pathname != '/welcome'){
    res.redirect('/welcome');
  } else {
    next();
  }
};

//app.gets

app.get('/', backToLogin, function(req, res){
  res.render('index', {});
});

//this is calling the welcome-user.js page
app.get('/welcome', welcomeController.renderWelcome);

app.get('/gab', backToLogin, gabController.renderGab);

app.get('/like', backToLogin, function(req, res){
  res.render('likes', {});
});

//app.posts

//naming it signupWelcome to keep track of what it's doing and its location
app.post('/signup', welcomeController.signupWelcome);

app.post('/signin', welcomeController.signinWelcome);

app.post('/gab', gabController.createGab);

app.post('/delete/:id', gabController.deleteGab);

app.post('/logout', gabController.logOut);

app.post('/like', likesController.createLike);





app.listen(3000, function(){
  console.log("Successfully initiated express app!");
});
