(function() {
  
  angular.module('fcc_twitch_api').service('stringParser', [function() {
    return {
      getSequenceAfterSlash: function(string) {
        return string.split('/').pop();
      },
      getNameFromContainingQuotes: function(string) {
        return string.slice(string.indexOf('"') + 1, string.length - 1);
      }
    }
  }]);

})();
