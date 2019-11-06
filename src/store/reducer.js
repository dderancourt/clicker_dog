const initialState = {
  love: 10,
  lovePerSecond: 0,
  lovePerClick: 0,
  totalLoveEver: 0,
  price: {
    food: 100,
    toy: 3000,
    basket: 50000,
    female_dog: 600000,
    slave_cat: 20000000,
    parc: 100000000
  },
  inventory: {
    food: 0,
    toy: 0,
    basket: 0,
    female_dog: 0,
    slave_cat: 0,
    parc: 0
  }
};

const reducer = (state = initialState, action) => {
  const newState = {
    ...state
  };
  if (action.type === "ADD_LOVE") {
    newState.love++;
  }

  return newState;
};

export default reducer;
