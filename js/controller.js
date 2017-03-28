// app.controller('controller', function($scope){
// console.log("Luis loves iffies");
// });

var app = require('./../index');

module.exports = {
  Create: function(req, res, next){
    var db = app.get('db');

    db.create_customer([req.query.f_name, req.query.l_name, req.query.email, req.query.password], function(err, customers){
      console.log(err, customers);
      res.json("Successfully added a new customer");
    });
  },
  UpdateEmail: function(req, res, next){
    var db = app.get('db');

    db.update_email([req.params.customer_id, req.query.email], function(err, customers){
      console.log(err, customers);
      res.json("Succesfully updated the product at ID: " + req.params.customerId);
    });
  },
  NewOrder: function(req, res, next){
    var db = app.get('db');

    db.new_order([req.query.customer_id, req.query.date, req.query.total], function(err, order){
      console.log(err, order);
      res.json("Successfully added a new order");
    });
  }
};
