class ProductsInterceptor {

  constructor(private $httpBackend) {
  }

  public givenAProductListOf(productList:IProduct[]) {
    this.$httpBackend.whenGET(/\/getProducts$/).respond(productList);
    return this;
  }
}
