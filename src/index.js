import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { createStore, applyMiddleware } from "redux"
import rootReducer from "./store/rootReducer"

import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

import { BrowserRouter } from "react-router-dom"
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
