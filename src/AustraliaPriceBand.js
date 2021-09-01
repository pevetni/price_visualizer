import React from "react";
import "@progress/kendo-ui";
import { Spreadsheet } from "@progress/kendo-spreadsheet-react-wrapper";
import jszip from 'jszip'

class AustraliaPriceBand extends React.Component {
  MySpreadSheet = React.createRef();
  constructor(props) {
    super(props);
    this.sheets = [
      { 
        rows: [
          {
            cells: [
              {
                index: 0,
                format: "[<999999999]###-###-####;###-####-####",
                textAlign: "center",
                value: "Price Band",
                verticalAlign: "center",
                borderBottom: {color: "black", size: 1},
                borderLeft: {color: "black", size: 1},
                borderTop: {color: "black", size: 1},
                borderRight: {color: "black", size: 1},
                bold: true
              },
              {
                index: 2
              }
            ],
            height: 25
          }
        ],
        columns: [
          {
            index: 0,
            width: 100
          },
          {
            index: 1,
            width: 100
          }
        ]
      }
    ];
  }
  componentDidMount() {
    window.JSZip = jszip;
    // This is the component instace for using methods
    console.log(this.MySpreadSheet.current.widgetInstance)
  }
  render() {
    return (
      <div>
        <Spreadsheet rows={3} columns={11} sheets={this.sheets} toolbar={false} sheetsbar={false} ref={this.MySpreadSheet}/>
      </div>
    );
  }
}

export default AustraliaPriceBand;
