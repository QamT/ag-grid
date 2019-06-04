import * as types from './constants';

const initialState = {
  columnDefs: [
    {
      headerName: "Name",
      field: "name",
      sortable: true,
      filter: true
    },
    {
      headerName: "Country",
      field: "country",
      sortable: true,
      filter: true
    },
    {
      headerName: "State",
      field: "state",
      sortable: true,
      filter: true
    },
    {
      headerName: "Zip Code",
      field: "zipCode",
      sortable: true,
      filter: true
    }
  ],
  rowData: [
    {
      name: 'Qamar',
      country: 'United States',
      state: 'Texas',
      zipCode: 77479
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_DATA:
      return {
        ...state,
        rowData: [...state.rowData, action.data]
      };

    case types.UPDATE_DATA:
      return {
        ...state,
        rowData: state.rowData.map(row => row === action.data ? { ...action.data } : row)
      };

    case types.DELETE_DATA:
      return {
        ...state,
        rowData: state.rowData.filter(row => row !== action.data)
      };

    default:
      return state;
  }
}

export default reducer;


