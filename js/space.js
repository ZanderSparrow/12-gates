angular.module('game.space', [])
  .controller('spaceCtrl', ['$scope', 'Mech', function ($scope, Mech) {
    $scope.space = {};
    $scope.spaceKeys = [];
    Mech.getSpace()
    .then(function (res) {
      $scope.space = res.data;
      $scope.spaceKeys = Object.keys(res.data);
    })
    .catch(function (err) {
      console.error(err);
    });
  }]);