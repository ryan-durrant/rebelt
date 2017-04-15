angular.module('app').controller('mainCtrl', function($document, $scope, app_service, $cookies){

  //SIGNUP FORM
  //Everything is assigned to $scope.customerData keys

//goes to the service which hits the API endpoint and serves a promise back.
  app_service.getMens()
    .then(function mensProducts(response){
      $scope.mensProducts = response.data;
      //I have to do response.data to get the one key from a large object that the response sends back
    });

//goes to the service which hits the API endpoint and serves a promise back.
  app_service.getWomens()
    .then(function womensProducts(response){
      $scope.womensProducts = response.data;
    });

//goes to the service which hits the API endpoint and serves a promise back.
  app_service.getKids()
    .then(function kidsProducts(response){
      $scope.kidsProducts = response.data;
    });

  app_service.getProducts()
    .then(function allProducts(response){
      $scope.allProducts = response.data;
    });

  $scope.newCustomer = function(){
    //debugger;
    app_service.createCustomer($scope.customerData).then(function(response){
      app_service.user = response.data;
      $scope.user = app_service.user;
    });
  };

  $scope.findCookieUser = function(){
    if(document.cookie.indexOf('loggedInUser') > -1){
      $scope.cookieUser = JSON.parse($cookies.getAll().loggedInUser).displayName;
      $scope.cookieUserF_Name = $scope.cookieUser.slice(0, $scope.cookieUser.indexOf(" "));
      $scope.cookieUserL_Name = $scope.cookieUser.slice($scope.cookieUser.indexOf(" ") + 1);
    }
    else {
      $scope.cookieUser = "";
    }
  };
  $scope.findCookieUser();

  //$scope.cookieUser = JSON.parse($cookies.getAll().loggedInUser).displayName;

  // console.log($cookies.getAll());
  //console.log(JSON.parse($cookies.getAll().loggedInUser).displayName);

  $scope.logout = function(){
    $scope.user = undefined;
    $cookies.remove('loggedInUser');
    console.log("Cookie removed");
    $scope.cookieUser = "";
  };

});
