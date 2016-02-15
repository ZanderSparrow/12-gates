(function() {

  angular.module('12app', [])
    .controller('gameCtrl', function($scope) {
      $scope.gameRunning = false;
      $scope.currentLevel = 1;
      $scope.runGame = function () {
        $scope.gameRunning = !$scope.gameRunning;
      }

      $scope.levelUp = function () {
        $scope.currentLevel++;
        if($scope.currentLevel >= 12) {
          $scope.gameRunning = false;
          $scope.currentLevel = 1;
        }
      }
      $scope.levels = levels;
    });

  var levels = [
    {
      name: 'Cacophany',
      difficulty: 1,
    },
    {
      name: 'The Others',
      difficulty: 2,
    },
    {
      name: 'Royal Reflection',
      difficulty: 3,
    },
    {
      name: 'The Distant Land',
      difficulty: 4,
    },
    {
      name: 'Giant Dreams',
      difficulty: 5,
    },
    {
      name: 'The Costume',
      difficulty: 6,
    },
    {
      name: 'Prison Head',
      difficulty: 7,
    },
    {
      name: 'Visionary',
      difficulty: 8,
    },
    {
      name: 'Shifter Monster',
      difficulty: 9,
    },
    {
      name: 'A Certain Star',
      difficulty: 10,
    },
    {
      name: 'Unstoppable Rock',
      difficulty: 11,
    },
    {
      name: 'The Last One',
      difficulty: 12,
    }
  ];

})();