import { connect } from "react-redux"
import CounterAndFilter from "./../components/CounterAndFilter"

const mapStateToCounterAndFilterProps = ( state, ownProps ) => ({
  addedListCount: ownProps.context.getState().animeList.length // from store in context
})

const CounterAndFilterStatus = connect(
  mapStateToCounterAndFilterProps,
  null
)(CounterAndFilter)

export default CounterAndFilterStatus
