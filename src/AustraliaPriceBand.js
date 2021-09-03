import React, { useRef, useState, useEffect } from "react";
import "@progress/kendo-ui";
import { Spreadsheet } from "@progress/kendo-spreadsheet-react-wrapper";
import jszip from "jszip";

import './AustraliaPriceBand.css'; 
import { SaveBtn } from "./buttons/SaveBtn";
import { ResetBtn } from "./buttons/ResetBtn";
import { ClearBtn } from "./buttons/ClearBtn";

const AustraliaPriceBand = ({ tradingDay }) => {
    const MySpreadSheet = useRef();

    const [pricesBands, setPricesBands] = useState([]);

    const urlService = `http://localhost:8080/pricebands/${tradingDay}`
  
  //Fill Data
  useEffect(() => {
    
    window.JSZip = jszip;
    // This is the component instace for using methods
    console.log(MySpreadSheet.current.widgetInstance);

      fetch(urlService, {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Accept': 'application/json'
        },
      })
      .then(res => res.json())
      .then((data) => {
          setPricesBands({ priceBands: data })
          console.log(data);
        })
        .catch(error => console.log('error', error));

  }, [urlService]);


  // /* onChanging */
  // const onChange = ({ data, range }) => {
  //   console.log(data)
  //   console.log(range)
  // }

  // /* DataSource  */
  // const onRead = () => {
  //   console.log("Clic OnRead!")
  // }

  // const onSubmit = () => {
  //   console.log("Clic onSubmit!")
  // }

  // const dataSource = DataSource({
  //   transport: {
  //     read: onRead,
  //     submit: onSubmit
  //   },
  //   batch: true,
  //   change: function() {
  //     $("#cancel, #save").toggleClass("k-state-disabled", !this.hasChanges());
  //   },
  //   schema: {
  //     model: {
  //       id: "ColumnID",
  //       fields: {
  //         PB01: { type: "number" },
  //         PB02: { type: "number" },
  //         PB03: { type: "number" },
  //         PB04: { type: "number" },
  //         PB05: { type: "number" },
  //         PB06: { type: "number" },
  //         PB07: { type: "number" },
  //         PB08: { type: "number" },
  //         PB09: { type: "number" },
  //         PB10: { type: "number" },
  //       }
  //     }
  //   }
  // });

    const sheets = [
      {
        frozenRows: 2,
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
                enable: false
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
                rowSpan: 3,
                enable: false
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
                enable: false
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
                enable: false 
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
                enable: false 
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
                enable: false 
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
                enable: false 
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
                enable: false 
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
                enable: false 
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
                enable: false 
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
                enable: false 
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
                enable: false 
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
                    messageTemplate: "The number have to be between"
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

    return (
      <>
        <SaveBtn tradingDay={tradingDay} />
        <ResetBtn />
        <ClearBtn />
        <Spreadsheet
          rows={3}
          columns={11}
          sheets={sheets}
          toolbar={false}
          sheetsbar={false}
          ref={MySpreadSheet}
          changing={ (e) => console.log("Clic") }
          
        /> 
      </>
    );
}


export default AustraliaPriceBand;
