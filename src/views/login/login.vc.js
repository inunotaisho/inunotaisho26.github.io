import angular from 'angular';
import * as _ from 'lodash';

angular.module('login', []).controller('loginCtrl', () => {
    console.log('loginCtrl works');
    _this.templateString = require('./login.vc.html');
});