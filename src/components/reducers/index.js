import { initState } from "./initState";
import { ADD_TO_CART, SUB_QUANTITY, ADD_QUANTITY, CLEAR } from "../actions";

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let items = state.products.find((item) => item.id === action.id);
      items.total = items.quantity * items.price;
      return {
        ...state,
        total: state.total + items.total,
        carts: state.carts + items.quantity,
        added: [...state.added, items],
      };

    case ADD_QUANTITY:
      let Qitems = state.products.find((item) => item.id === action.id);
      Qitems.quantity += 1;
      Qitems.total = Qitems.quantity * Qitems.price;
      let mapp = state.products.map((item) => {
        if (item.id === action.id) {
          return (item = Qitems);
        } else {
          return item;
        }
      });
      mapp.sort((a, b) => a.id - b.id);
      console.log(mapp);
      return { ...state, products: mapp };

    case SUB_QUANTITY:
      let selected = state.products.find((item) => action.id === item.id);
      if (selected.quantity === 1) {
        return { ...state, products: [...state.products, selected] };
      } else {
        selected.quantity -= 1;
        selected.total = selected.quantity * selected.price;
        return { ...state, products: [...state.products, selected] };
      }

    case CLEAR:
      let resetProduct = state.products.forEach((item) => {
        item.quantity = 1;
      });
      return {
        ...state,
        products: resetProduct,
        carts: 0,
        added: [],
      };

    default:
      return state;
  }
}
