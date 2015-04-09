class ProductsInterceptor {

  constructor(private $httpBackend:ng.IHttpBackendService) {
  }

  public givenAProductListOf(productList:IProduct[]) {
    this.$httpBackend.whenGET(/\/getProducts$/).respond(productList);
    return this;
  }

  public reset():void {
    this.$httpBackend.resetExpectations();
  }

  public flush():void {
    this.$httpBackend.flush();
  }
}
