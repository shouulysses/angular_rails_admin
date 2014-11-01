var languageApp = angularApplication.module('languageApp', ['ngUpload']);

languageApp.controller('indexCtrl', function($scope, $http) {
  $scope.languages = [];

  // 更新列表
  $scope.update_languages = function() {
    $http.get('/languages.json').
    success(function(languages) {
      $scope.languages = languages;
    });
  };
});

languageApp.controller('formCtrl', function($scope, $element, $http) {
  // 上傳完成
  $scope.completed = function(response) {
    $scope.name = '';
    $scope.update_languages();
  };
});

languageApp.controller('listCtrl', function($scope, $http) {
  $scope.update_languages();
});
