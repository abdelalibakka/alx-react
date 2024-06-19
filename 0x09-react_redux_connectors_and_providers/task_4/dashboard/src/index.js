import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore, compose, combineReducers} from "redux";
import { Provider } from "react-redux";
import App from "./App/App";
import rootReducer, { initialState } from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(rootReducer),
  initialState,
  composeEnhancers()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
