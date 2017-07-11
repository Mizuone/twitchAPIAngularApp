(function() {

  angular.module('fcc_twitch_api').filter('searchStreamers',['stringParser', function($stringParser) {
    return function(arr, inputValue) {

      if (!inputValue) {
        return arr;
      }
      return arr.filter(function(value) {
        var streamerName;

        if (value._links === undefined) {
          streamerName = $stringParser.getNameFromContainingQuotes(value.message);
        } else {
          streamerName = value._links.self;
        }

        return $stringParser.getSequenceAfterSlash(streamerName).toLowerCase().indexOf(inputValue.toLowerCase()) != -1;
      });
    }
  }]);
  
})();
