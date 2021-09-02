import React from "react";
import "@progress/kendo-ui";
import { Spreadsheet } from "@progress/kendo-spreadsheet-react-wrapper";
import jszip from "jszip";

import './AustraliaPriceBand.css'; 


class AustraliaPriceBand extends React.Component {
  MySpreadSheet = React.createRef();
  constructor(props) {
    super(props);
    this.sheets = [
      {
        mergedCells: ["A1:J1", "K1:K2"],
        rows: [
          { cells: 
            [ 
              { 
                index: 0,
                format: "[<999999999]###-###-####;###-####-####",
                textAlign: "center",
                value: "Price Band",
                verticalAlign: "center",
                borderBottom: { color: "black", size: 1 },
                borderLeft: { color: "black", size: 1 },
                borderTop: { color: "black", size: 1 },
                borderRight: { color: "black", size: 1 },
                bold: true,
                background: "#E4E7EA", 
              },
              { 
                index: 10,
                format: "[<999999999]###-###-####;###-####-####",
                textAlign: "center",
                value: "Daily energy constrain (MWh)",
                verticalAlign: "center",
                borderBottom: { color: "black", size: 1 },
                borderLeft: { color: "black", size: 1 },
                borderTop: { color: "black", size: 1 },
                borderRight: { color: "black", size: 1 },
                bold: true,
                background: "#E4E7EA",
                rowSpan: 3
              }  
            ],
            height: 40,
          },
          { cells: 
            [ 
              { 
                index: 0,
                textAlign: "center",
                value: "PB1",
                verticalAlign: "center",
                borderBottom: { color: "black", size: 1 },
                borderLeft: { color: "black", size: 1 },
                borderTop: { color: "black", size: 1 },
                borderRight: { color: "black", size: 1 },
                bold: true,
                background: "#E4E7EA", 
              },
              { 
                index: 1,
                textAlign: "center",
                value: "PB2",
                verticalAlign: "center",
                borderBottom: { color: "black", size: 1 },
                borderLeft: { color: "black", size: 1 },
                borderTop: { color: "black", size: 1 },
                borderRight: { color: "black", size: 1 },
                bold: true,
                background: "#E4E7EA", 
              },
              { 
                index: 2,
                textAlign: "center",
                value: "PB3",
                verticalAlign: "center",
                borderBottom: { color: "black", size: 1 },
                borderLeft: { color: "black", size: 1 },
                borderTop: { color: "black", size: 1 },
                borderRight: { color: "black", size: 1 },
                bold: true,
                background: "#E4E7EA", 
              },
              { 
                index: 3,
                textAlign: "center",
                value: "PB4",
                verticalAlign: "center",
                borderBottom: { color: "black", size: 1 },
                borderLeft: { color: "black", size: 1 },
                borderTop: { color: "black", size: 1 },
                borderRight: { color: "black", size: 1 },
                bold: true,
                background: "#E4E7EA", 
              },
              { 
                index: 4,
                textAlign: "center",
                value: "PB5",
                verticalAlign: "center",
                borderBottom: { color: "black", size: 1 },
                borderLeft: { color: "black", size: 1 },
                borderTop: { color: "black", size: 1 },
                borderRight: { color: "black", size: 1 },
                bold: true,
                background: "#E4E7EA", 
              },
              { 
                index: 5,
                textAlign: "center",
                value: "PB6",
                verticalAlign: "center",
                borderBottom: { color: "black", size: 1 },
                borderLeft: { color: "black", size: 1 },
                borderTop: { color: "black", size: 1 },
                borderRight: { color: "black", size: 1 },
                bold: true,
                background: "#E4E7EA", 
              },
              { 
                index: 6,
                textAlign: "center",
                value: "PB7",
                verticalAlign: "center",
                borderBottom: { color: "black", size: 1 },
                borderLeft: { color: "black", size: 1 },
                borderTop: { color: "black", size: 1 },
                borderRight: { color: "black", size: 1 },
                bold: true,
                background: "#E4E7EA", 
              },
              { 
                index: 7,
                textAlign: "center",
                value: "PB8",
                verticalAlign: "center",
                borderBottom: { color: "black", size: 1 },
                borderLeft: { color: "black", size: 1 },
                borderTop: { color: "black", size: 1 },
                borderRight: { color: "black", size: 1 },
                bold: true,
                background: "#E4E7EA", 
              },
              { 
                index: 8,
                textAlign: "center",
                value: "PB9",
                verticalAlign: "center",
                borderBottom: { color: "black", size: 1 },
                borderLeft: { color: "black", size: 1 },
                borderTop: { color: "black", size: 1 },
                borderRight: { color: "black", size: 1 },
                bold: true,
                background: "#E4E7EA", 
              },
              { 
                index: 9,
                textAlign: "center",
                value: "PB10",
                verticalAlign: "center",
                borderBottom: { color: "black", size: 1 },
                borderLeft: { color: "black", size: 1 },
                borderTop: { color: "black", size: 1 },
                borderRight: { color: "black", size: 1 },
                bold: true,
                background: "#E4E7EA", 
              }, 
               
            
            ] 
          }
        ],
        columns: 
          [
            {
              index: 0,
              width: 40,
            },
            {
              index: 1,
              width: 40,
            },
            {
              index: 2,
              width: 40,
            },
            {
              index: 3,
              width: 40,
            },
            {
              index: 4,
              width: 40,
            },
            {
              index: 5,
              width: 40,
            },
            {
              index: 6,
              width: 40,
            },
            {
              index: 7,
              width: 40,
            },
            {
              index: 8,
              width: 40,
            },
            {
              index: 9,
              width: 40,
            }
            ,
            {
              index: 10,
              width: 200,
            }
          ]
      },
    ];
  }
  componentDidMount() {
    window.JSZip = jszip;
    // This is the component instace for using methods
    console.log(this.MySpreadSheet.current.widgetInstance);
  }
  render() {
    return (
      <div>
        <Spreadsheet
          rows={3}
          columns={11}
          sheets={this.sheets}
          toolbar={false}
          sheetsbar={false}
          ref={this.MySpreadSheet}
          
        />
      </div>
    );
  }
}

export default AustraliaPriceBand;
