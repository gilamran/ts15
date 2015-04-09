class ProductsListService {
  public productsList : IProduct[];

  constructor(private $http:ng.IHttpService) {
    this.productsList = [];
  }

  public loadProducts():void {
    this.productsList.length = 0;
    this.$http.get('/getProducts').success((productsList:IProduct[]) => {
      productsList.map((product:IProduct) => {
        this.productsList.push(product);
      });
    });
  }
}

angular.module('ts15App').service('productsListService', ProductsListService);
