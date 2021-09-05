import { types } from "../types";


/* Acción que se dispara con el onRead del Datasource */
export const priceBandLoaded = (prices) => ({
    type: types.priceBandLoadPrices,
    payload: prices
});

/* Acción que se dispara con el Changing del Spreadsheet */
export const priceBandChanged = (priceChanged) => ({
    type: types.priceBandChangePrices,
    payload: priceChanged
});


