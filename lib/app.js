'use strict'

var cluster = require('cluster');
var os = require('os');
var server = require('./server');

if(cluster.isMaster){
    var numCPUS = cpus().length;

    for(var i = 0; i < numCPUS; i += 1){
        cluster.fork();
    }
}else{

    var app = new server();

     app.set('port', process.env.PORT || 8000);
}