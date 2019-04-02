import React from "react"
import { ReactReduxContext } from "react-redux"
import CheckboxFilter from "./../containers/CheckboxFilter"

const { Consumer } = ReactReduxContext

const CounterAndFilter = ({ addedListCount }) => (
  <p className="d-flex justify-content-between">
    <small>
      <strong>total added: </strong>
      {addedListCount} {/* anime list count */}
      {" "} {/* just for adding spaces */}
    </small>
    <small>
      <strong>filter by: </strong>
      <Consumer>
        {({store}) => (
          <span>
            <CheckboxFilter
              filter="all"
              context={store}
            />
            <CheckboxFilter
              filter="watched"
              context={store}
            />
            <CheckboxFilter
              filter="unwatched"
              context={store}
            />
          </span>
        )}
      </Consumer>
    </small>
  </p>
)

export default CounterAndFilter
