import ProductsListService from '../services/ProductsListService';

export default class ProductsListController {
  public productsList : IProduct[];

  constructor(private productsListService:ProductsListService) {
    this.productsList = productsListService.productsList;
  }

  public loadProducts():void {
    this.productsListService.loadProducts();
  }
}
