var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var app = express();

var cloudinary = require('cloudinary'); //image hosting service
cloudinary.config({
  cloud_name: 'darrwzc2q',
  api_key: '145238182128451',
  api_secret: 'afnC-9bW_lscMDfFQU-55tv8yzs'
});

//-------------------DATABASE-----------------------
var connectionString = "postgres://ryandurrant@localhost/rebelt";
var massiveInstance = massive.connectSync({connectionString : connectionString});

module.exports = app;
var controller = require('./js/controller.js');

app.use(bodyParser.json());
app.use(cors());

app.set('db', massiveInstance);
//massive looks for a folder named db where it looks for the sql queries
var db = app.get('db');

app.get('/api/products/men', controller.GetMens);
app.get('/api/products/women', controller.GetWomens);
app.get('/api/products/kids', controller.GetKids);
app.get('/api/orders', controller.GetOrders);
app.post('/api/customer', controller.Create);
app.post('/api/neworder', controller.NewOrder);
app.put('/api/customer/email/:customerId', controller.UpdateEmail);


//---------------OAUTH WITH FACEBOOK-----------------
app.use(session({secret: '1234qwerasdfzxcvvcxzfdsarewq4321'}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
  clientID: '1845382442381687',
  clientSecret: '2d93d41848e33b4520250adb8e366196',
  callbackURL: 'http://localhost:3003/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/me',
  failureRedirect: '/auth/facebook'
}), function(req, res) {
  console.log(req.session);
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/me', function(req, res){
  res.send(req.user);
});
//---------------END OAUTH WITH FACEBOOK-----------------

app.listen(3003, function() {
  console.log('listening on 3003');
});
