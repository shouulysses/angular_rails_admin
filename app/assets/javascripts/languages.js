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

languageApp.controller('itemCtrl', function($scope, $http) {
  $scope.isEdit = false;

  // 展開或關閉編輯模式
  $scope.edit_toggle = function(isEdit) {
    $scope.isEdit = isEdit;
    $scope.onedit_language = angular.copy($scope.language);
  };

  $scope.update = function() {
    $http.put('/languages/' + $scope.onedit_language.id + '.json', $scope.onedit_language).
    success(function(response) {
      $scope.update_languages();
    });
  };

  $scope.delete = function() {
    $http.delete('/languages/' + $scope.language.id + '.json').
    success(function(response) {
      $scope.update_languages();
    });
  };
});
