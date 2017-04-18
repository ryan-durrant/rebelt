angular.module('app').controller('authCtrl', function($scope, app_service, $cookies){

  //SIGNUP FORM
  //Everything is assigned to $scope.customerData keys
  $scope.newCustomer = function(){
    app_service.createCustomer($scope.customerData).then(function(response){
      app_service.user = response.data;
      $scope.user = app_service.user;
    });
    //Resets the form input boxes
    $scope.customerData = undefined;
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

  $scope.login = function(){
    app_service.login($scope.credentials).then(function(response){
      app_service.user = response.data;
      $scope.user = app_service.user;
    });

    //Resets the form input boxes
    $scope.credentials = undefined;
  };

  $scope.logout = function(){
    $scope.user = undefined;
    $cookies.remove('loggedInUser');
    console.log("Cookie removed");
    $scope.cookieUser = "";
  };

});
