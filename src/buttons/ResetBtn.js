import React from 'react'
import { Button } from "@progress/kendo-react-buttons";

export const ResetBtn = ({urlService, tradingDay}) => {

  const onReset = (e) => {
    /* Llamado al Servicio de DELETE */
   fetch(`${urlService}/${tradingDay}`, {
      method: "DELETE",
      headers: {
          "Access-Control-Allow-Origin": "*",
          'Accept': 'application/json'
      },
    })
    .then(res => res.text())
    .then((resp) => {
        console.log(resp);
        
      })
    .catch(error => console.error('Error:', error));
  }

    return (
          <Button
            id="resetBtn"
            icon="reset" 
            look="outline"
            onClick={ onReset }
            >
            Reset
          </Button>
    )
}
