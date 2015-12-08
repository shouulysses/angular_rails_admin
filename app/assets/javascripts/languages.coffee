languageApp = angularApplication.module('languageApp', ['ngUpload'])
languageApp.controller 'indexCtrl', ($scope, $http) ->
  $scope.languages = []
  #update
  $scope.update_languages = ->
    $http.get('/admin/languages.json').success (languages) ->
      $scope.languages = languages

languageApp.controller 'listCtrl', ($scope, $http) ->
  $scope.update_languages()

languageApp.controller 'formCtrl', ($scope, $http) ->
  $scope.completed = (response) ->
    $scope.name = ''
    $scope.describe = ''
    $scope.update_languages()

languageApp.controller 'itemCtrl', ($scope, $http) ->
  $scope.isEdit = false
  
  $scope.edit_toggle = (isEdit) ->
    $scope.isEdit = isEdit
    $scope.onedit_language = angular.copy($scope.language)
  
  $scope.update = ->
    $http.put('/admin/languages/' + $scope.onedit_language.id + '.json', $scope.onedit_language).success (response) ->
      $scope.update_languages()

  $scope.delete = ->
    $http.delete('/admin/languages/' + $scope.language.id + '.json').success (responese) ->
      $scope.update_languages()