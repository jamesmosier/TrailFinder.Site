'use strict';

angular.module('tFinder.mapSvc')
  .factory('MapService', function($http) {
    var mapService = {};

    mapService.get = function() {
      return $http.get('https://tf-svc.azurewebsites.net/trails?format=json');
    };

    return mapService;
  });
