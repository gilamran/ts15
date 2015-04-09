angular.module('ts15AppMocks', ['ngMockE2E', 'ts15App'])
	.run(['$httpBackend', function ($httpBackend) {
		$httpBackend.whenGET(/.*\.html$/).passThrough();

    var demoProducts = aDemoProductsList();
    var productsInterceptor = new ProductsInterceptor($httpBackend).givenAProductListOf(demoProducts);

		/******* Other *******/
		$httpBackend.whenGET(/.*/).passThrough();
		$httpBackend.whenPOST(/.*/).passThrough();
		$httpBackend.whenPUT(/.*/).passThrough();
		$httpBackend.whenDELETE(/.*/).passThrough();
	}]);
