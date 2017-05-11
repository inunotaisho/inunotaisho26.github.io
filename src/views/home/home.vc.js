import angular from 'angular';
import * as _ from 'lodash';

angular.module('home',[]).controller('homeCtrl', () => {
    console.log('homeCtrl works');
    _this.templateString = require('./home.vc.html');

});