(function() {
  'use strict';

angular.module('fcc_twitch_api', ['ngMaterial', 'ngRoute']);

angular.module('fcc_twitch_api').config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: './src/views/allstreamers.html',
    controller: 'mainController'
  })
  .when('/online-only', {
    templateUrl: './src/views/onlinestreamers.html',
    controller: 'mainController'
  })
  .when('/offline-only', {
    templateUrl: './src/views/offlinestreamers.html',
    controller: 'mainController'
  });

  $routeProvider.otherwise( { redirectTo: '/' });

  $locationProvider.html5Mode(true);
});

})();
