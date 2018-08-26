import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { reducer as indexReducer } from './Index/store';

export default combineReducers({
  indexReducer,
  routing: routerReducer,
})