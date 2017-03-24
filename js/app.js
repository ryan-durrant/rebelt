var app = angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state({
        name: 'home',
        url:'/',
        templateUrl: "./js/views/home.html",
        controller: "controller"
      });

      //MUST DO!!! This sends your page to the home state upon arrival.
      $urlRouterProvider
          .otherwise('/');
  });
