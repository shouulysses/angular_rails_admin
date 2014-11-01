describe('indexCtrl', function(){

  beforeEach(module('languageApp'));

  it('should create "languages" model with empty array', inject(function($controller) {
    var scope = {},
        ctrl = $controller('indexCtrl', {$scope: scope});

    expect(scope.languages.length).toBe(0);
  }));

  it('should update "languages" model', inject(
    function($controller, $httpBackend) {

    var scope = {},
        ctrl = $controller('indexCtrl', {$scope: scope});

    $httpBackend.expectGET('/languages.json').respond([{name: 'Chinese', id: 1},
                                                       {name: 'English', id: 2}]);
    scope.update_languages();
    $httpBackend.flush();

    expect(scope.languages.length).toBe(2);
  }));
});
