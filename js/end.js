var app = angular.module('game.end', [])
  .controller('endCtrl', ['$scope', 'Mech', '$timeout', '$location', function ($scope, Mech, $timeout, $location) {
    // link to game mech factory
    $scope.playerHealth = 1200;

    $scope.endBattle = function () {
      $scope.playerTurn = true;
      $timeout(function () {
        $scope.playerTurn = false;
        $scope.enemyTurn = true;
        $scope.enemyHit = Mech.getHit(12);
        $scope.playerHealth = $scope.playerHealth - $scope.enemyHit >= 0 ? $scope.playerHealth - $scope.enemyHit : 0;
        // when health gets to 0 load end screen
        if($scope.playerHealth === 0) {
          // redirect to the epilogue
        }
      }, 1500);
    };
  }]);