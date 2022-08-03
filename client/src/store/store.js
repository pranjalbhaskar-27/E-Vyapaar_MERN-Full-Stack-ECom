import { getAllProdsReducer, getProdsByIdReducer } from "../reducers/products.reducer";
import {combineReducers} from 'redux';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const allReducer=combineReducers({

    getAllProdsReducer:getAllProdsReducer,
    getProdsByIdReducer:getProdsByIdReducer
}) 

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });


const store=createStore(allReducer,composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  ));


  export default store;