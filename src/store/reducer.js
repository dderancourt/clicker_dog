const initialState = {
  love: 500,
  lovePerSecond: 0,
  lovePerClick: 0,
  totalLoveEver: 0,
  items: [
    {
      name: "food",
      price: 100,
      modifier: 1,
      number: 0,
      image: 'food.png',
      index: 0
    },
    {
      name: "toy",
      price: 3000,
      modifier: 10,
      number: 0,
      image: 'bone.png',
      index: 1
    },
    {
      name: "basket",
      price: 50000,
      modifier: 50,
      number: 0,
      image: 'basket.png',
      index: 2
    },
    {
      name: "female_dog",
      price: 600000,
      modifier: 100,
      number: 0,
      image: 'female-dog.gif',
      index: 3
    },
    {
      name: "slave_cat",
      price: 20000000,
      modifier: 500,
      number: 0,
      image: 'slave-cat.gif',
      index: 4
    },
    {
      name: "park",
      price: 100000000,
      modifier: 10000,
      number: 0,
      image: 'park.gif',
      index: 5
    }]

};

const reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ("INCREMENT_LOVE"):
      newState.love += newState.lovePerSecond;
      newState.totalLoveEver += newState.lovePerSecond
      break;
    case ("ADD_LOVE"):
      newState.love++;
      break;
    case ("ADD_ITEMS"):
      if (newState.love >= newState.items[action.index].price) {
        newState.love -= newState.items[action.index].price;
        newState.lovePerSecond += newState.items[action.index].modifier;
        newState.items[action.index].price += newState.items[action.index].price * 0.15;
        newState.items[action.index].number++;
      }
    default:
  }
  return newState;
};

export default reducer;
