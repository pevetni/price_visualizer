import React from "react";
import "@progress/kendo-ui";
import { Spreadsheet } from "@progress/kendo-spreadsheet-react-wrapper";
import jszip from "jszip";

import './AustraliaPriceBand.css'; 
import { SaveBtn } from "./buttons/SaveBtn";
import { ResetBtn } from "./buttons/ResetBtn";
import { ClearBtn } from "./buttons/ClearBtn";


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
                value: "PB01",
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
                value: "PB02",
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
                value: "PB03",
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
                value: "PB04",
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
                value: "PB05",
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
                value: "PB06",
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
                value: "PB07",
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
                value: "PB08",
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
                value: "PB09",
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
               
            
            ],
          },
          { cells: 
            [
              {
                index: 0,
                 validation: {
                    dataType: "number",
                    from: "B1",
                    to:"C1",
                    allowNulls: true,
                    comparerType:"equalTo" ,
                    type: "reject",
                    titleTemplate: "Number validation error",
                    messageTemplate: "The number have to be between {0} and {1}"
                }
              },

            ]
          }
        ],
        columns: 
          [
            {
              index: 0,
              width: 50,
            },
            {
              index: 1,
              width: 50,
            },
            {
              index: 2,
              width: 50,
            },
            {
              index: 3,
              width: 50,
            },
            {
              index: 4,
              width: 50,
            },
            {
              index: 5,
              width: 50,
            },
            {
              index: 6,
              width: 50,
            },
            {
              index: 7,
              width: 50,
            },
            {
              index: 8,
              width: 50,
            },
            {
              index: 9,
              width: 50,
            }
            ,
            {
              index: 10,
              width: 250,
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
        <div className="row">
          <div className="col-md-4">
            <SaveBtn />
          </div>
          <div className="col-md-4">
            <ResetBtn />
          </div>
          <div className="col-md-4">
            <ClearBtn />
          </div>
        </div>
      </div>
    );
  }
}

export default AustraliaPriceBand;
