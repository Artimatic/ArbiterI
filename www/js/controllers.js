
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Thermostat_l5u', id: 1 },
    { title: 'Cowbell_gg3', id: 2 },
    { title: 'SmartBracelet_g11', id: 3 },
    { title: 'Vibrator_ff0', id: 4 },
    { title: 'Vibrator_zz1', id: 5 },
    { title: 'Vibrator_Magnum_XXL_7k5', id: 6 },
    { title: 'Vibrator_mz5', id: 7 },
    { title: 'Vibrator_ruu', id: 8 },
    { title: 'Vibrator_2vi', id: 9 },
    { title: 'Vibrator_yaw', id: 10 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
