'use strict';

angular.module('tFinder.mapSvc')
  .factory('MapService', function($http, $q, config, Session) {
    var mapService = {};

    eventDetailsService.get = function(eventId) {

      var data = {
        schoolId: Session.getChosenSchool().Id
      };

      var headers = {
        headers: {
          'x-htm-authtoken':Session.getAuthToken()
        }
      };

      return $http.post(config.baseUrl + config.eventPath + '/' + eventId + '/details', data, headers);
    };

    return eventDetailsService;
  });
