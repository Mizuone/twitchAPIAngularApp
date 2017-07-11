angular.module('fcc_twitch_api').directive('offlineStreamers', function() {
  return {
    template: ' <div class="streamer-container" ng-repeat="stream in streamInformation.streamersStream | searchStreamers:inputValue" ng-repeat="streamer in streamInformation.streamers" ng-if="stream.stream === null"><a rel="noopener noreferrer" target="_blank" href="https://www.twitch.tv/{{ streamInformation.streamer(stream._links.self) }}"><div class="offline-streamer"><i class="fa fa-user-o" aria-hidden="true"></i> <div class="offline-streamer-details"><h3 class="streamer-offline-name"> {{ streamInformation.streamer(stream._links.self) }} </h3></div><span class="offline-text">Offline</span></div></a></div>'
  };
})
