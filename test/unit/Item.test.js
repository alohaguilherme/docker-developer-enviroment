import Item from "../../src/domain/entity/Item.js"

describe('Item unit test', function () {
  it('Get value item', function () {
    const item = new Item({
      name: 'Billabong T-SHIRT AI',
      category: 'T-SHIRT',
      description: 'T-SHIRT ANDY IRONS',
      value: 30,
      quantity: 1
    });
    expect(item.getTotalValue()).toBe(30)
  });

  it('shoulb be return error Value is required', function () {

    expect(function () {
      new Item({
        name: 'Billabong T-SHIRT AI',
        category: 'T-SHIRT',
        description: 'T-SHIRT ANDY IRONS',
        quantity: 1
      }).toThrow(new Error("Value is required"));
    });
  });

  it('shoulb be return error Value is required', function () {

    expect(function () {
      new Item({
        name: 'Billabong T-SHIRT AI',
        category: 'T-SHIRT',
        description: 'T-SHIRT ANDY IRONS',
        value: 30
      }).toThrow(new Error("Quantity is required"));
    });
  });
});