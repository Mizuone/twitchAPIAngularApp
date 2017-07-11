(function() {

  angular.module('fcc_twitch_api').service('twitchData_service', ['$http', function($http) {

    return {
      retrieveStreamer: function(streamer) {

        return $http({
          method:'GET',
          url: streamer,
          headers: {
            'Content-type': 'application/json'
          }
        }).then(function(response) {
          return response;
        });

      }

    }

  }]);

})();
