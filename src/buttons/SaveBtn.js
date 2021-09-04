import React from 'react'
import { Button } from "@progress/kendo-react-buttons";

export const SaveBtn = ({urlService, data}) => {

  const onSave = (e) => {
    /* Llamado al Servicio de Save */
    // fetch(urlService, {
    //   method: "PUT",
    //   headers: {
    //       "Access-Control-Allow-Origin": "*",
    //   },
    // })
    // .then(res => res.json())
    // .then((data) => {
    //     console.log(data);
    //   })
    // .catch(error => console.log('error', error));

    console.log(`Method: PUT. Url:  ${urlService}`);
  }
    return (
          <Button
            id="saveBtn" 
            icon="save" 
            look="outline"
            onClick={ onSave }
            >
          Save
          </Button>
    )
}
