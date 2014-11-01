describe('formCtrl', function(){

  beforeEach(module('languageApp'));

  beforeEach(inject(function ($rootScope) {
    $rootScope.$apply(function() {
      $rootScope.update_languages = function() { /* nothing todo */};
      spyOn($rootScope, 'update_languages');
    });
  }));

  it('should call "update_languages" with method completed', inject(function($controller, $rootScope) {
    var scope = $rootScope.$new(),
        ctrl = $controller('formCtrl', {$scope: scope});

    scope.completed({});

    expect($rootScope.update_languages).toHaveBeenCalled();
  }));
});
