import {CLICKED_BACK, CLICKED_NEXT, INPUT_NUMBER, REFRESH_CLICKED} from './actionTypes';

const initialState = {
  clickRefreshCount: 0,
  input: '',
  clickedNext: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REFRESH_CLICKED:
      return {
        ...state,
        clickRefreshCount: action.payload
      };
    case INPUT_NUMBER:
      return {
        ...state,
        input: action.payload
      };
    case CLICKED_NEXT:
      return {
        ...state,
        clickedNext: action.payload
      };
    case CLICKED_BACK:
      return {
        clickRefreshCount: 0,
        input: '',
        clickedNext: action.payload
      };
    default:
      return state;
  }
}