import $ from 'jquery';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css!';
import 'bootstrap/dist/css/bootstrap-theme.min.css!';
import 'font-awesome/css/font-awesome.min.css!';
import angular from 'angular';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';
import navbar from '../../src/views/navbar/navbar.dir.js';

angular.module('myApp', ['ngRoute', 'ngResource','navbar'])
.config(($routeProvider, $locationProvider) => {
    $routeProvider
    .when('/', {
        templateUrl: '../../src/views/home/home.vc.html',
        controller: 'homeCtrl',
        controllerUrl: '../../src/views/home/home.vc.js'
    })
    .when('/education', {
        templateUrl: '../../src/views/education/ed.vc.html',
        controller: 'edCtrl',
        controllerUrl:  '../../src/views/education/ed.vc.js'
    })
    .when('/projects', {
        templateUrl: '../../src/views/projects/projects.vc.html',
        controller: 'projCtrl',
        controllerUrl: '../../src/views/projects/projects.vc.js'
    })
    .when('/blog', {
        templateUrl:'../../src/views/blog/blog.vc.html',
        controller: 'blogCtrl',
        controllerUrl: '../../src/views/blog/blog.vc.js'
    })
    .when('/login', {
        templateUrl:'../../src/views/login/login.vc.html',
        controller:'loginCtrl',
        controllerUrl:'../../src/views/login/login.vc.js'
    })
    .when('/write', {
        templateUrl:'../../src/views/write/write.vc.html',
        controller:'writeCtrl',
        controllerUrl:'../../src/views/write/write.vc.js'
    })
    .when('/contact', {
        templateUrl:'../../src/views/contact/contact.vc.html',
        controller: 'contactCtrl',
        controllerUrl: '../../src/views/contact/contact.vc.js'
    })
    .otherwise({
        redirectTo: '/'
    });
});


angular.bootstrap(document, ['myApp', 'navbarCtrl']);

