import angular from 'angular';

angular.module('navbar', [])
.directive('navbar',() => {
return {
    restrict: 'E',
    templateUrl:'../../views/navbar/navbar.html',
    require:'^ngModel',
    controller:'navbarCtrl',
    controllerUrl:'../controllers/navbar/navbar.js'
    };
});

