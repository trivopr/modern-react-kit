export const HIDE_MESSAGE = "HIDE_MESSAGE";
export const SET_MESSAGE = "SET_MESSAGE";
export const RESET_MESSAGE = "RESET_MESSAGE";

const initialState = {
  message: "",
  show: false,
  type: ""
};

const messageReducer = (state = initialState, {
  payload,
  type
}) => {
  switch (type) {
    case RESET_MESSAGE:
      return {
        ...state, message: "", type: ""
      };
    case HIDE_MESSAGE:
      return {
        ...state, show: false
      };
    case SET_MESSAGE:
      return {
        message: payload.message, show: true, type: payload.type
      };
    default:
      return state;
  }
};

export default messageReducer;