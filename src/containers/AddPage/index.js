import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddPage from './AddPage';
import { addData } from 'containers/App/actions';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addData,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(AddPage);
