describe('Controller: ProductsListController', function () {

  var scope;
  var productsListController : ProductsListController;
  var productsInterceptor : ProductsInterceptor;

  // load the controller's module
  beforeEach(module('ts15App'));

  // Initialize the controller ,a mock scope and an interceptor
  beforeEach(function() {
    inject(function ($controller, $rootScope, $httpBackend) {
      scope = $rootScope.$new();
      productsListController = $controller('productsListController', {
        $scope: scope
      });
      productsInterceptor = new ProductsInterceptor($httpBackend);
    });
  });

  it('should load a empty products list', function () {
    productsInterceptor.givenAProductListOf([]);
    productsListController.loadProducts();
    productsInterceptor.flush();
    expect(productsListController.productsList.length).toBe(0);
  });

  it('should load a demo products list', function () {
    productsInterceptor.givenAProductListOf(aDemoProductsList());
    productsListController.loadProducts();
    productsInterceptor.flush();
    expect(productsListController.productsList.length).toBe(4);
  });
});
