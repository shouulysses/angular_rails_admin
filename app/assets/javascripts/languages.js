var languageApp = angularApplication.module('languageApp', []);

languageApp.controller('listCtrl', function($scope, $http) {
  $http.get('/languages.json').success(function(languages) {
    $scope.languages = languages;
  });
});
