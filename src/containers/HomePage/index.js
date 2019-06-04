import { connect } from 'react-redux';

import HomePage from './HomePage';

const mapStateToProps = state => ({
  columnDefs: state.columnDefs,
  rowData: state.rowData,
});

export default connect(mapStateToProps)(HomePage);
