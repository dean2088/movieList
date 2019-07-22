/**
 * Action Types
 */

export const LOAD = 'blank/LOAD';
export const LOAD_SUCCESS = 'blank/LOAD_SUCCESS';
export const LOAD_FAIL = 'blank/LOAD_FAIL';

/**
 * Initial State
 */
export const initialState = {
  loaded: false,
  loading: false,
  result: { entries: [] }
};

/**
 * Reducer
 */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        error: null,
        result: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

/**
 * Action
 */
export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
  };
}
