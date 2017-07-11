(function() {

  angular.module('fcc_twitch_api').controller('mainController', ['$scope','twitchData_service', 'stringParser', function($scope, $twitchData_service, $stringParser) {

    var streamers = ['BlizzardZHTW', 'pappaberen', 'destiny', 'bobross', 'hanryang1125', 'kylerebelzize', 'lirik',
                     'sing_sing','freecodecamp', 'OgamingSC2', 'mdstephano', 'comster404', 'gamesdonequick', 'gsl'];

    var streamersChannelArr = [],
        streamersStreamArr = [],
        longGameTitles = ['PLAYERUNKNOWN'];

    for (var i = 0, len = streamers.length; i < len; i++) {

      (function(y) {
        y = i;

          $twitchData_service.retrieveStreamer('https://wind-bow.glitch.me/twitch-api/channels/'+ streamers[y].toLowerCase() +'?callback=?')
          .then(function(twitchResponse) {

          var dataProp = twitchResponse.data,
              streamerObj = JSON.parse(dataProp.slice(dataProp.indexOf('{'), dataProp.length - 2)); //refactor

          streamersChannelArr.push(streamerObj);


           if (typeof streamerObj.error !== 'string') {

             $twitchData_service.retrieveStreamer('https://wind-bow.glitch.me/twitch-api/streams/'+ streamers[y].toLowerCase() +'?callback=?').then(function(streamerResponse) {
                var streamerProp = streamerResponse.data,
                    streamerObj = JSON.parse(streamerProp.slice(streamerProp.indexOf('{'), streamerProp.length - 2));

                 streamersStreamArr.push(streamerObj);
                console.log(streamersStreamArr);
            });

           }

        });

      })(i);


    }
    $scope.setViewTitle = function(title) {
      return $scope.viewTitle = title;
    };
    $scope.setViewTitle('Streamers');

    $scope.streamInformation = {
      streamersChannel: streamersChannelArr,
      streamersStream: streamersStreamArr,
      streamer: $stringParser.getSequenceAfterSlash,
      streamerNotFound: $stringParser. getNameFromContainingQuotes,
      streamerLongGameTitle: longGameTitles
    }

  }]);

})();
