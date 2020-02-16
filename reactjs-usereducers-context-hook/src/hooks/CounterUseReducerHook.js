const dataInit = {
  count: 0
};

const renderFunction = (state, action) => {
  switch (action) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return dataInit;

    default:
      return state;
  }
};

export { dataInit, renderFunction };
