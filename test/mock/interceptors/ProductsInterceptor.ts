/// <reference path='../../tests_references.ts'/>

class ProductsInterceptor extends BaseInterceptor{

  constructor($httpBackend:ng.IHttpBackendService) {
    super($httpBackend);
  }

  public givenAProductListOf(productList:IProduct[]) {
    this.$httpBackend.whenGET(/\/getProducts$/).respond(productList);
    return this;
  }
}
