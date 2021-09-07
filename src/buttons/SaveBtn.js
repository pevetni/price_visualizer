import React, { useContext } from 'react'
import { Button } from "@progress/kendo-react-buttons";

import { PriceBandContext } from '../context/PriceBandContext'

export const SaveBtn = ( {urlService, tradingDay } ) => {


  const {  pricesChanged } = useContext(PriceBandContext);

  const onSave = async(e) => {
    /* Llamado al Servicio de Save */
    await fetch(`${urlService}/${tradingDay}`, {
      method: "PUT",
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type" : "application/json"
      },
      body: JSON.stringify(pricesChanged)
    })
    .then(res => res.json())
    .then((data) => {
        console.log(data);
      })
    .catch(error => console.log('error', error));

  }
    return (
          <Button
            id="saveBtn" 
            icon="save" 
            look="outline"
            onClick={ onSave }
            title="Save"
            />
          
    )
}
