import React from "react"
import { capitalize } from "./../reducers"

const Checkbox = ({ filter, onFilterChange, isRadioChecked }) => (
  <span>
    {" "} {/* just for adding spaces */}
    <input type="radio"
      name="filter"
      id={filter}
      value={filter}
      onChange={onFilterChange}
      checked={isRadioChecked} // initial filter "all"
    />
    {" "} {/* just for adding spaces */}
    <label
      htmlFor={filter}
    >
      {capitalize(filter)}
    </label>
    {" "} {/* just for adding spaces */}
  </span>
)

export default Checkbox
