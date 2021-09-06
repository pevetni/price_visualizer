import React, { useRef, useState, useContext } from "react";
import kendo from "@progress/kendo-ui";
import { Spreadsheet } from "@progress/kendo-spreadsheet-react-wrapper";

import { PriceBandContext } from '../context/PriceBandContext'
import '../css/AustraliaPriceBand.css';


const AustraliaPriceBand = ({ tradingDay }) => {
    const MySpreadSheet = useRef();

   
    const { 
      prices, 
      setPrices, 
      pricesChanged, 
      setPricesChanged 
    } = useContext(PriceBandContext);

    const urlService = `http://localhost:8080/pricebands/${tradingDay}`

  /* DataSource  */
  const onRead = async (options) => {

    await fetch(urlService, {
      method: "GET",
      headers: {
          "Access-Control-Allow-Origin": "*",
          'Accept': 'application/json'
      },
    })
    .then(res => res.json())
    .then((data) => {
      options.success(data)
      console.log(data)
      setPrices(data)
    })
      .catch(error => options.error(error));
  }

  const onSubmit = (options) => {

    /* TODO: Invocar el Servicio de SAVE */
    fetch(urlService, {
      method: "PUT",
      headers: {
          "Access-Control-Allow-Origin": "*",
          'Accept': 'application/json'
      },
      body: {
        prices      }
    })
    .then(res => res.json())
    .then((data) => {
        options.success(data);
    }).catch(error => options.error(error));
  }

/* OnChanging */
const onChanging = (e) =>{
  console.log(`COLUMNA==> ${e.range._ref.bottomRight.col} FILA==> ${e.range._ref.bottomRight.row} VALOR ==> ${e.data}`)
  console.log(prices)
  
  switch (e.range._ref.bottomRight.col) {
    case 0:
      console.log("PB01");
      setPricesChanged([{ "PB01" : e.data }, ...pricesChanged]);
      break;
    case 1:
      console.log("PB02")
      setPricesChanged([{ "PB02" : e.data }, ...pricesChanged]);
      break;
    case 2:
      console.log("PB03")
      setPricesChanged([{ "PB03" : e.data }, ...pricesChanged]);
      break;
    case 3:
      console.log("PB04")
      setPricesChanged([{ "PB04" : e.data }, ...pricesChanged]);
      break;
    case 4:
      console.log("PB05")
      setPricesChanged([{ "PB05" : e.data }, ...pricesChanged]);
      break;
    case 5:
      console.log("PB06")
      setPricesChanged([{ "PB06" : e.data }, ...pricesChanged]);
      break;
    case 6:
      console.log("PB07")
      setPricesChanged([{ "PB07" : e.data }, ...pricesChanged]);
      break;
    case 7:
      console.log("PB08")
      setPricesChanged([{ "PB08" : e.data }, ...pricesChanged]);
      break;
    case 8:
      console.log("PB09")
      setPricesChanged([{ "PB09" : e.data }, ...pricesChanged]);
      break;
    case 9:
      console.log("PB10")
      setPricesChanged([{ "PB10" : e.data }, ...pricesChanged]);
      break;

  
    default:
      break;
  }
}

  /* DATASOURCE */
  const dataSource = new kendo.data.DataSource ({
    transport: {
      read: onRead
    },
    batch: true,
    schema: {
      model: {
        id: "ColumnID",
        fields: {
          PB01: { type: "number" },
          PB02: { type: "number" },
          PB03: { type: "number" },
          PB04: { type: "number" },
          PB05: { type: "number" },
          PB06: { type: "number" },
          PB07: { type: "number" },
          PB08: { type: "number" },
          PB09: { type: "number" },
          PB10: { type: "number" },
        }
      }
    }
  });

    let sheets = [
      {
        name: "Prices",
        dataSource: dataSource,
        frozenRows: 1,
        //mergedCells: ["K1:K2"],
        rows: [
          { cells: 
            [ 
              // { 
              //   index: 0,
              //   format: "[<999999999]###-###-####;###-####-####",
              //   textAlign: "center",
              //   value: "Price Band",
              //   verticalAlign: "center",
              //   borderBottom: { color: "black", size: 1 },
              //   borderLeft: { color: "black", size: 1 },
              //   borderTop: { color: "black", size: 1 },
              //   borderRight: { color: "black", size: 1 },
              //   bold: true,
              //   background: "#E4E7EA", 
              //   enable: false
              // },
              { 
                index: 0,
                textAlign: "center",
                //value: "PB01",
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
                //value: "PB02",
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
                //value: "PB03",
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
                //value: "PB04",
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
                //value: "PB05",
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
                //value: "PB06",
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
                //value: "PB07",
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
                //value: "PB08",
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
                //value: "PB09",
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
                //value: "PB10",
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
                textAlign: "center",
                //value: "PB10",
                verticalAlign: "center",
                borderBottom: { color: "black", size: 1 },
                borderLeft: { color: "black", size: 1 },
                //borderTop: { color: "black", size: 1 },
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
            ]
          },
          // { cells: 
          //   [
          //     {
          //       index: 0,
          //        validation: {
          //           dataType: "number",
          //           from: "B1",
          //           to:"C1",
          //           allowNulls: true,
          //           comparerType:"equalTo" ,
          //           type: "reject",
          //           titleTemplate: "Number validation error",
          //           messageTemplate: "The number have to be between"
          //       }
          //     },

          //   ]
          // }
        ],
        columns: 
          [
            {
              index: 0,
              width: 70,
            },
            {
              index: 1,
              width: 70,
            },
            {
              index: 2,
              width: 70,
            },
            {
              index: 3,
              width: 70,
            },
            {
              index: 4,
              width: 70,
            },
            {
              index: 5,
              width: 70,
            },
            {
              index: 6,
              width: 70,
            },
            {
              index: 7,
              width: 70,
            },
            {
              index: 8,
              width: 70,
            },
            {
              index: 9,
              width: 70,
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
        <Spreadsheet
          sheets={sheets}
          toolbar={false}
          sheetsbar={false}
          rows={2}
          columns={11}
          useCultureDecimals={true}
          ref={MySpreadSheet}
          changing={ onChanging }
        /> 
      </>
    );
}


export default AustraliaPriceBand;
