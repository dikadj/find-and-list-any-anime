import { combineReducers } from "redux"

export const watchedFilter = (state="SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_WATCHED_FILTER":
      return action.filter
    default:
      return state
  }
}

export const visibilityFilter = (filter="all") => { // ui data for store data
  switch (filter) {
    case "watched":
      return watchedFilter(undefined, { type: "SET_WATCHED_FILTER", filter: "SHOW_WATCHED" })
    case "unwatched":
      return watchedFilter(undefined, { type: "SET_WATCHED_FILTER", filter: "SHOW_UNWATCHED" })
    default:
      return watchedFilter(undefined, { type: "SET_WATCHED_FILTER", filter: "SHOW_ALL" })
  }
}

export const getVisibleList = (state=[], filter) => {
  switch (filter) {
    case "SHOW_WATCHED":
      return state.filter(li => li.watched)
    case "SHOW_UNWATCHED":
      return state.filter(li => !li.watched)
    default:
      return state
  }
}

export const animeDetails = (state, action) => {
  switch (action.type) {
    case "ADD_ANIME":
      return {
        id: action.id,
        title: action.title,
        imgSrc: action.imgSrc,
        imgAlt: action.imgAlt,
        year: action.year,
        rating: action.rating,
        watched: false,
      }
    case "TOGGLE_WATCHED_ANIME":
      return (
        state.id !== action.id ?
          state :
          { ...state, watched: !state.watched }
      )
    default:
      return state
  }
}

export const animeList = (state=[], action) => {
  switch (action.type) {
    case "ADD_ANIME":
      return [
        ...state,
        animeDetails(undefined, action)
      ]
    case "TOGGLE_WATCHED_ANIME":
      return state.map(ani => animeDetails(ani, action))
    default:
      return state
  }
}
// helpers for fetching API
export const queryStringToUrl = (q) => (
  q.split("")
    .map(char => char === " " ? "%20" : char ) // replace whitespace with "%20"
    .join("")
)

export const joinApiQuery = (q) => (
  "https://api.jikan.moe/v3/search/anime?q=" + queryStringToUrl(q) + "&limit=1"
)

// helper for Checkbox
export const capitalize = word => (
  word.charAt(0).toUpperCase() + word.slice(1)
)


const animeListApp = combineReducers({
  animeList,
  watchedFilter
})

export default animeListApp
