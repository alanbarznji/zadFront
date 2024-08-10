import { applyMiddleware, combineReducers,createStore } from "redux";
import { thunk } from "redux-thunk";
import FormReducer from "./Reducer/FormReducer";
import AuthReducer from "./Reducer/AuthReducer";
import HawkarReducer from "./Reducer/HawkarReducer";

const rootReducer=combineReducers({
form:FormReducer,
auth:AuthReducer,
hawkar:HawkarReducer
})
const store=createStore(
rootReducer,applyMiddleware(thunk)
)
export default store