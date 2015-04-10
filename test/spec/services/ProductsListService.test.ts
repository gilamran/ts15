import ProductsInterceptor from '../../mock/interceptors/ProductsInterceptor';
import ProductsListService from '../../../app/scripts/services/ProductsListService';
import {aDemoProductsList} from '../../mock/builders/ProductListBuilder';
import {anEmptyProductsList} from '../../mock/builders/ProductListBuilder';

describe('Service: ProductsListService', function () {

  var productsInterceptor : ProductsInterceptor;
  var productsListService : ProductsListService;

  // load the controller's module
  beforeEach(module('ts15App'));

  // Initialize the interceptor
  beforeEach(function() {
    inject(function ($httpBackend, _productsListService_) {
      productsInterceptor = new ProductsInterceptor($httpBackend);
      productsListService = _productsListService_;
    });
  });

  afterEach(function() {
    productsInterceptor.reset();
  });

  it('should load a empty products list', function () {
    productsInterceptor.givenAProductListOf(anEmptyProductsList());
    productsListService.loadProducts();
    productsInterceptor.flush();
    expect(productsListService.productsList.length).toBe(0);
  });

  it('should load a demo products list', function () {
    productsInterceptor.givenAProductListOf(aDemoProductsList());
    productsListService.loadProducts();
    productsInterceptor.flush();
    expect(productsListService.productsList.length).toBe(4);
  });
});
