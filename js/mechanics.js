angular.module('game.mechanics', [])

.factory('Mech', ['$http', function ($http) {
  var getHit = function (level) {
    // calculates how many hp an attack will deduct
    return Math.ceil(level * 30 * Math.random()) + level;
  };

  var getSpace = function () {
    var url = "https://api.nasa.gov/planetary/apod?api_key=ohzc02SgZ2DOYdqhqKs44E5v6T4dOHl5GDlE6B8K";
    return $http({
      method: 'GET',
      url: url,
    })
    .then(function (res) {
      return res;
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  return {
    getHit: getHit,
    getSpace: getSpace
  } 
}]);