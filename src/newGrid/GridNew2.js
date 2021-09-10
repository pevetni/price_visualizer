import React, { useEffect, useState } from 'react';
import { filterBy } from "@progress/kendo-data-query";
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Button } from "@progress/kendo-react-buttons";


const initialDataState = {
    skip: 0,
    take: 10,
  };

const initialFilter = {
    logic: "and",
    filters: [
      {
        field: "session",
        operator: "contains",
        value: "",
      },
    ],
  };

const GridNew2 = () => {

    const [datos, setDatos] = useState([]);
    const [filter, setFilter] = useState(initialFilter);

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
            data={filterBy(datos, filter)}
            skip={page.skip}
            take={page.take}
            total={datos.length}
            pageable={true}
            onPageChange={pageChange}
            filterable={true}
            filter={filter}
            onFilterChange={(e) => setFilter(e.filter)}
        >
        <GridColumn filterable={false} 
        cell={(props) => (
            <td>
            <Button icon="check" className="k-icon-md k-color-success" />
            <Button icon="cancel" className="k-icon-md k-color-error"/>
            <Button icon="warning" className="k-icon-md k-color-warning" />
            <Button icon="flip-vertical" className="k-icon-md k-color-info" />
            </td>
          )}
        />
        <GridColumn field="session" title="Session" filter="text"/>
        <GridColumn field="executedAt" title="Executed at"  filter="date"/>
        <GridColumn field="executedBy" title="Executed by" filter="text"/>
        <GridColumn field="sentAt" title="Sent at" filter="date"/>
        <GridColumn field="sentBy" title="Sent by" filter="text"/>
        <GridColumn field="strategy" title="Strategy" filter="text"/>
        <GridColumn filterable={false} 

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