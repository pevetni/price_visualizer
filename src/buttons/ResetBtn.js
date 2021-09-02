import React from 'react'
import { Button } from "@progress/kendo-react-buttons";

export const ResetBtn = () => {

  const onReset = (e) => {
    console.log("Clic on Reset Button!")
  }

    return (
          <Button 
            icon="reset" 
            look="outline"
            onClick={ onReset }
            >
            Reset
          </Button>
    )
}
