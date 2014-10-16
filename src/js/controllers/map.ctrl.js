'use strict';

angular.module('tFinder.mapCtrl')
  .controller('MapCtrl', function($scope, trails) {
    $scope.Trails = trails.data;
  });
