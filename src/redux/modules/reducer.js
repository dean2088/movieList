import { combineReducers } from 'redux';

import movies from './movies';

const rootReducer = combineReducers({
  //state: (state = {})=>state
  movies
});

export default rootReducer;
