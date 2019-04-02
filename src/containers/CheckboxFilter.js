import { connect } from "react-redux"
import { visibilityFilter } from "./../reducers"
import { setWatchedFilter } from "./../actionCreators"
import Checkbox from "./../components/Checkbox"

const mapStateToCheckboxProps = ( state, ownProps ) => ({
  isRadioChecked: visibilityFilter(ownProps.filter) === state.watchedFilter
})

const mapDispatchToCheckboxProps = ( dispatch, ownProps ) => ({
  onFilterChange: e => {
    if (e.target.checked) {
      dispatch(setWatchedFilter(ownProps.filter))
    }
    // const store = ownProps.context
    // console.log(store.getState()) // REMOVE IN PRODUCTION
  }
})

const CheckboxFilter = connect(
  mapStateToCheckboxProps,
  mapDispatchToCheckboxProps
)(Checkbox)

export default CheckboxFilter
