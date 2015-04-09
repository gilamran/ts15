class ProductsListController {
  public productsList : IProduct[];

  constructor(private productsListService:ProductsListService) {
    this.productsList = productsListService.productsList;
  }

  public loadProducts():void {
    this.productsListService.loadProducts();
  }
}

angular.module('ts15App').controller('productsListController', ProductsListController);
