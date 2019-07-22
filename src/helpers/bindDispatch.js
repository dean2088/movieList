import { bindActionCreators } from 'redux';

export default function bindActions(actionCreators) {
  return dispatch => {  // eslint-disable-line
    return bindActionCreators(actionCreators, dispatch);
  };
}
