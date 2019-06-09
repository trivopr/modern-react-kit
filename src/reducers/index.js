import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer,
    messages: messageReducer
})
  
export default rootReducer;