(function() {

  angular.module('fcc_twitch_api').controller('sideNav', function($scope, $timeout, $mdSidenav) {
      $scope.toggleLeft = buildToggler('left');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      }
  });

})();
