angular.module('game', [
  'game.mechanics',
  'ngRoute',
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/start.html',
      controller: 'gameCtrl'
    })
    .when('/play', {
      templateUrl: 'views/game.html',
      controller: 'gameCtrl'
    })
    .when('/end', {
      templateUrl: 'views/end.html',
      controller: 'endCtrl',
    })
    .otherwise({
      redirectTo: '/'
    });
});