export default class ProductBuilder implements IProduct {
  public id : string;
  public name : string;
  public price : number;

  constructor() {
  }

  public withId(id:string):ProductBuilder {
    this.id = id;
    return this;
  }

  public withName(name:string):ProductBuilder {
    this.name = name;
    return this;
  }

  public withPrice(price:number):ProductBuilder {
    this.price = price;
    return this;
  }
}
