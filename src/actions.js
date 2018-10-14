import {INPUT_NUMBER, REFRESH_CLICKED, CLICKED_NEXT} from "./actionTypes";

export const refreshClicked = (number) => {
  return {
    type: REFRESH_CLICKED,
    payload: number + 1
  }
};

export const typeNumber = (input) => {
  return {
    type: INPUT_NUMBER,
    payload: input
  }
};

export const clickNext = () => {
  return {
    type: CLICKED_NEXT,
    payload: true
  }
};