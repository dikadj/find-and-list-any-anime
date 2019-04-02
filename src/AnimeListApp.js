import React from "react"
import Helmet from "react-helmet"
import { ReactReduxContext } from "react-redux"
import AddAnimeInput from "./containers/AddAnimeInput"
import CounterAndFilterStatus from "./containers/CounterAndFilterStatus"
import VisibleAnimeList from "./containers/VisibleAnimeList"

const { Consumer } = ReactReduxContext

const AnimeListApp = () => (
  <div>
    <Helmet>
      <title>Anime List</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    </Helmet>

    <br /> {/* remove when necessary */}

    {/* Consumer acts as a receiver */}
    <Consumer>
      {({store}) => { // argument received from Provider's "value" props
        return (
          <div className="container">
            <AddAnimeInput context={store} />
            <CounterAndFilterStatus context={store} />
            <VisibleAnimeList context={store} />
          </div>
        )
      }}
    </Consumer>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous" />
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous" />
  </div>
)

export default AnimeListApp
