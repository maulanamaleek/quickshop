export const ELEKTRONIK = "ELEKTRONIK";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const SUB_QUANTITY = "SUB_QUANTITY";
export const CLEAR = "CLEAR";
export const ALL = "ALL";
export const PAKAIAN = "PAKAIAN";
export const SEPATU = "SEPATU";
export const AKSESORIS = "AKSESORIS";
export const HOBI = "HOBI";
export const PELIHARAAN = "PELIHARAAN";
export const SEARCH = "SEARCH";

export const searchFilter = (value) => {
  return {
    type: SEARCH,
    value,
  };
};

export const filterPeliharaan = (category) => {
  return {
    type: PELIHARAAN,
    category,
  };
};

export const filterHobi = (category) => {
  return {
    type: HOBI,
    category,
  };
};

export const filterAksesoris = (category) => {
  return {
    type: AKSESORIS,
    category,
  };
};

export const filterSepatu = (category) => {
  return {
    type: SEPATU,
    category,
  };
};

export const filterElektronik = (category) => {
  return {
    type: ELEKTRONIK,
    category,
  };
};

export const filterALL = (category) => {
  return {
    type: ALL,
    category,
  };
};

export const filterPakaian = (category) => {
  return {
    type: PAKAIAN,
    category,
  };
};

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
