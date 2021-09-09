import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Button } from "@progress/kendo-react-buttons";


const initialDataState = {
    skip: 0,
    take: 10,
  };

const GridNew2 = () => {

    const [datos, setDatos] = useState([]);
    const urlService = `http://localhost:8080/action/registers`;

    const [page, setPage] = useState(initialDataState);

  const pageChange = (event) => {
    setPage(event.page);
  };
    

useEffect(() => {
    
     fetch(urlService, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Accept': 'application/json'
        },
      })
        .then(res => res.json())
        .then((data) => {
          console.log(data)
          setDatos(data)
        }).catch((error) => {
          console.error(error);
        });

}, [urlService])
  
return <Grid
            style={{
            height: '550px'
            }} 
            data={datos.slice(page.skip, page.take + page.skip)}
            skip={page.skip}
            take={page.take}
            total={datos.length}
            pageable={true}
            onPageChange={pageChange}
        >
        <GridColumn  
        cell={(props) => (
            <td>
            <Button icon="check" className="k-icon-md k-color-success" />
            <Button icon="cancel" className="k-icon-md k-color-error"/>
            <Button icon="warning" className="k-icon-md k-color-warning" />
            <Button icon="flip-vertical" className="k-icon-md k-color-info" />
            </td>
          )}
        />
        <GridColumn field="session" title="Session" />
        <GridColumn field="EeecutedAt" title="Executed at"  />
        <GridColumn field="EeecutedBy" title="Executed by" />
        <GridColumn field="sentAt" title="Sent at" />
        <GridColumn field="sentBy" title="Sent by" />
        <GridColumn field="strategy" title="Strategy" />
        <GridColumn

        cell={(props) => (
          <td>
            <input
              disabled={false}
              type="checkbox"
              checked={props.dataItem[props.field || ""]}
            />
          </td>
        )}
      />

      
        
      </Grid>;
};

export default GridNew2;