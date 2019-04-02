import { connect } from "react-redux"
import { toggleWatchedAnime } from "./../actionCreators"
import AnimeList from "./../components/AnimeList"

const mapStateAnimeListToProps = state => ({
  animeList: state.animeList,
  watchedFilter: state.watchedFilter
})

const mapDispatchAnimeListToProps = dispatch => ({
  onChangeWatched: id => {
    dispatch(toggleWatchedAnime(id))
  }
})

const VisibleAnimeList = connect(
  mapStateAnimeListToProps,
  mapDispatchAnimeListToProps
)(AnimeList) // used for rendering Presentational component

export default VisibleAnimeList
