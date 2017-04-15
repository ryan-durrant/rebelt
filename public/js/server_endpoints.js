//This is a server side controller
var app = require('./../../index');
//I need to require the index.js file to Massive

module.exports = {
  CreateCustomer: function(req, res, next){
    var db = app.get('db');
    var newsletter = (req.body.newsletter ? 1: 0);
    //this is a turnary operator (an if/else that is an expression), if req.body.newsletter is true then it is 1 else it is 0

    // db.create_customer([req.body.f_name, req.body.l_name, req.body.email, req.body.password, newsletter], function(err, customer){
    //   console.log(err, customer);
    //   res.json(customer);
    // });

    var customer = {f_name: req.body.f_name, l_name: req.body.l_name, email: req.body.email, password: req.body.password, newsletter: newsletter};

    //massive insert is the same as the db.create_customer
    db.customers.insert(customer, function(err, response){

      res.status(201).json(response);
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
      //console.log(err, order);
      res.json("Successfully added a new order");
    });
  },

  GetProduct: function(req, res, next){
    var db = app.get('db');

    db.get_product(req.params.id, function(err, product){
      //console.log(err, product);
      res.json(product);
    });
  },

  GetProducts: function(req, res, next){
    var db = app.get('db');

    db.get_products(function(err, products){
      res.json(products);
    });
  },

  GetMens: function(req, res, next){
    var db = app.get('db');

    db.get_mens(function(err, products){
      //console.log(err, products);
      res.json(products);
    });
  },

  GetWomens: function(req, res, next){
    var db = app.get('db');

    db.get_womens(function(err, products){
      //console.log(err, products);
      res.json(products);
    });
  },

  GetKids: function(req, res, next){
    var db = app.get('db');

    db.get_kids(function(err, products){
      //console.log(err, products);
      res.json(products);
    });
  },

  GetOrders: function(req, res, next){
    var db = app.get('db');

    db.get_orders(function(err, orders){
      //console.log(err, orders);
      res.json(orders);
    });
  }

};
