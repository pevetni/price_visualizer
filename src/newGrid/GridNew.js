import React, { useRef } from "react";
import kendo from "@progress/kendo-ui";
import { Spreadsheet } from "@progress/kendo-spreadsheet-react-wrapper";

import '../css/GridNew.css';

const defaultCellStyle = {
  textAlign: "center",
  verticalAlign: "center",
  borderBottom: { color: "black", size: 1 },
  borderLeft: { color: "black", size: 1 },
  borderTop: { color: "black", size: 1 },
  borderRight: { color: "black", size: 1 },
  bold: true,
  background: "#E4E7EA",
  enable: false,
  color: "green"
}

const defaultRowsStyle = {
  textAlign: "center",
  verticalAlign: "center",
  borderBottom: { color: "black", size: 1 },
  borderTop: { color: "black", size: 1 },
  enable: false,
}

const GridNew = () => {
  const MySpreadSheet = useRef();

  /* DataSource  */
  const onRead = async (options) => {

  }

  /* OnChanging */
  const onChanging = (e) => {
    console.log(`COLUMNA==> ${e.range._ref.bottomRight.col} FILA==> ${e.range._ref.bottomRight.row} VALOR ==> ${e.data}`)
    console.log(e)
  }

  let sheets = [
    {
        name: "Backlog",
        filter: {
          ref: "A1:F15",
          columns:[]
      },
        columns: [
            { width: 200 },
            { width: 200 },
            { width: 200 },
            { width: 200 },
            { width: 200 },
            { width: 200 }
        ],
        rows: [
        
        {
            cells: [
            {
              ...defaultCellStyle,
                value: "Session"
            },
            {
              ...defaultCellStyle,
                value: "Executed at"
            },
            {
              ...defaultCellStyle,
                value: "Executed by"
            },
            {
              ...defaultCellStyle,
                value: "Sent at"
            },
            {
              ...defaultCellStyle,
                value: "Sent by"
            },
            {
              ...defaultCellStyle,
                value: "Strategy"
            }
            ]
        },
        {
            cells: [
            {
              ...defaultRowsStyle,  
              value: "M1",
            },
            {
              ...defaultRowsStyle,
                value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
            },
            {
              ...defaultRowsStyle,
                value: "",
            },
            {
              ...defaultRowsStyle,
                value: ""
            },
            {
              ...defaultRowsStyle,
                value: ""
            },
            {
              ...defaultRowsStyle,
                value: "DEFAULT",
            }
            ]
        },
        {
          cells: [
          {
            ...defaultRowsStyle,  
            value: "M1",
          },
          {
            ...defaultRowsStyle,
              value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
          },
          {
            ...defaultRowsStyle,
              value: "",
          },
          {
            ...defaultRowsStyle,
              value: ""
          },
          {
            ...defaultRowsStyle,
              value: ""
          },
          {
            ...defaultRowsStyle,
              value: "DEFAULT",
          }
          ]
      },
      {
        cells: [
        {
          ...defaultRowsStyle,  
          value: "M1",
        },
        {
          ...defaultRowsStyle,
            value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
        },
        {
          ...defaultRowsStyle,
            value: "",
        },
        {
          ...defaultRowsStyle,
            value: ""
        },
        {
          ...defaultRowsStyle,
            value: ""
        },
        {
          ...defaultRowsStyle,
            value: "DEFAULT",
        }
        ]
    },
    {
      cells: [
      {
        ...defaultRowsStyle,  
        value: "M1",
      },
      {
        ...defaultRowsStyle,
          value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
      },
      {
        ...defaultRowsStyle,
          value: "",
      },
      {
        ...defaultRowsStyle,
          value: ""
      },
      {
        ...defaultRowsStyle,
          value: ""
      },
      {
        ...defaultRowsStyle,
          value: "AGRESSIVE",
      }
      ]
  },
  {
    cells: [
    {
      ...defaultRowsStyle,  
      value: "M1",
    },
    {
      ...defaultRowsStyle,
        value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "",
    },
    {
      ...defaultRowsStyle,
        value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "D. Garrido"
    },
    {
      ...defaultRowsStyle,
        value: "AGRESSIVE",
    }
    ]
  },
  {
    cells: [
    {
      ...defaultRowsStyle,  
      value: "M1",
    },
    {
      ...defaultRowsStyle,
        value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "",
    },
    {
      ...defaultRowsStyle,
        value: "",
    },
    {
      ...defaultRowsStyle,
        value: ""
    },
    {
      ...defaultRowsStyle,
        value: "AGRESSIVE",
    }
    ]
  },
  {
    cells: [
    {
      ...defaultRowsStyle,  
      value: "M2",
    },
    {
      ...defaultRowsStyle,
        value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "",
    },
    {
      ...defaultRowsStyle,
        value: "",
    },
    {
      ...defaultRowsStyle,
        value: ""
    },
    {
      ...defaultRowsStyle,
        value: "DEFAULT",
    }
    ]
  },
  {
    cells: [
    {
      ...defaultRowsStyle,  
      value: "M2",
    },
    {
      ...defaultRowsStyle,
        value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "",
    },
    {
      ...defaultRowsStyle,
        value: "",
    },
    {
      ...defaultRowsStyle,
        value: ""
    },
    {
      ...defaultRowsStyle,
        value: "DEFAULT",
    }
    ]
  },
  {
    cells: [
    {
      ...defaultRowsStyle,  
      value: "M2",
    },
    {
      ...defaultRowsStyle,
        value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "",
    },
    {
      ...defaultRowsStyle,
      value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "D. Garrido"
    },
    {
      ...defaultRowsStyle,
        value: "STRATEGIA_M2",
    }
    ]
  },
  {
    cells: [
    {
      ...defaultRowsStyle,  
      value: "M3",
    },
    {
      ...defaultRowsStyle,
        value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "",
    },
    {
      ...defaultRowsStyle,
      value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "D. Garrido"
    },
    {
      ...defaultRowsStyle,
        value: "DEFAULT",
    }
    ]
  },
  {
    cells: [
    {
      ...defaultRowsStyle,  
      value: "M4",
    },
    {
      ...defaultRowsStyle,
        value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "",
    },
    {
      ...defaultRowsStyle,
      value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "D. Garrido"
    },
    {
      ...defaultRowsStyle,
        value: "DEFAULT",
    }
    ]
  },
  {
    cells: [
    {
      ...defaultRowsStyle,  
      value: "M5",
    },
    {
      ...defaultRowsStyle,
        value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "",
    },
    {
      ...defaultRowsStyle,
      value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "D. Garrido"
    },
    {
      ...defaultRowsStyle,
        value: "DEFAULT",
    }
    ]
  },
  {
    cells: [
    {
      ...defaultRowsStyle,  
      value: "M6",
    },
    {
      ...defaultRowsStyle,
        value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "",
    },
    {
      ...defaultRowsStyle,
      value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "D. Garrido"
    },
    {
      ...defaultRowsStyle,
        value: "DEFAULT",
    }
    ]
  },
  {
    cells: [
    {
      ...defaultRowsStyle,  
      value: "M7",
    },
    {
      ...defaultRowsStyle,
        value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "",
    },
    {
      ...defaultRowsStyle,
      value: new Date("6/30/2014 9:30"), format: "dd/MM/YYYY hh:mm",
    },
    {
      ...defaultRowsStyle,
        value: "D. Garrido"
    },
    {
      ...defaultRowsStyle,
        value: "DEFAULT",
    }
    ]
  }
        ]
    }];

  return (
    <>
      <Spreadsheet
        sheets={sheets}
        toolbar={false}
        sheetsbar={false}
        rows={14}
        columns={6}
        useCultureDecimals={true}
        ref={MySpreadSheet}
        changing={onChanging}
      />
    </>
  );
}


export default GridNew;
