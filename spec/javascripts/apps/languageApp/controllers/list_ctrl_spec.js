describe('listCtrl', function(){

  beforeEach(module('languageApp'));

  beforeEach(inject(function ($rootScope) {
    $rootScope.$apply(function() {
      $rootScope.update_languages = function() { /* nothing todo */};
      spyOn($rootScope, 'update_languages');
    });
  }));

  it('should call "update_languages" when listCtrl init', inject(function($controller, $rootScope) {
    var scope = $rootScope.$new(),
        ctrl = $controller('listCtrl', {$scope: scope});

    expect($rootScope.update_languages).toHaveBeenCalled();
  }));
});
