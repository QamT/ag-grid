import React from 'react';
import { arrayOf, object } from 'prop-types';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const Grid = ({ columns, rows }) => (
  <div
    className="ag-theme-balham"
    style={{
      height: '600px',
      width: '700px'
    }}
  >
    <AgGridReact
      columnDefs={columns}
      rowData={rows}>
    </AgGridReact>
  </div>
);

Grid.propTypes = {
  column: arrayOf(object),
  row: arrayOf(object)
}

export default Grid;


