angular.module('fcc_twitch_api').directive('notFoundStreamers', function() {
  return {
    template: '<div ng-repeat="channel in streamInformation.streamersChannel | searchStreamers:inputValue" ng-if="channel.error !== undefined" class="notfound-streamer"><i class="fa fa-user-o" aria-hidden="true"></i><div class="streamer-notfound-details"><h3 class="streamer-notfound-name">{{streamInformation.streamerNotFound(channel.message)}}</h3></div><span class="notfound-text">Not Found</span></div>'
  }
});
