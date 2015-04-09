class ProductBuilder implements IProduct {
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

function aDemoProductsList():IProduct[] {
  var product1 : IProduct = new ProductBuilder().withId("001").withName("Product1").withPrice(9);
  var product2 : IProduct = new ProductBuilder().withId("002").withName("Product2").withPrice(99);
  var product3 : IProduct = new ProductBuilder().withId("003").withName("Product3").withPrice(999);
  var product4 : IProduct = new ProductBuilder().withId("004").withName("Product4").withPrice(9999);

  return [product1, product2, product3, product4];
}
