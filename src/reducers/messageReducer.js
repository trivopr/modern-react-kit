import * as types from "../actions/actionTypes";

const initialState = {
  message: "",
  show: false,
  type: ""
};

const messageReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case types.RESET_MESSAGE:
      return { ...state, message: "", type: "" };
    case types.HIDE_MESSAGE:
      return { ...state, show: false };
    case types.SET_MESSAGE:
      return { message: payload.message, show: true, type: payload.type };
    default:
      return state;
  }
};

export default messageReducer;