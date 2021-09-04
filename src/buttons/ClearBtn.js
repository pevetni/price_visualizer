import React from 'react'
import { Button } from "@progress/kendo-react-buttons";

export const ClearBtn = () => {

  const onClear = (e) => {
    console.log("Clic on Clear Button!")
  }
    return (
          <Button
            id="clearBtn"
            icon="clear" 
            look="outline"
            onClick={ onClear }
            >
            Clear
          </Button>
    )
}
