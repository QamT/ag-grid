import { createStore } from 'redux';

import reducer from './containers/App/reducer';

const store = createStore(reducer);

export default store;
