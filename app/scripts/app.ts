import ProductsListController from './controllers/ProductsListController';
import ProductsListService from './services/ProductsListService';

export default angular.module('ts15App', [])
  .controller('productsListController', ProductsListController)
  .service('productsListService', ProductsListService);
