import { createStore } from "./redux.js";
import { reducer } from "./reducer.js";

const store = createStore(reducer);

store.subscribe(function () {
  console.log(store.getState());
});

store.dispatch({ type: "increase" });
store.dispatch({ type: "increase" });
