

angular.module('tFinder.mapCtrl')
  .controller('MapController', function($scope, trails) {
    $scope.Trails = trails.data.Trails;
  });
