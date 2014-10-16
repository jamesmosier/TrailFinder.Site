'use strict';

angular.module('tFinder.mapSvc')
  .factory('MapService', function($http) {
    var mapService = {};

    mapService.get = function(eventId) {
      return $http.post('https://tf-svc.azurewebsites.net/trails');
    };

    return mapService;
  });
