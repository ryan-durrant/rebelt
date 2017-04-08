var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var path = require('path');
var cookieParser = require('cookie-parser');

var app = express();


//------------IMAGE HOSTING SERVICE--------------
var cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'darrwzc2q',
  api_key: '145238182128451',
  api_secret: 'afnC-9bW_lscMDfFQU-55tv8yzs'
});

//-------------------DATABASE-----------------------
var connectionString = "postgres://ryandurrant@localhost/rebelt";
var massiveInstance = massive.connectSync({connectionString : connectionString});

module.exports = app;
var endpoint = require('./public/js/server_endpoints.js');

app.use(bodyParser.json());
app.use(cors());

app.set('db', massiveInstance);
//massive looks for a folder named db where it looks for the sql queries
var db = app.get('db');

app.get('/api/products', endpoint.GetProducts);
app.get('/api/products/men', endpoint.GetMens);
app.get('/api/products/women', endpoint.GetWomens);
app.get('/api/products/kids', endpoint.GetKids);
app.get('/api/products/:id', endpoint.GetProduct);
app.get('/api/orders', endpoint.GetOrders);
app.post('/api/customer', endpoint.Create);
app.post('/api/neworder', endpoint.NewOrder);
app.put('/api/customer/email/:customerId', endpoint.UpdateEmail);


//---------------OAUTH WITH FACEBOOK-----------------
app.use(session({secret: '1234qwerasdfzxcvvcxzfdsarewq4321'}));
app.use(passport.initialize());
app.use(passport.session());

      //------REQ.USER AND COOKIES-------
app.use(cookieParser());
//this is middleware to verify if the client sent a cookie
//function runs when something is on req.user ie after someone logs in and is authenticated with Facebook.
app.use(function(req, res, next){
  var cookie = req.cookies;
  console.log(req.user);
    if(req.user){
      //if req.user is there, node will put the object in a cookie
      res.cookie('loggedInUser', JSON.stringify(req.user));
      //I can access the cookies with $cookie in the app.js and controller of whatever page I'm on.
    }
    next();
});

//OAUTH CONTINUES

passport.use(new FacebookStrategy({
  clientID: '1845382442381687',
  clientSecret: '2d93d41848e33b4520250adb8e366196',
  callbackURL: 'http://localhost:3003/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
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

// app.get('/', function(req, res){
//   //console.log(req.user);
//   res.json(req.user);
//   // res.send(req.user.displayName);
// });
//---------------END OAUTH WITH FACEBOOK-----------------

app.use(express.static(path.resolve(__dirname, 'public')));
//express.static looks for the root folder and then finds the index.html

app.listen(3003, function() {
  console.log('listening on 3003');
});
