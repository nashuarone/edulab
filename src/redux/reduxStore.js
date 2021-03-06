import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import coursesReducer from "./coursesReducer"
import fileReducer from "./fileReducer";
import newsReducer from "./newsReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  coursesPage: coursesReducer,
  newsPage: newsReducer,
  files: fileReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
