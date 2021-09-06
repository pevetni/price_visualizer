import React, { useState } from 'react'
import { GeneratedOffers } from './GeneratedOffers'
import { PriceBandContext } from '../context/PriceBandContext'

export const MainApp = () => {

    const [prices, setPrices] = useState({});
    const [pricesChanged, setPricesChanged] = useState([]);

    return (

        <PriceBandContext.Provider value={{
            prices,
            setPrices,
            pricesChanged,
            setPricesChanged
        }}>
            <GeneratedOffers />
        </PriceBandContext.Provider>
    )
}