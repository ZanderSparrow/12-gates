// When the rock's health is 0, go to the final battle
// After the final battle go to the end screen
// Create the end screen

var app = angular.module('game.main', [])
    .controller('gameCtrl',['$scope', 'Mech', '$timeout', '$location', function ($scope, Mech, $timeout, $location) {
      $scope.gameRunning = false;
      $scope.currentLevel = 0;
      // $scope.runGame = function () {
      //   $scope.ending = false;
      //   $scope.currentLevel = 0;
      //   $scope.gameRunning = true;
      //   $scope.playerHealth = $scope.player.level * 100;
      //   $scope.enemyHealth = $scope.levels[$scope.currentLevel].difficulty * 100;
      // };

      $scope.beginLevel = function () {
        $scope.playerHealth = $scope.player.level * 100;
        $scope.enemyHealth = $scope.levels[$scope.currentLevel].difficulty * 100;
      };

      $scope.playRound = function () {
        $scope.playerTurn = true;
        $scope.enemyTurn = false;
        $scope.playerHit = Mech.getHit($scope.player.level) * 2;
        $scope.enemyHealth = $scope.enemyHealth - $scope.playerHit >= 0 ? $scope.enemyHealth - $scope.playerHit : 0;
        if($scope.enemyHealth === 0) {
          if($scope.currentLevel === 10) {
            $location.path('/end');

          } else {
            $scope.player.level++;
            $scope.currentLevel++;
            $scope.beginLevel();
          }
        }
        $scope.enemyHit = Mech.getHit($scope.levels[$scope.currentLevel].difficulty);
        $timeout(function () { 
          $scope.playerTurn = false;
          $scope.enemyTurn = true;
          $scope.playerHealth = $scope.playerHealth - $scope.enemyHit >= 0 ? $scope.playerHealth - $scope.enemyHit : 0;
          if($scope.playerHealth === 0) {
            $scope.dead = true;
            $scope.gameRunning = false;
          }
        }, 500);
      };

      $scope.continue = function () {
        $scope.dead = false;
        $scope.beginLevel();
        $scope.gameRunning = true;
      };

      $scope.levels = levels;
      $scope.player = player;
      $scope.playerHealth = $scope.player.level * 100;
      $scope.enemyHealth = $scope.levels[$scope.currentLevel].difficulty * 100;

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
      img: 'cacophony.png'
    },
    {
      name: 'The Others',
      message: 'Their gaze pierces you.',
      description: 'Suddenly you notice them everywhere, staring, but what are they thinking?',
      difficulty: 2,
      img: 'others.png'
    },
    {
      name: 'Royal Reflection',
      message: 'You are shaken by what you see but cannot recognize.',
      description: 'There is a person in the glass who is both familiar and so unfamiliar.',
      difficulty: 3,
      img: 'royal_reflection.png'
    },
    {
      name: 'The Distant Land',
      message: 'You are hypnotized by the beauty.',
      description: 'When you realize there is another land you cannot look away, but how can you get there?',
      difficulty: 4,
      img: 'distant_land.png'
    },
    {
      name: 'Giant Dreams',
      message: 'He crushes you with his foot.',
      description: 'You are pulled toward his powerful presence.',
      difficulty: 5,
      img: 'giant_dreams.png'
    },
    {
      name: 'The Costume',
      message: 'You forget who you are, and fall...',
      description: 'If you wore it you would be invisible in one world, and visible in another.',
      difficulty: 6,
      img: 'costume.png'
    },
    {
      name: 'Prison Head',
      message: 'He shocks you into submission!',
      description: 'He says that if you break away you cease to be. You hope it\'s a lie...',
      difficulty: 7,
      img: 'prison_head.png'
    },
    {
      name: 'Visionary',
      message: 'She stuns you as you try to see her.',
      description: 'What she shows you is so beautiful, but can it be real?',
      difficulty: 8,
      img: 'visionary.png'
    },
    {
      name: 'Shifter Monster',
      message: 'He phases into a new form and sneaks past your defenses.',
      description: 'All the visions that were clear are scrambled into chaos!',
      difficulty: 9,
      img: 'shifter_monster.png'
    },
    {
      name: 'A Certain Star',
      message: 'An arrow hits its mark!',
      description: 'You can\'t stop watching the arrows. You want to see which direction is right.',
      difficulty: 10,
      img: 'certain_star.png'
    },
    {
      name: 'Unstoppable Rock',
      message: 'He smacks you down.',
      description: 'He won\'t move no matter how nicely you ask...',
      difficulty: 11,
      img: 'rock.png'
    },
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