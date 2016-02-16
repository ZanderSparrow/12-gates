angular.module('game.mechanics', [])

.factory('Mech', function () {
  var getHit = function (level) {
    // calculates how many hp an attack will deduct
    return Math.ceil(level * 20 * Math.random()) + level;
  };

  return {
    getHit: getHit
  } 
});