var app = angular.module('app', ['ui.router', 'ngCookies'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state({
        name: 'home',
        url:'/',
        templateUrl: "./homepage/home.html"
      })
      .state({
        name: 'mens_belts',
        url:'/mens',
        templateUrl: "./products/mens_belts.html",
        controller: "productsCtrl"
      })
      .state({
        name: 'womens_belts',
        url: '/womens',
        templateUrl: "./products/womens_belts.html",
        controller: "productsCtrl"
      })
      .state({
        name: 'kids_belts',
        url: '/kids',
        templateUrl: "./products/kids_belts.html",
        controller: "productsCtrl"
      })
      .state({
        name: 'allProducts',
        url: '/products',
        templateUrl: "./products/all_products.html",
        controller: "productsCtrl"
      })
      .state({
        name: 'about',
        url: '/about',
        templateUrl: "./about_us/about_us.html"
      })
      .state({
        name: 'singleProduct',
        url: '/product_details/:id',
        templateUrl: "./products/single_product.html",
        controller: "singleProductCtrl"
      })
      .state({
        name: 'contactUs',
        url: '/contact',
        templateUrl: "./contact_us/contact_us.html",
        controller: "contactCtrl"
      })
      .state({
        name: 'shoppingCart',
        url: '/cart',
        templateUrl: "./shopping_cart/shopping_cart.html",
        controller: "cartCtrl"
      });

      //MUST DO!!! This sends your page to the home state upon arrival.
      $urlRouterProvider
          .otherwise('/');
  });
