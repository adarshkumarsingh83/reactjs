const dataInit = {
  count: 0
};

const renderFunction = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.value };

    case "decrement":
      return { ...state, count: state.count - action.value };

    case "reset":
      return { ...state, count: action.value };

    default:
      return state;
  }
};

export { dataInit, renderFunction };
