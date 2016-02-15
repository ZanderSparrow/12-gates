
var app = angular.module('12app', [])
    .controller('gameCtrl',['$scope', 'Mech', '$timeout', function ($scope, Mech, $timeout) {
      $scope.gameRunning = false;
      $scope.currentLevel = 0;

      $scope.runGame = function () {
        $scope.currentLevel = 0;
        $scope.gameRunning = true;
        $scope.playerHealth = $scope.player.level * 100;
        $scope.enemyHealth = $scope.levels[$scope.currentLevel].difficulty * 100;
      };

      $scope.beginLevel = function () {
        $scope.playerHealth = $scope.player.level * 100;
        $scope.enemyHealth = $scope.levels[$scope.currentLevel].difficulty * 100;
      };

      $scope.playRound = function () {
        $scope.playerHit = Mech.getHit($scope.player.level);
        $scope.enemyHealth -= $scope.playerHit;
        $scope.enemyTurn = false;
        $scope.playerTurn = true;
        $scope.enemyHit = Mech.getHit($scope.levels[$scope.currentLevel].difficulty);
        $timeout(function () { 
          $scope.playerTurn = false;
          $scope.enemyTurn = true;
          $scope.playerHealth -= $scope.enemyHit;
        }, 2500);

        // $scope.currentLevel++;
        // if($scope.currentLevel >= 12) {
        //   $scope.gameRunning = false;
        //   $scope.currentLevel = 0;
        // }
      };

      $scope.levels = levels;
      $scope.player = player;

    }]);

  var player = {
    level: 1,
    message: 'You strike out at the gatekeeper!'
  };

  var levels = [
    {
      name: 'Cacophony',
      message: 'You are hit by a phrenetic wave of light and sound...',
      difficulty: 1,
    },
    {
      name: 'The Others',
      message: 'Their gaze pierces you.',
      difficulty: 2,
    },
    {
      name: 'Royal Reflection',
      message: 'You are shaken by what you see but cannot recognize.',
      difficulty: 3,
    },
    {
      name: 'The Distant Land',
      message: 'You are hypnotized by the beauty.',
      difficulty: 4,
    },
    {
      name: 'Giant Dreams',
      message: 'He crushes you with his foot.',
      difficulty: 5,
    },
    {
      name: 'The Costume',
      message: 'You forget who you are, and fall...',
      difficulty: 6,
    },
    {
      name: 'Prison Head',
      message: 'He shocks you into submission!',
      difficulty: 7,
    },
    {
      name: 'Visionary',
      message: 'She stuns you as you try to see her.',
      difficulty: 8,
    },
    {
      name: 'Shifter Monster',
      message: 'He phases into a new form and sneaks past your defenses.',
      difficulty: 9,
    },
    {
      name: 'A Certain Star',
      message: 'An arrow hits its mark!',
      difficulty: 10,
    },
    {
      name: 'Unstoppable Rock',
      message: 'He smacks you down.',
      difficulty: 11,
    },
    {
      name: 'The Last One',
      message: '...',
      difficulty: 12,
    }
  ];

app.factory('Mech', function() {

  var getHit = function (level) {
    // calculates how many hp an attack will deduct
    return Math.ceil(level * 10 * Math.random()) + level;
  };

  return {
    getHit: getHit
  } 
});