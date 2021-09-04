import React from 'react'
import { Button } from "@progress/kendo-react-buttons";

export const ResetBtn = ({urlService}) => {

  const onReset = (e) => {
    /* Llamado al Servicio de DELETE */
  //   fetch(urlService, {
  //     method: "DELETE",
  //     headers: {
  //         "Access-Control-Allow-Origin": "*",
  //     },
  //   })
  //   .then(res => res.json())
  //   .then((data) => {
  //       console.log(data);
  //     })
  //   .catch(error => console.log('error', error));

  console.log(`Method: DELETE. Url: ${urlService}`);

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
