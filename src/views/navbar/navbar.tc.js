import angular from 'angular';

angular.module('navbarCtrl',[])
.controller('navbarController', ($scope, $http) => {
    console.log('hello');
    $scope.isUserLoggedIn = true; 
});