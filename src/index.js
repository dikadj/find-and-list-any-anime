import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import AnimeListApp from "./AnimeListApp"
import store from "./store"

render(
  <Provider store={store}>
    <AnimeListApp />
  </Provider>,
  document.getElementById("root")
)
