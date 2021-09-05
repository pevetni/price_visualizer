import { types } from "../types";

const initialState = {
  prices: [],
  pricesChanged: [],
};

export const priceBandReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.priceBandLoadPrices:
      return {
        ...state,
        prices: action.payload,
      };

    case types.priceBandChangePrices:
      return {
        ...state,
        pricesChanged: [action.payload, ...state.pricesChanged],
      };

    default:
      return state;
  }
};
