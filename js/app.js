angular.module('game', [
  'game.main',
  'game.end',
  'game.mechanics',
  'ngRoute',
])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/start.html',
      controller: 'gameCtrl'
    })
    .when('/game', {
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
}]);