export const VisibilityFilters = {
  ALL: "ALL",
  ELEKTRONIK: "ELEKTRONIK",
  BAJU: "BAJU",
  CELANA: "CELANA",
};

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const SUB_QUANTITY = "SUB_QUANTITY";
export const CLEAR = "CLEAR";

export const clearCart = () => {
  return {
    type: CLEAR,
  };
};

export const addItem = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};
export const subQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
