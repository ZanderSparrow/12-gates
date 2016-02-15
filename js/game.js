
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
      description: 'You awaken in a world of light, sound, and sensation. Nothing makes sense, and everything is too much.',
      difficulty: 1,
    },
    {
      name: 'The Others',
      message: 'Their gaze pierces you.',
      description: 'Suddenly you notice them everywhere, staring, but what are they thinking?',
      difficulty: 2,
    },
    {
      name: 'Royal Reflection',
      message: 'You are shaken by what you see but cannot recognize.',
      description: 'There is a person in the glass who is both familiar and so unfamiliar.',
      difficulty: 3,
    },
    {
      name: 'The Distant Land',
      message: 'You are hypnotized by the beauty.',
      description: 'When you realize there is another land you cannot look away, but how can you get there?',
      difficulty: 4,
    },
    {
      name: 'Giant Dreams',
      message: 'He crushes you with his foot.',
      description: 'You are pulled toward his powerful presence.',
      difficulty: 5,
    },
    {
      name: 'The Costume',
      message: 'You forget who you are, and fall...',
      description: 'If you wore it you would be invisible in one world, and visible in another.',
      difficulty: 6,
    },
    {
      name: 'Prison Head',
      message: 'He shocks you into submission!',
      description: 'He says that if you break away you cease to be. You hope it\'s a lie...',
      difficulty: 7,
    },
    {
      name: 'Visionary',
      message: 'She stuns you as you try to see her.',
      description: 'What she shows you is so beautiful, but can it be real?',
      difficulty: 8,
    },
    {
      name: 'Shifter Monster',
      message: 'He phases into a new form and sneaks past your defenses.',
      description: 'All the visions that were clear are scrambled into chaos!',
      difficulty: 9,
    },
    {
      name: 'A Certain Star',
      message: 'An arrow hits its mark!',
      description: 'You can\'t stop watching the arrows. You want to see which direction is right.',
      difficulty: 10,
    },
    {
      name: 'Unstoppable Rock',
      message: 'He smacks you down.',
      description: 'He won\'t move no matter how nicely you ask...',
      difficulty: 11,
    },
    {
      name: 'The Last One',
      description: '',
      message: '...',
      difficulty: 12,
    }
  ];

app.factory('Mech', function() {

  var getHit = function (level) {
    // calculates how many hp an attack will deduct
    return Math.ceil(level * 20 * Math.random()) + level;
  };

  return {
    getHit: getHit
  } 
});