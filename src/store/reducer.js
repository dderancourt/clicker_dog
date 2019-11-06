const initialState = {
  love: 500,
  lovePerSecond: 0,
  lovePerClick: 0,
  totalLoveEver: 0,
  price: {
    food: 100,
    toy: 3000,
    basket: 50000,
    female_dog: 600000,
    slave_cat: 20000000,
    park: 100000000
  },
  inventory: {
    food: 0,
    toy: 0,
    basket: 0,
    female_dog: 0,
    slave_cat: 0,
    park: 0
  }
};

const reducer = (state = initialState, action) => {
  const newState = {
    ...state
  };
  switch (action.type) {
    case ("INCREMENT_LOVE"):
      newState.love = newState.love + newState.lovePerSecond;
      newState.totalLoveEver = newState.totalLoveEver + newState.lovePerSecond
      break;
    case ("ADD_LOVE"):
      newState.love++;
      break;
    case ("ADD_FOOD"):
      if (newState.love >= newState.price.food) {
        newState.love = newState.love - newState.price.food;
        newState.lovePerSecond = newState.lovePerSecond + 1;
        newState.price.food = newState.price.food + newState.price.food * 0.15;
        newState.inventory.food = newState.inventory.food + 1
      }
      break;
    case ("ADD_TOY"):
      if (newState.love >= newState.price.toy) {
        newState.love = newState.love - newState.price.toy;
        newState.lovePerSecond = newState.lovePerSecond + 10;
        newState.price.toy = newState.price.toy + newState.price.toy * 0.15;
        newState.inventory.toy = newState.inventory.toy + 1
      }
      break;
    case ("ADD_BASKET"):
      if (newState.love >= newState.price.basket) {
        newState.love = newState.love - newState.price.basket;
        newState.lovePerSecond = newState.lovePerSecond + 50;
        newState.price.basket = newState.price.basket + newState.price.basket * 0.15;
        newState.inventory.basket = newState.inventory.basket + 1
      }
      break;
    case ("ADD_FEMALE_DOG"):
      if (newState.love >= newState.price.female_dog) {
        newState.love = newState.love - newState.price.female_dog;
        newState.lovePerSecond = newState.lovePerSecond + 100;
        newState.price.female_dog = newState.price.female_dog + newState.price.female_dog * 0.15;
        newState.inventory.female_dog = newState.inventory.female_dog + 1
      }
      break;
    case ("ADD_SLAVE_CAT"):
      if (newState.love >= newState.price.slave_cat) {
        newState.love = newState.love - newState.price.slave_cat;
        newState.lovePerSecond = newState.lovePerSecond + 500;
        newState.price.slave_cat = newState.price.slave_cat + newState.price.slave_cat * 0.15;
        newState.inventory.slave_cat = newState.inventory.slave_cat + 1
      }
      break;
    case ("ADD_PARK"):
      if (newState.love >= newState.price.park) {
        newState.love = newState.love - newState.price.park;
        newState.lovePerSecond = newState.lovePerSecond + 10000;
        newState.price.park = newState.price.park + newState.price.park * 0.15;
        newState.inventory.park = newState.inventory.park + 1
      }
      break;
    default:
  }
  return newState;
};

export default reducer;
