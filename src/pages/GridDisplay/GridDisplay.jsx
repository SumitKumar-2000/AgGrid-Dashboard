import React from 'react'
import HotelBookings from '../../data/hotel_bookings'

// AgGridReact
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';




const GridDisplay = () => {

  const rowData = [...HotelBookings]
  const columnDefs = [
    {field : "hotel"},
    {field : "arrival_date_year", sortable: true, floatingFilter: true, filter: true},
    {field : "arrival_date_month", filter: true},
    {field : "arrival_date_day_of_month", sortable: true, filter: 'agTextColumnFilter'},
    {field : "adults", sortable: true, filter: true},
    {field : "children", sortable: true, filter: 'agNumberColumnFilter'},
    {field : "babies", sortable: true, filter: 'agNumberColumnFilter'},
    {field : "country", sortable: true, filter: 'agTextColumnFilter'}
  ];
  
  const defaultColDef = {
    floatingFilter: true,
    flex: 1,
  }

  return (
    <div className='ag-theme-alpine' style={{height: "95%", width: "100%"}}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        animateRows={true}
        defaultColDef={defaultColDef}
      />
    </div>
  )
}

export default GridDisplay