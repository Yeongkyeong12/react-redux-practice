export function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
}
