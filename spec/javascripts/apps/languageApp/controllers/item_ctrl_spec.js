describe('itemCtrl', function(){

  beforeEach(module('languageApp'));

  beforeEach(inject(function ($rootScope) {
    $rootScope.$apply(function() {
      $rootScope.update_languages = function() { /* nothing todo */};
      $rootScope.language = {name: 'Chinese', id: 1};

      spyOn($rootScope, 'update_languages');
    });
  }));

  it('should change "isEdit" copy "onedit_language" with method "edit_toggle"', inject(function($controller, $rootScope) {
    var scope = $rootScope.$new(),
        ctrl = $controller('itemCtrl', {$scope: scope});
    scope.edit_toggle(true);

    expect(scope.isEdit).toBe(true);
    expect(scope.onedit_language).toEqual($rootScope.language);
  }));

  it('should call "update_languages" with method "update"', inject(
    function($controller, $rootScope, $httpBackend) {

    var scope = $rootScope.$new(),
        ctrl = $controller('itemCtrl', {$scope: scope});
    scope.edit_toggle(true);

    $httpBackend.expect('PUT', '/languages/1.json', $rootScope.language).respond('');
    scope.update();
    $httpBackend.flush();

    expect($rootScope.update_languages).toHaveBeenCalled();
  }));

  it('should call "update_languages" with method "delete"', inject(
    function($controller, $rootScope, $httpBackend) {

    var scope = $rootScope.$new(),
        ctrl = $controller('itemCtrl', {$scope: scope});

    $httpBackend.expect('DELETE', '/languages/1.json').respond('');
    scope.delete();
    $httpBackend.flush();

    expect($rootScope.update_languages).toHaveBeenCalled();
  }));
});
