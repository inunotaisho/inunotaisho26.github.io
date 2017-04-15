import $ from 'jquery';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css!';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import angular from 'angular';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';
import '../../views/home/home.less!';
import '../../views/education/ed.less!';
import'../../views/projects/projects.less!';
import'../../views/contact/contact.less!';
import navbar from '../../directives/navbar.js';

angular.module('myApp', ['ngRoute', 'ngResource','navbar'])
.config(($routeProvider, $locationProvider) => {
    $routeProvider
    .when('/', {
        templateUrl: '../../views/home/home.html',
        controller: 'homeCtrl',
        controllerUrl: '../../controllers/home/home.js'
    })
    .when('/education', {
        templateUrl: '../../views/education/ed.html',
        controller: 'edCtrl',
        controllerUrl:  '../../controllers/education/ed.js'
    })
    .when('/projects', {
        templateUrl: '../../views/projects/projects.html',
        controller: 'projCtrl',
        controllerUrl: '../../controllers/projects/projects.js'
    })
    .when('/blog', {
        templateUrl:'../../views/blog/blog.html',
        controller: 'blogCtrl',
        controllerUrl: '../../controllers/blog/blog.js'
    })
    .when('/contact', {
        templateUrl:'../../views/contact/contact.html',
        controller: 'contactCtrl',
        controllerUrl: '../../controllers/contact/contact.js'
    })
    .otherwise({
        redirectTo: '/'
    });
});


angular.bootstrap(document, ['myApp']);

