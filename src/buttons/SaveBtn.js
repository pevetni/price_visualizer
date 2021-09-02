import React from 'react'
import { Button } from "@progress/kendo-react-buttons";

export const SaveBtn = () => {

  const onSave = (e) => {
    console.log("Clic on Save Button!")
  }
    return (
          <Button 
            icon="save" 
            look="outline"
            onClick={ onSave }
            >
          Save
          </Button>
    )
}
