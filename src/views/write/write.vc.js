import angular from 'angular';

angular.module('writing',[])
.controller('writeCtrl', ($scope, $http) => {
    console.log('writeCtrl works');
});