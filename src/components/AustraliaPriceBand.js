import React, { useRef, useContext } from "react";
import kendo from "@progress/kendo-ui";
import { Spreadsheet } from "@progress/kendo-spreadsheet-react-wrapper";

import { PriceBandContext } from '../context/PriceBandContext'
import '../css/AustraliaPriceBand.css';

const defaultCellStyle = {
  textAlign: "center",
  verticalAlign: "center",
  borderBottom: { color: "black", size: 1 },
  borderLeft: { color: "black", size: 1 },
  borderTop: { color: "black", size: 1 },
  borderRight: { color: "black", size: 1 },
  bold: true,
  background: "#E4E7EA",
  enable: false
}

const AustraliaPriceBand = ({ tradingDay, urlService }) => {
  const MySpreadSheet = useRef();
  const datos = [];

  const {
    prices,
    setPrices,
    pricesChanged,
    setPricesChanged
  } = useContext(PriceBandContext);

  urlService = `${ urlService }/${ tradingDay }`

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
        options.success(data);
        datos.push(data);
        console.log(datos)
        setPrices(data)
      }).catch((error) => {
        options.error(error);
      });
  }


  /* OnChanging */
  const onChanging = (e) => {
    console.log(`COLUMNA==> ${e.range._ref.bottomRight.col} FILA==> ${e.range._ref.bottomRight.row} VALOR ==> ${e.data}`)
    console.log(prices)

    switch (e.range._ref.bottomRight.col) {
      case 0:
        console.log("PB01");
        setPricesChanged([{ "columnId": "PB01", "price": e.data }, ...pricesChanged]);
        break;
      case 1:
        console.log("PB02")
        setPricesChanged([{ "columnId": "PB02", "price": e.data }, ...pricesChanged]);
        break;
      case 2:
        console.log("PB03")
        setPricesChanged([{ "columnId": "PB03", "price": e.data }, ...pricesChanged]);
        break;
      case 3:
        console.log("PB04")
        setPricesChanged([{ "columnId": "PB04", "price": e.data }, ...pricesChanged]);
        break;
      case 4:
        console.log("PB05")
        setPricesChanged([{ "columnId": "PB05", "price": e.data }, ...pricesChanged]);
        break;
      case 5:
        console.log("PB06")
        setPricesChanged([{ "columnId": "PB06", "price": e.data }, ...pricesChanged]);
        break;
      case 6:
        console.log("PB07")
        setPricesChanged([{ "columnId": "PB07", "price": e.data }, ...pricesChanged]);
        break;
      case 7:
        console.log("PB08")
        setPricesChanged([{ "columnId": "PB08", "price": e.data }, ...pricesChanged]);
        break;
      case 8:
        console.log("PB09")
        setPricesChanged([{ "columnId": "PB09", "price": e.data }, ...pricesChanged]);
        break;
      case 9:
        console.log("PB10")
        setPricesChanged([{ "columnId": "PB10", "price": e.data }, ...pricesChanged]);
        break;


      default:
        break;
    }
  }

  /* DATASOURCE */
  const dataSource = new kendo.data.DataSource({
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
      mergedCells: ["A1:J1", "K1:K2"],
      rows: [
        {
          cells:
            [
              {
                ...defaultCellStyle,
                index: 0,
                format: "[<999999999]###-###-####;###-####-####",
                value: "Price Band"
              },
              {
                ...defaultCellStyle,
                index: 10,
                format: "[<999999999]###-###-####;###-####-####",
                value: "Daily energy constrain (MWh)",
                rowSpan: 3,
              }
            ]
        },
        {
          cells:
            [
              {
                ...defaultCellStyle,
                index: 0,
                value: "PB01"
              },
              {
                ...defaultCellStyle,
                index: 1,
                value: "PB02"
              },
              {
                ...defaultCellStyle,
                index: 2,
                value: "PB03"
              },
              {
                ...defaultCellStyle,
                index: 3,
                value: "PB04"
              },
              {
                ...defaultCellStyle,
                index: 4,
                value: "PB05"
              },
              {
                ...defaultCellStyle,
                index: 5,
                value: "PB06"
              },
              {
                ...defaultCellStyle,
                index: 6,
                value: "PB07"
              },
              {
                ...defaultCellStyle,
                index: 7,
                value: "PB08"
              },
              {
                ...defaultCellStyle,
                index: 8,
                value: "PB09"
              },
              {
                ...defaultCellStyle,
                index: 9,
                value: "PB10"
              }
            ]
        }
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

  dataSource.one("requestEnd", () => {
    setTimeout(() => {
      if (datos.length > 0) {
        let sheet = MySpreadSheet.current.widgetInstance.activeSheet();
        sheet.range("A1").value("Price Bands");
        sheet.range("A2").value("PB01");
        sheet.range("B2").value("PB02");
        sheet.range("C2").value("PB03");
        sheet.range("D2").value("PB04");
        sheet.range("E2").value("PB05");
        sheet.range("F2").value("PB06");
        sheet.range("G2").value("PB07");
        sheet.range("H2").value("PB08");
        sheet.range("I2").value("PB09");
        sheet.range("J2").value("PB10");
        //
        sheet.range("A3").value(datos[0].PB01);
        sheet.range("B3").value(datos[0].PB02);
        sheet.range("C3").value(datos[0].PB03);
        sheet.range("D3").value(datos[0].PB04);
        sheet.range("E3").value(datos[0].PB05);
        sheet.range("F3").value(datos[0].PB06);
        sheet.range("G3").value(datos[0].PB07);
        sheet.range("H3").value(datos[0].PB08);
        sheet.range("I3").value(datos[0].PB09);
        sheet.range("J3").value(datos[0].PB10);
      }
    })
  })

  return (
    <>
      <Spreadsheet
        sheets={sheets}
        toolbar={false}
        sheetsbar={false}
        rows={3}
        columns={11}
        useCultureDecimals={true}
        ref={MySpreadSheet}
        changing={onChanging}
      />
    </>
  );
}


export default AustraliaPriceBand;
